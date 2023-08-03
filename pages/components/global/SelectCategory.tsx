import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/selectCategory.module.css";
import Image from "next/image";
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
  const [hovered, setHovered] = useState<any>("")

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

  if (hovered && data) {
    const hvd = data.find((dt: any) => dt.id === hovered.id);
  }
  data.find((dt:any) => {
    console.log(dt.id === "64c399c896ac6f4cfce07d37")
  })
  return (
    <div className={styles.selectCategory}>
      <section className={styles.categorSection}>
        <div className={styles.leftSide}>
          {categories &&
            categories?.map((e: any, index: number) => {
              return (
                <div key={index} className={styles.categorLeft}>
                  <div  onMouseOver={()=> {
                setHovered(e)
              }}   className={styles.iconOfCat}>
                    <h1>{e.name}</h1>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles.categorRight}>
          <ul>
            {hovered !== "" && hovered.subcategories.map((e: any, index: number) => {
              return <li key={index}><Link key={index} style={{ color: "#666565" }} href={`/category?q=${e.name.toLocaleLowerCase()}`}>{e.name}</Link></li>
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SelectCategory;
