import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/selectCategory.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import axios from "axios";

interface Categories {
  categories: any | any[];
  selected: string;
}

const SelectCategory = ({ categories, selected }: Categories) => {
  const [data, setData] = useState<any[] | any>([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    setLoad(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/subcategories`)
      .then((res: any) => {
        setData(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
  }, []);

  console.log("suke", categories);

  return (
    <div data-aos="zoom-in" className={styles.selectCategory}>
      <section className={styles.categorSection}>
        {categories &&
          categories?.map((e: any, index: number) => {
            return (
              <div key={index} className={styles.categorLeft}>
                <div className={styles.iconOfCat}>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${e.icon.name}`}
                    width={100}
                    height={100}
                    alt="dress"
                  />
                  <h1>{e.name}</h1>
                </div>
              </div>
            );
          })}
        <div className={styles.categorRight}>
          <ul>  
              {data && data.map((e: any, index: number) => {
                return <li key={index}><Link key={index} style={{color: "#666565"}} href={`/category?q=${e.name.toLocaleLowerCase()}`}>{e.name}</Link></li>
              })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SelectCategory;
