import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/styles/card.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import likes from "../../../public/icons/like2.svg";
import likeBlue from "../../../public/likeBlue.svg";
import { useCookies } from 'react-cookie';
import { Cookies } from "react-cookie";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import "animate.css/animate.min.css";


interface Card {
  price: string;
  title: string;
  width: number;
  image: string;
  height: number;
  cat: string;
  animation: string;
  url: string | number;
  likedObj: any[] | any;
  setLikedObj: Function;
  isLiked: boolean;
}



const Card = ({
  price,
  title,
  width,
  height,
  image,
  cat,
  animation,
  url,
  likedObj,
  setLikedObj,
  isLiked,
}: Card) => {
  const router = useRouter();

  const [like, setLike] = useState(false);

  const [cookies, setCookie] = useCookies(['likedObj']);


  return (
    <AnimationOnScroll className={styles.card} duration={0.3} animateOut="animate__zoomOut" animateOnce animateIn={"animate__zoomIn"}>
      <Link className={styles.imageOfCard} href={`/detail/${url}`}>
        <Image src={image} alt="products image" width={width} height={height} />

        <div className={styles.somevalues}>
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
                src={"/icons/buyW.svg"}
                alt="add cart icon"
                width={21}
                height={20.5}
              />
            </div>
          </div>
        </div>
      </Link>
      <div
        className={styles.like}
        onClick={() => {
          likedObj.push({
            price,
            title,
            width,
            height,
            image,
            cat,
            animation,
            url
          })
          setCookie("likedObj", likedObj, { path: "/" })
        }}
      >
        <Image
          onClick={() => {
            setLike(!like);
          }}
          src={!like ? likes : likeBlue}
          alt="like icon"
          width={45}
          height={45}
        />
      </div>
    </AnimationOnScroll>
  );
};

export default Card;
