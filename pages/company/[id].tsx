import React from "react";
import styles from "../../styles/company.module.css";
import TopHeader from "../components/global/TopHeader";
import Header from "../components/global/Header";
import Categories from "../components/global/Categories";
import Image from "next/image";
import { useState } from "react";
import Card from "../components/global/Card";
import Footer from "../components/global/Footer";
import Link from "next/link";

const Company = () => {
  const [nav, setNav] = useState<number>(0);

  const cardObj = [
    {
      image: "/productPhone.png",
      w: 144,
      h: 167,
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
      h: 190,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
    },
    {
      image: "/smphone.png",
      w: 160,
      h: 173,
      title: "Samsung M53",
      price: "4.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/smphone.png",
      w: 160,
      h: 173,
      title: "Samsung M53",
      price: "4.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/headPhone.png",
      w: 179,
      h: 190,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
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
      image: "/productPhone.png",
      w: 144,
      h: 167,
      title: "Iphone 14 PRO",
      price: "13.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/productPhone.png",
      w: 144,
      h: 167,
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
      h: 190,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
    },
    {
      image: "/smphone.png",
      w: 160,
      h: 173,
      title: "Samsung M53",
      price: "4.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/smphone.png",
      w: 160,
      h: 173,
      title: "Samsung M53",
      price: "4.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/headPhone.png",
      w: 179,
      h: 190,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
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
      image: "/productPhone.png",
      w: 144,
      h: 167,
      title: "Iphone 14 PRO",
      price: "13.000.000 сум",
      cat: "Телефоны",
    },
  ];

  return (
    <div className={styles.company}>
      <TopHeader />
      <Header />
      <Categories />
      <div className={styles.container}>
        <section className={styles.companyTitle}>
          <div className={styles.companyProfile}>
            <div className={styles.profileSection}>
              {" "}
              <Image
                src={"/profile.svg"}
                width={57}
                height={57}
                alt="profile"
              />
              <div className={styles.profile}>
                <h1>Shenzhen Qingmai Bicycle Co., Ltd.</h1>
                <p>Мужское</p>
              </div>
            </div>
            <button type="button">Связаться</button>
          </div>
          <div className={styles.companyDescrip}>
            <p>Описание</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
        <div className={styles.navigation}>
          <div
            className={styles.nav}
            style={
              nav !== 0
                ? { color: "#8A8A8A" }
                : { borderBottomColor: "#E4B717", color: "#000" }
            }
            onClick={() => {
              setNav(0);
            }}
          >
            <h3>Все категории</h3>
          </div>
          <div
            className={styles.nav}
            style={
              nav !== 1
                ? { color: "#8A8A8A" }
                : { borderBottomColor: "#E4B717", color: "#000" }
            }
            onClick={() => {
              setNav(1);
            }}
          >
            <h3>Мужское</h3>
          </div>
          <div
            className={styles.nav}
            style={
              nav !== 2
                ? { color: "#8A8A8A" }
                : { borderBottomColor: "#E4B717", color: "#000" }
            }
            onClick={() => {
              setNav(2);
            }}
          >
            <h3>Женское</h3>
          </div>
          <div
            className={styles.nav}
            style={
              nav !== 3
                ? { color: "#8A8A8A" }
                : { borderBottomColor: "#E4B717", color: "#000" }
            }
            onClick={() => {
              setNav(3);
            }}
          >
            <h3>Десткое</h3>
          </div>
          <div
            className={styles.nav}
            style={
              nav !== 4
                ? { color: "#8A8A8A" }
                : { borderBottomColor: "#E4B717", color: "#000" }
            }
            onClick={() => {
              setNav(4);
            }}
          >
            <h3>Все для дома</h3>
          </div>
          <div
            className={styles.nav}
            style={
              nav !== 5
                ? { color: "#8A8A8A" }
                : { borderColor: "#E4B717", color: "#000" }
            }
            onClick={() => {
              setNav(5);
            }}
          >
            <h3>Электроника</h3>
          </div>
          <button>Посмотреть больше</button>
        </div>
        <section className={styles.companyCards}>
          <h2>Товары поставщика</h2>
          <div className={styles.card}>
            {cardObj.map((card, index) => {
              return <Card image={card.image} width={card.w} height={card.h} title={card.title} price={card.price} cat={card.cat}/>
            })}
          </div>
        </section>
        <div className={styles.carusel}>
          <div style={{backgroundColor: "#E4B717", width: 39, height: 39, borderRadius: "100%", textAlign: 'center', paddingTop: 8}}>
            <Link style={{ color: "#fff", }} href="#">1</Link>
          </div>
          <Link href="#">2</Link>
          <Link href="#">3</Link>
          <Link href="#">...</Link>
          <Link href="#">5</Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Company;