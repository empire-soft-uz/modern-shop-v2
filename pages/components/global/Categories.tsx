import React, { useEffect, useState } from "react";
import styles from "@/styles/categories.module.css";
import Image from "next/image";
import Link from "next/link";
import SelectCategory from "./SelectCategory";
import axios, { AxiosError } from "axios";
import Loader from "../local/Loader";


interface ISelectCategory {
  categories: any[];
  subcategories: any[];
}

const Categories = ({ categories, subcategories }: ISelectCategory) => {
  const { v4: uuid } = require('uuidv4');
  const [mouseOver, setMouseOver] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const [isCategoryOpen, setCategoryOpen] = useState<boolean>(false);
  const [data, setData] = useState<any[] | any>([]);
  const [load, setLoad] = useState<boolean>(true);

  const [errs, setErrs] = useState<[{ message: string } | undefined]>();

  useEffect(() => {
    setLoad(true);
    const getData = async () => {
      try {
        const req1 = await axios.get("/categories");
        const req2 = await axios.get("/subcategories");
        const [res1, res2] = await axios.all([req1, req2]);
        setData(res2.data);
      } catch (error) {
        if (error instanceof AxiosError && error.response) {
          const { errors } = error.response.data;
          // @ts-ignore
          setErrs([...errors]);
        }
      } finally {
        setLoad(false);
      }
    };
    getData();
  }, []);

  if (!load) {
    return (
      <>
        <div
          className={styles.categories}
          onMouseLeave={() => {
            setCategoryOpen(false);
          }}
        >
          <div className={styles.container}>
            <div
              onClick={() => {
                setCategoryOpen(!isCategoryOpen);
              }}
              className={!isCategoryOpen ? styles.categ : styles.close}
            >
              <h3>Все категории</h3>
              <Image
                src={
                  !isCategoryOpen
                    ? "/icons/categories.svg"
                    : "/icons/modernClose.svg"
                }
                width={18}
                height={18}
                alt="just categories"
              />
            </div>
            <ul className={styles.selectList}>
              {categories &&
                categories.map((e: any, index: number) => {
                  if (index < 5) {
                    return (
                      <li
                        className={styles.selectItem}
                        key={uuid()}
                        onMouseOver={() => {
                          setMouseOver(true);
                          setSelected(e.name);
                        }}
                        onMouseLeave={() => {
                          setMouseOver(false);
                          setSelected("");
                        }}
                      >
                        <h3>{e.name}</h3>
                        <Image
                          className={
                            selected === e.name ? styles.animated : styles.just
                          }
                          src={"/icons/chevronDown.svg"}
                          alt="chevron down"
                          height={12}
                          width={10}
                        />
                      </li>
                    );
                  } else {
                    return "";
                  }
                })}
            </ul>
            {isCategoryOpen && (
              <SelectCategory selected={selected} categories={categories} />
            )}
          </div>
        </div>
      </>
    );
  }
  return <></>;
};

export default Categories;
