import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/card.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Aos from "aos";

interface Card {
  price: string;
  title: string;
  width: number;
  image: string;
  height: number;
  cat: string;
  animation: string;
  url : string
}

const Card = ({ price, title, width, height, image, cat, animation, url }: Card) => {

  const router = useRouter()

  const [liked, setLiked] = useState(false)

  useEffect(() => {
    setLiked(true)
  }, [router.pathname === "/liked"])

  useEffect(()=> {
    Aos.init()
  }, [])

  return (
    <Link data-aos={animation} href={`/detail/${url}`} className={styles.card}>
      <Image src={image} alt="products image" width={width} height={height} />
      <div className={styles.like}>
        <Image src={"/icons/liked.svg"} alt="like icon" width={20.5} height={20} />
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
        <h3>{typeof price === "string" ? price : `${price} сум`}</h3>
        <div className={styles.box}>
          <Image
            src={"/icons/buyW.svg"}
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
