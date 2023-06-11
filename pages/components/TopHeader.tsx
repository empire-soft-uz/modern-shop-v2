import React from "react";
import styles from "../../styles/topnav.module.css";
import Link from "next/link";
import Image from "next/image";

const TopHeader = () => {
  return (
    <div className={styles.topNavBar}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="#">Главная</Link>
          </li>
          <li>
            <Link href="#">Магазин</Link>
          </li>
          <li>
            <Link href="#">Доставка</Link>
          </li>
          <li>
            <Link href="#">Блог</Link>
          </li>
          <li>
            <Link href="#">О нас</Link>
          </li>
          <li>
            <Link href="#">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.auth}>
        <Image src={"/user.svg"} width={14} height={18} alt="user icon" />
        <Link href={"#"}>Войти</Link>
        <p> | </p>
        <Link href={"#"}>Зарегестрироваться</Link>
      </div>
    </div>
  );
};

export default TopHeader;
