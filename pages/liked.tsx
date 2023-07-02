import React, { useEffect } from "react";
import styles from "@/styles/liked.module.css";
import Header from "./components/global/Header";
import Buy from "@/public/Buy.png";
import likeBlue from "@/public/likeBlue.svg";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/global/Footer";
import AOS from "aos";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";

const izbrinni = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const cardObj = [
    {
      image: "/productPhone.png",
      w: 144,
      h: 192,
      title: "Iphone 14 PRO",
      price: "13.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/xboxController.png",
      w: 181,
      h: 192,
      title: "Xbox",
      price: "7.000.000 сум",
      cat: "Приставки",
    },
    {
      image: "/headPhone.png",
      w: 179,
      h: 192,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
    },
    {
      image: "/smphone.png",
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
      <section className={styles.likedSection}>
        <div className={styles.likedCards}>
          {cardObj.map((card, index) => {
            return (
              <div className={styles.Card} key={index}>
                <div className={styles.like}>
                  <Image
                    src={card.image}
                    width={card.w}
                    height={card.h}
                    alt="product"
                  />
                  <button>
                    <Image
                      src={likeBlue}
                      width={43.96}
                      height={45.6}
                      alt="like"
                    />
                  </button>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, paddingTop: 13 }}>
                  {card.title}
                </h3>
                <p style={{ fontWeight: 450, color: "#D3D3D3" }}>{card.cat}</p>
                <div className={styles.order}>
                  <h3>{card.price}</h3>
                  <div className={styles.cart}>
                    <Link href="/delivery">
                      <Image src={Buy} width={18.6} height={20.46} alt="buy" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <div style={{ marginTop: "11rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default izbrinni;
