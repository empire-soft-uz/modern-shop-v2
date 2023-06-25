import React, { useEffect } from "react";
import styles from "@/styles/liked.module.css";
import Header from "./components/global/Header";
import Buy from "@/public/images/Buy.png";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/global/Footer";
import AOS from "aos";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import Card from "./components/global/Card";

const Liked = () => {

  const cardObj = [
    {
      image: "/images/productPhone.png",
      w: 144,
      h: 192,
      title: "Iphone 14 PRO",
      price: "13.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/images/xboxController.png",
      w: 181,
      h: 192,
      title: "Xbox",
      price: "7.000.000 сум",
      cat: "Приставки",
    },
    {
      image: "/images/headPhone.png",
      w: 179,
      h: 192,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
    },
    {
      image: "/images/smphone.png",
      w: 160,
      h: 192,
      title: "Samsung M53",
      price: "4.000.000 сум",
      cat: "Телефоны",
    },
  ];

  return (
    <div className={styles.liked} data-aos="zoom-in-up">
      <TopHeader />
      <Header />
      <Categories />
      <div className={styles.Favorites}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Избранное</h1>
      </div>
      <div className={styles.liked__section}>
        <div className={styles.liked__cards}>
          {cardObj.map((card, index) => {
            return (
              <Card animation="zoom-in" cat={card.cat} height={card.h} image={card.image} price={card.price} title={card.title} width={card.w} key={index} />
            );
          })}
        </div>
      </div>
      <div style={{ marginTop: "11rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Liked;
