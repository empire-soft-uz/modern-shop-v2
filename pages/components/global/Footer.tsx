import React from "react";
import Link from "next/link";
import styles from "@/styles/footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href={"/"}
          className={styles.logo}
        >
          Modern
        </Link>
        <div className={styles.center}>
          <ul className={styles.navigation}>
            <li>
              <Link href={"#"}>Главная</Link>
            </li>
            <li>
              <Link href={"#"}>Магазин</Link>
            </li>
            <li>
              <Link href={"#"}>Доставка</Link>
            </li>
          </ul>
          <ul className={styles.navigation}>
            <li>
              <Link href={"#"}>Блог</Link>
            </li>
            <li>
              <Link href={"#"}>О нас</Link>
            </li>
            <li>
              <Link href={"#"}>Контакты</Link>
            </li>
          </ul>
          <ul className={styles.navigation}>
            <li>
              <Link href={"#"}>Вопросы и ответы</Link>
            </li>
          </ul>
        </div>
        <div className={styles.last}>
          <h3>Социальные сети:</h3>
          <div className={styles.links}>
            <Link href={"#"}>
              <Image
                src={"/icons/facebook.svg"}
                alt="facebook icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href={"#"}>
              {" "}
              <Image
                src={"/icons/tg.svg"}
                alt="telegram icon"
                width={25}
                height={25}
              />
            </Link>
            <Link href={"#"}>
              <Image
                src={"/icons/inst.svg"}
                alt="instagram icon"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
