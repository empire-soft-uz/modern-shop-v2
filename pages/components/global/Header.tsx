import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import Burger from "./Burger";

const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean | any>(false)
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href={"/"}
          style={{
            color: "#E4B717",
            textTransform: "uppercase",
            fontWeight: 700,
            fontSize: 29,
          }}
        >
          Modern
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Поиск" />
          <Image src="/icons/search.svg" alt="search icon" width={22} height={22} />
        </div>
        <div className={styles.contra}>
          <div className={styles.contraLeft}>
            <div className={styles.image}>
              <Image
                src={"/icons/inet.svg"}
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
                src={"/icons/call.svg"}
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
              <Link href="/liked">
                <Image
                  src={"/icons/like.svg"}
                  alt="language icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className={styles.image}>
              <Link href="/delivery">
                <Image
                  src={"/icons/buy.svg"}
                  alt="language icon"
                  width={20}
                  height={20}
                />
              </Link>
            </div>
            <div className={styles.image}>
              <button onClick={() => {
                setIsBurgerOpen(true)
              }}>
                <Image
                  src={"/icons/burger.svg"}
                  alt="language icon"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isBurgerOpen && <Burger isBurgerOpen={isBurgerOpen} setIsBurgerOpen={setIsBurgerOpen} />}
    </header>
  );
};

export default Header;
