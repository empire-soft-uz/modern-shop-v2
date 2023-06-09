import React from "react";
import styles from "../../styles/topnav.module.css";
import Link from "next/link";

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
    </div>
  );
};

export default TopHeader;
