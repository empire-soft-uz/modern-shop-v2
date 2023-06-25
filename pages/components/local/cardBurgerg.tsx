import React from "react";
import Image from "next/image";
import MultiRangeSlider from "./MultiRangeSlider";
import styles from "../../../styles/cardBurger.module.css";


interface card {
    setCardBurger: Function,
    cardBurger: boolean
}

const CardBurgerg = ({setCardBurger, cardBurger}: card) => {
  return (
    <div className={styles.cardBurger}>
      <button onClick={() => {
        setCardBurger(false)
      }}>
        <Image
          className={styles.close}
          src={"/close.svg"}
          width={24}
          height={24}
          alt="close"
        />
      </button>
      <div className={styles.sectionLeft}>
        <div className={styles.price}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p className={styles.priceTitle}>Цена</p>
            <Image
              src={"/toparrow.svg"}
              width={15}
              height={12}
              alt="toparrow"
            />
          </div>
          <div className={styles.rangeSlider}>
            <MultiRangeSlider min={100} max={700} />
          </div>
        </div>
        <div className={styles.manufacturer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p className={styles.manufacturerTitle}>Производитель</p>
            <Image
              src={"/toparrow.svg"}
              width={15}
              height={12}
              alt="toparrow"
            />
          </div>
          <div className={styles.radioInput}>
            <input type="checkbox" />
            <label>Samsung</label>
          </div>
          <div className={styles.radioInput}>
            <input type="checkbox" />
            <label>Lg</label>
          </div>
          <div className={styles.radioInput}>
            <input type="checkbox" />
            <label>Apple</label>
          </div>
        </div>
        <div className={styles.operative}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p className={styles.operativeTitle}>Оператив. память</p>
            <Image
              src={"/toparrow.svg"}
              width={15}
              height={12}
              alt="toparrow"
            />
          </div>
          <div className={styles.checkBoxInput}>
            <input type="checkbox" />
            <label>8 гб</label>
          </div>
          <div className={styles.checkBoxInput}>
            <input type="checkbox" />
            <label>4 гб</label>
          </div>
          <div className={styles.checkBoxInput}>
            <input type="checkbox" />
            <label>2 гб</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBurgerg;
