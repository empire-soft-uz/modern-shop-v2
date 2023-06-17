import React from "react";
import Image from "next/image";
import styles from "@/styles/card.module.css";
import Link from "next/link";

interface Card {
  price: string;
  title: string;
  width: number;
  image: string;
  height: number;
  cat: string;
}

const Card = ({ price, title, width, height, image, cat }: Card) => {
  return (
    <Link href={`/detail/${price.split(".")[0]}`} className={styles.card}>
      <Image src={image} alt="products image" width={width} height={height} />
      <div className={styles.like}>
        <Image src={"/liked.svg"} alt="like icon" width={20.5} height={20} />
      </div>
      <h3
        style={{
          color: "#000",
        }}
      >
        {title}
      </h3>
      <h4>{cat}</h4>
      <div className={styles.cart}>
        <h3>{price}</h3>
          <div className={styles.box}>
            <Image
              src={"/buyW.svg"}
              alt="add cart icon"
              width={21}
              height={20.5}
            />
          </div>

      </div>
    </Link>
  );
};

export default Card;
