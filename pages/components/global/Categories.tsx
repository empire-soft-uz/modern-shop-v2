import React, { useState } from "react";
import styles from "@/styles/categories.module.css";
import Image from "next/image";
import Link from "next/link";
import SelectCategory from "./SelectCategory";

const Categories = () => {
  const [selected, setSelected] = useState<string>("")
  const [isCategoryOpen, setCategoryOpen] = useState<boolean>(false)

  const categories: string[] = ["Мужское", "Женское", "Детское", "Все для дома", "Электроника"]
  return (
    <>
      <div className={styles.categories} onMouseLeave={()=> {
        setCategoryOpen(false)
      }}>
        <div className={styles.container}>
          <div onClick={() => {
            setCategoryOpen(true)
          }} className={styles.categ}>
            <h3 style={{
              color: "#E4B717"
            }}>Категории</h3>
            <Image src={"/icons/categories.svg"} width={18} height={18} alt="just categories" />
          </div>
          <ul className={styles.selectList}>
            {categories.map((e: string) => {
              return <li className={styles.selectItem} key={e}>
                <h3>{e}</h3>
                <Image className={selected === e ? styles.animated : styles.just} src={"/icons/chevronDown.svg"} alt="chevron down" height={12} width={10} />
              </li>
            })}
          </ul>
          <div style={{
            opacity: 0
          }}>Lorem ipsum dolor sit</div>
          {isCategoryOpen && <SelectCategory />}
        </div>
      </div>
    </>
  );
};

export default Categories;
