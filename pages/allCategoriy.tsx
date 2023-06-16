import React from "react";
import styles from "../styles/allCategoriy.module.css";
import { useState } from "react";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Image from "next/image";
import Card from "./components/global/Card";
import Footer from "./components/global/Footer";

const allCategoriy = () => {
  const [buttonColor, setButtonColor] = useState<number>(0);
  const [nav, setNav] = useState<number>(0);

  const cardObj = [
    {
      image: "/phone.svg",
      width: 95.51,
      height: 113.35,
      title: "Iphone 14 PRO",
      cat: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 95.51,
      height: 113.35,
      title: "Iphone 14 PRO",
      cat: "Телефоны",
      price: "13.000000сум",
    },
    {
      image: "/phone.svg",
      width: 95.51,
      height: 113.35,
      title: "Iphone 14 PRO",
      cat: "Телефоны",
      price: "13.000.000сум",
    },
  ];

  return (
    <div className={styles.allCategoriy} data-aos="zoom-in-down">
      <TopHeader />
      <Header />
      <Categories />
      <div className={styles.allCategoriy__section}>
        <h1>Вы смотрите:</h1>
        <div className={styles.NavButton}>
          <button
            onClick={() => {
              setButtonColor(0);
            }}
            style={
              buttonColor !== 0
                ? { borderColor: "#8A8A8A" }
                : { borderColor: "#E4B717", color: "#E4B717" }
            }
          >
            Продукты
          </button>
          <button
            style={
              buttonColor !== 1
                ? { borderColor: "#8A8A8A" }
                : { borderColor: "#E4B717", color: "#E4B717" }
            }
            onClick={() => {
              setButtonColor(1);
            }}
          >
            Заводы
          </button>
        </div>
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
        {[1, 2, 3, 4, 5].map((e: any) => {
          return (
            <div className={styles.cards} key={e}>
              <div className={styles.card__left}>
                <div className={styles.card__title}>
                  <Image
                    src={"/profile.svg"}
                    width={57}
                    height={57}
                    alt="profile"
                  />
                  <div>
                    <h3>Shenzhen Qingmai Bicycle Co., Ltd.</h3>
                    <p>Мужское</p>
                  </div>
                </div>
                <div className={styles.description}>
                  <p>Описание</p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
              <div className={styles.card__right}>
                <div className={styles.cards__button}>
                  <button>Посмотреть все товары</button>
                  <button>Связаться</button>
                </div>
                <div className={styles.carusel__card}>
                  {cardObj.map((card, index) => {
                    return (
                      <Card
                        image={card.image}
                        height={card.height}
                        width={card.width}
                        title={card.title}
                        price={card.price}
                        cat={card.cat}
                      />
                    );
                  })}
                  <div className={styles.controllerProduct}>
                    <button>
                      <Image
                        src={"/chevronLeft.svg"}
                        alt="chevron left icon"
                        width={11}
                        height={20}
                      />
                    </button>
                    <button>
                      <Image
                        src={"/chevronRight.svg"}
                        alt="chevron right icon"
                        width={11}
                        height={20}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className={styles.carusel}>
          <div
            style={{
              backgroundColor: "#E4B717",
              width: 39,
              height: 39,
              borderRadius: "100%",
              color: "#fff",
              textAlign: "center",
              paddingTop: 8,
            }}
          >
            <p>1</p>
          </div>
          <p>2</p>
          <p>3</p>
          <p>...</p>
          <p>5</p>
        </div>
        <div>
          <p className={styles.news__title}>Новости</p>
          <div className={styles.news__card}>
            {[1, 2, 3].map((e: any) => {
              return (
                <div className={styles.news}>
                  <div className={styles.news__months}>
                    <p>1</p>
                    <p>мая</p>
                  </div>
                  <div className={styles.news__discrb}>
                    <p>Мы оказываем широкий спектр услуг.</p>
                    <p>
                      Квартирные, офисные и дачные переезды– это наша ежедневная
                      работа и мы настоящие профессионалы своего дела.{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default allCategoriy;
