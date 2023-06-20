import React from "react";
import styles from "@/styles/selectCategory.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SelectCategory = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div data-aos="fade-down" className={styles.selectCategory}>
      <section className={styles.categorSection}>
        <div className={styles.categorLeft}>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Мужское</h1>
          </div>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Женское</h1>
          </div>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Электроника</h1>
          </div>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Для дома</h1>
          </div>
        </div>
        <div className={styles.categorRight}>
          <div className={styles.table}>
            <ul>
              <li>
                <a href="#">Платья</a>
              </li>
              <li>
                <a href="#">Платья</a>
              </li>
              <li>
                <a href="#">Платья</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Футболки</a>
              </li>
              <li>
                <a href="#">Футболки</a>
              </li>
              <li>
                <a href="#">Футболки</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Обувь</a>
              </li>
              <li>
                <a href="#">Обувь</a>
              </li>
              <li>
                <a href="#">Обувь</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SelectCategory;
