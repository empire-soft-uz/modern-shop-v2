import React, { useEffect, useState } from "react";
import styles from "../../../styles/topnav.module.css";
import Link from "next/link";
import Image from "next/image";
import Auth from "./Auth";

const TopHeader = () => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  useEffect(()=> {
    document.body.style.overflow = "auto"
  }, [!isAuthOpen])

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
      {isAuthOpen && <Auth  setIsAuthOpen={setIsAuthOpen}/>}
      </nav>
      <div onClick={()=> {
        setIsAuthOpen(true)
      }} className={styles.auth}>
        <Image src={"/user.svg"} width={14} height={18} alt="user icon" />
        <button>Войти</button>
        <p> | </p>
        <button>Зарегестрироваться</button>
      </div>
    </div>
  );
};

export default TopHeader;
