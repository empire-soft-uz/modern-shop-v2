import React, {useState} from "react";
import styles from "@/styles/categories.module.css";
import Image from "next/image";
import Link from "next/link";
// import CatSelect from "./CatSelect";
const Categories = () => {
    const [catSelect, setCatSelect] = useState<boolean>(false)
  return (
    <>
    <div className={styles.categories}>
      <div className={styles.container}>
        <div onClick={()=> {
            setCatSelect(!catSelect)
        }} className={styles.categ}>
            <h3 style={{
                color: "#E4B717"
            }}>Категории</h3>
            <Image src={"/icons/categories.svg"} width={18} height={18} alt="just categories" />
        </div>
        <ul className={styles.selectList}>
            <li>
                <h3>Мужское</h3>
                <Image src={"/icons/chevronDown.svg"} height={12} width={8} alt="chevron down" />
            </li>
            <li>
                <h3>Женское</h3>
                <Image src={"/icons/chevronDown.svg"} height={12} width={8} alt="chevron down" />
            </li>
            <li>
                <h3>Детское</h3>
                <Image src={"/icons/chevronDown.svg"} height={12} width={8} alt="chevron down" />
            </li>
            <li>
                <h3>Все для дома</h3>
                <Image src={"/icons/chevronDown.svg"} height={12} width={8} alt="chevron down" />
            </li>
            <li>
                <h3>Электроника</h3>
                <Image src={"/icons/chevronDown.svg"} height={12} width={8} alt="chevron down" />
            </li>
        </ul>
        <div style={{
            opacity: 0
        }}>Lorem ipsum dolor sit </div>
      </div>
    </div>
    {/* <CatSelect setCatSelect={setCatSelect} catSelect={catSelect} /> */}
    </>
  );
};

export default Categories;
