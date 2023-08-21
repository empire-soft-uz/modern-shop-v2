import React from "react";
import Image from "next/image";
import MultiRangeSlider from "./MultiRangeSlider";
import styles from "@/styles/cardBurger.module.css";
import { v4 as uuidv4 } from "uuid"
interface card {
  setCardBurger: Function;
  cardBurger: boolean;
  selectedManif: string;
  setSelectedManif: Function;
  color: any;
  storage: any;
  manif: any
}

const CardBurger = ({
  setCardBurger,
  cardBurger,
  selectedManif,
  setSelectedManif,
  color,
  storage,
  manif
}: card) => {
  return (
    <div className={styles.cardBurger}>
      <button
        onClick={() => {
          setCardBurger(false);
        }}
      >
        <Image
          className={styles.close}
          src={"icons/close.svg"}
          width={24}
          height={24}
          alt="close"
        />
      </button>
      <section className={styles.sectionLeft}>
        {manif && (
          <div className={styles.manufacturer}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className={styles.manufacturerTitle}>{manif[0].prop.name}</p>
              <Image
                src={"/toparrow.svg"}
                width={15}
                height={12}
                alt="toparrow"
              />
            </div>

            {manif.map((e: any) => {
              return (
                <div
                key={uuidv4()}
                  className={styles.radioInput}
                  onClick={() => {
                    setSelectedManif(e.value);
                  }}
                >
                  <input type="radio" name={e.prop.name} />
                  <label>{e.value}</label>
                </div>
              );
            })}
          </div>
        )}
        {storage && (
          <div className={styles.operative}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className={styles.operativeTitle}>{storage[0].prop.name}</p>
              <Image
                src={"/toparrow.svg"}
                width={15}
                height={12}
                alt="toparrow"
              />
            </div>
            {storage.map((e: any) => {
              return (
                <div
                key={uuidv4()}
                  className={styles.checkBoxInput}
                  onClick={() => {
                    setSelectedManif(e.value);
                  }}
                >
                  <input type="radio" name={e.prop.name} />
                  <label>{e.value}</label>
                </div>
              );
            })}
          </div>
        )}
        {color && (
          <div className={styles.operative}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p className={styles.operativeTitle}>{color[0].prop.name}</p>
              <Image
                src={"/toparrow.svg"}
                width={15}
                height={12}
                alt="toparrow"
              />
            </div>
            {color.map((e: any) => {
              return (
                <div
                key={uuidv4()}
                  className={styles.checkBoxInput}
                  onClick={() => {
                    setSelectedManif(e.value);
                  }}
                >
                  <input type="radio" name={e.prop.name} />
                  <label>{e.value}</label>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default CardBurger;
