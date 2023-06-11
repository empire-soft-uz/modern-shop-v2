import React from "react";
import styles from "../../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <h2
          style={{
            color: "#E4B717",
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: 29,
          }}
        >
          Modern
        </h2>
        <div className={styles.search}>
          <input type="text" placeholder="Поиск" />
          <Image src="/search.svg" alt="search icon" width={22} height={22} />
        </div>
        <div className={styles.contra}>
          <div className={styles.contraLeft}>
            <div className={styles.image}>
              <Image
                src={"/inet.svg"}
                alt="language icon"
                width={20}
                height={20}
              />
            </div>
            <select>
              <optgroup>
                <option value="RU">RU</option>
                <option value="EN">EN</option>
                <option value="UZ">UZ</option>
              </optgroup>
            </select>
          </div>
          <div className={styles.contraRight}>
            <div className={styles.image}>
              <Image
                src={"/call.svg"}
                alt="language icon"
                width={20}
                height={20}
              />
            </div>
            <Link
              href={"tel: + 998 99 999 99 99"}
              style={{
                color: "#000",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              + 998 99 999 99 99
            </Link>
          </div>
          <div className={styles.ads}>
            <div className={styles.image}>
              <Image
                src={"/like.svg"}
                alt="language icon"
                width={20}
                height={20}
              />
            </div>
            <div className={styles.image}>
              <Image
                src={"/buy.svg"}
                alt="language icon"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
