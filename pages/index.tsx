import Head from "next/head";
import styles from "@/styles/home.module.css";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Image from "next/image";
import Card from "./components/global/Card";
import News from "./components/local/News";
import Footer from "./components/global/Footer";
import { useState } from "react";
import HeaderTabs from "./components/local/HeaderTabs";
import classes from "@/styles/allCategoriy.module.css";

export default function Home() {

  const [likedObj, setLikedObj] = useState<any>([])
  const [nav, setNav] = useState<number>(0);
  const [buttonColor, setButtonColor] = useState<number>(0)

  const fakeObj = [
    {
      image: "/phone.svg",
      title: "Телефоны",
      height: 29,
      width: 52,
    },
    {
      image: "/uniform.svg",
      title: "Одежда",
      height: 51,
      width: 65,
    },
    {
      image: "/home.svg",
      title: "Для дома",
      height: 51,
      width: 52,
    },
    {
      image: "/pc.svg",
      title: "Компютеры",
      height: 47,
      width: 49,
    },
    {
      image: "/toys.svg",
      title: "Игрушки",
      height: 51,
      width: 52,
    },
    {
      image: "/sport.svg",
      title: "Спортивное",
      height: 60.5,
      width: 36,
    },
  ];
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
  ];
  const cardObj1 = [
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
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <TopHeader />
        <Header />
        <Categories />
        <div className={styles.container}>
          <HeaderTabs setButtonColor={setButtonColor} buttonColor={buttonColor} />
          {buttonColor === 0 ? <><div className={styles.add}>
            <div className={styles.addLeft}>
              <h1>iPhone 14 Pro</h1>
              <Image
                src="/iphone.png"
                alt="iphone image"
                width={308}
                height={410}
              />
              <div className={styles.controller}>
                {[1, 2, 3, 4].map((e: number) => {
                  return <div key={e} className={styles.circle} />;
                })}
              </div>
            </div>
          </div>
            <div className={styles.categories}>
              <h3
                style={{
                  fontSize: 23,
                }}
              >
                Категории для вас
              </h3>
              <div className={styles.catS}>
                {fakeObj.map((e: any) => {
                  return (
                    <div key={e.image} className={styles.cat}>
                      <div className={styles.catTop}>
                        <Image
                          src={e.image}
                          alt={`${e.image} image`}
                          width={e.width}
                          height={e.height}
                        />
                      </div>
                      <h4 className={styles.catTitle}>{e.title}</h4>
                    </div>
                  );
                })}
              </div>
              <div className={styles.catController}>
                <div className={styles.catControl}>
                  <Image
                    src={"/arrowLeft.svg"}
                    width={23}
                    height={16}
                    alt="controller"
                  />
                </div>
                <div className={styles.catControl}>
                  <Image
                    src={"/arrowRight.svg"}
                    width={23}
                    height={16}
                    alt="controller"
                  />
                </div>
              </div>
            </div>
            <section className={styles.newProducts}>
              <h3>Новые продукты</h3>
              <div className={styles.newProductsWrapper}>
                {cardObj.map((card, index) => {
                  return (
                    <Card
                      title={card.title}
                      image={card.image}
                      width={card.w}
                      height={card.h}
                      price={card.price}
                      cat={card.cat}
                      key={index}
                    />
                  );
                })}
              </div>
              <button className={styles.loadMore}>Посмотреть больше</button>
            </section>
            <section className={styles.newProducts}>
              <h3>Популярные продукты</h3>
              <div className={styles.newProductsWrapper}>
                {cardObj.map((card, index) => {
                  return (
                    <Card
                      title={card.title}
                      image={card.image}
                      width={card.w}
                      height={card.h}
                      price={card.price}
                      cat={card.cat}
                      key={index}
                    />
                  );
                })}
              </div>
              <button className={styles.loadMore}>Посмотреть больше</button>
            </section>
            <section className={styles.newProducts}>
              <h3>Новости</h3>
              <div className={styles.newsWrapper}>
                {[1, 2, 3].map((e) => {
                  return <News id={e} key={e} />;
                })}
              </div>
              <div className={styles.catController}>
                <div className={styles.catControl}>
                  <Image
                    src={"/arrowLeft.svg"}
                    width={23}
                    height={16}
                    alt="controller"
                  />
                </div>
                <div className={styles.catControl}>
                  <Image
                    src={"/arrowRight.svg"}
                    width={23}
                    height={16}
                    alt="controller"
                  />
                </div>
              </div>
            </section> </> : <>
            <div className={classes.navigation}>
              <div
                className={classes.nav}
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
                className={classes.nav}
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
                className={classes.nav}
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
                className={classes.nav}
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
                className={classes.nav}
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
                className={classes.nav}
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
                <div className={classes.cards} key={e}>
                  <div className={classes.card__left}>
                    <div className={classes.card__title}>
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
                    <div className={classes.description}>
                      <p>Описание</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                    </div>
                  </div>
                  <div className={classes.card__right}>
                    <div className={classes.cards__button}>
                      <button>Посмотреть все товары</button>
                      <button>Связаться</button>
                    </div>
                    <div className={classes.carusel__card}>
                      {cardObj1.map((card, index) => {
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
                      <div className={classes.controllerProduct}>
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
            <div className={classes.carusel}>
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
              <p className={classes.news__title}>Новости</p>
              <div className={classes.news__card}>
                {[1, 2, 3].map((e: any) => {
                  return (
                    <div className={classes.news}>
                      <div className={classes.news__months}>
                        <p>1</p>
                        <p>мая</p>
                      </div>
                      <div className={classes.news__discrb}>
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
            </div></>}
        </div>
        <Footer />
      </main>
    </>
  );
}
