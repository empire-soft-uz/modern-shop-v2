import React, { useEffect, useState } from "react";
import styles from "@/styles/topnav.module.css";
import Link from "next/link";
import Image from "next/image";
import Auth from "./Auth";

const TopHeader = () => {
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);

  const [fromWhere, setFromWhere] = useState<number>(0)

  useEffect(() => {
    document.body.style.overflow = "auto"
  }, [!isAuthOpen])

  return (
    <div className={styles.topNavBar}>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link href="/">Главная</Link>
          </li>
          <li>
            <Link href="/delivery">Доставка</Link>
          </li>
          <li>
            <Link href="#">Блог</Link>
          </li>
          <li>
            <Link href="/aboutUs">О нас</Link>
          </li>
          <li>
            <Link href="/profile">Профиль</Link>
          </li>
          <li>
            <Link href="/contact">Контакты</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.auth}>
        <Image src={"/icons/user.svg"} width={14} height={18} alt="user icon" />
        <button onClick={() => {
          setIsAuthOpen(true)
          setFromWhere(1)
        }} >Войти</button>
        <p> | </p>
        <button onClick={() => {
          setIsAuthOpen(true)
          setFromWhere(2)
        }}>Зарегестрироваться</button>
      </div>
      {isAuthOpen && <Auth fromWhere={fromWhere} setFromWhere={setFromWhere} isAuthOpen={isAuthOpen} setIsAuthOpen={setIsAuthOpen} />}
    </div>
  );
};

export default TopHeader;
