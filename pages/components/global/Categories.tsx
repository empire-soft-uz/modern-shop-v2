import React, { useEffect, useState } from "react";
import styles from "@/styles/categories.module.css";
import Image from "next/image";
import Link from "next/link";
import SelectCategory from "./SelectCategory";
import axios from "axios";
import Loader from "../local/Loader";

const Categories = () => {
  const [mouseOver, setMouseOver] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>("")
  const [isCategoryOpen, setCategoryOpen] = useState<boolean>(false)
  const [data, setData] = useState<any[] | any>([])
  const [categories, setCategories] = useState<any[] | any>([])
  const [load, setLoad] = useState<boolean>(true)

  useEffect(()=> {
    setLoad(true)
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/subcategories`)
    .then((res: any) => {
      setData(res.data);
    })
    .catch((e: string) => console.log(e)).finally(()=> {
      setLoad(false)
    })
  }, [])
  useEffect(()=> {
    setLoad(true)
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/categories`)
    .then((res: any) => {
      setCategories(res.data);
    })
    .catch((e: string) => console.log(e)).finally(()=> {
      setLoad(false)
    })
  }, [])

  if (!load) {
    return (
      <>
        <div className={styles.categories} onMouseLeave={()=> {
          setCategoryOpen(false)
        }}>
          <div className={styles.container}>
            <div onClick={() => {
              setCategoryOpen(!isCategoryOpen)
            }} className={!isCategoryOpen ? styles.categ : styles.close}>
              <h3>Категории</h3>
              <Image src={!isCategoryOpen ? "/icons/categories.svg" : "/icons/modernClose.svg"} width={18} height={18} alt="just categories" />
            </div>
            <ul className={styles.selectList}>
              {categories && categories.map((e: any, index :number) => {
                return <li className={styles.selectItem} style={index > 4 ? {
                  display:"none"
                }: {}} key={e.id} onMouseOver={() => {
                  setMouseOver(true)
                  setSelected(e.name)
                }} onMouseLeave={() => {
                  setMouseOver(false)
                  setSelected("")
                }}>
                  <h3>{e.name}</h3>
                  <Image className={selected === e.name ? styles.animated : styles.just} src={"/icons/chevronDown.svg"} alt="chevron down" height={12} width={10} />
                </li>
              })}
            </ul>
             { isCategoryOpen && <SelectCategory selected={selected} categories={categories} />} 
          </div>
        </div>
      </>
    );
  } else {
    return <Loader />
  }
};

export default Categories;
