import React from "react";
import styles from "../../styles/Header.module.css";
import Four from "../../public/four.svg";
import Image from "next/image";
import Link from "next/link";
import arrow from "../../public/arrow.svg";
import { useState } from "react";
import Kategor from "./Kategor";

const HeaderButton = () => {
  const [kate, setKate] = useState(false);

  const Kate = () => {
    setKate(!kate);
  };

  return (
    <div className={styles.HeaderButton}>
      <div className={styles.HeaderButton__section}>
        <button onClick={Kate} className={styles.katagorie}>
          <p>Категории</p>
          <Image src={Four} width={18} height={18} alt="four" />
        </button>
        <div className={styles.Header__down}>
          <Link href="#">Мужское</Link>
          <Image
            style={{ paddingLeft: 7 }}
            src={arrow}
            width={22}
            height={12}
            alt="arrow"
          />
        </div>
        <div className={styles.Header__down}>
          <Link href="#">Женское</Link>
          <Image
            style={{ paddingLeft: 7 }}
            src={arrow}
            width={22}
            height={12}
            alt="arrow"
          />
        </div>
        <div className={styles.Header__down}>
          <Link href="#">Детское</Link>
          <Image
            style={{ paddingLeft: 7 }}
            src={arrow}
            width={22}
            height={12}
            alt="arrow"
          />
        </div>
        <div className={styles.Header__down}>
          <Link href="#">Все для дома</Link>
          <Image
            style={{ paddingLeft: 7 }}
            src={arrow}
            width={22}
            height={12}
            alt="arrow"
          />
        </div>
        <div className={styles.Header__down}>
          <Link href="#">Электроника</Link>
          <Image
            style={{ paddingLeft: 7 }}
            src={arrow}
            width={22}
            height={12}
            alt="arrow"
          />
        </div>
      </div>
      {kate && <Kategor />}
    </div>
  );
};

export default HeaderButton;
