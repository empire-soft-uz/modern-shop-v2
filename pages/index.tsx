import Head from "next/head";
import styles from "../styles/home.module.css";
import TopHeader from "./components/TopHeader";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Image from "next/image";
import Card from "./components/Card";
import News from "./components/News";
import Footer from "./components/Footer";

export default function Home() {
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
          <div className={styles.add}>
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
            <div className={styles.addRight}>
              <h3>Вы смотрите</h3>
              <div className={styles.cart}>
                <div className={styles.select}>
                  <Image
                    src={"/cart.svg"}
                    width={54}
                    height={50}
                    alt="just cart image"
                  />
                </div>
              </div>
              <h4
                style={{
                  marginBottom: "3rem",
                }}
              >
                Продукты
              </h4>
              <div className={styles.select}>
                <Image
                  src={"/factory.svg"}
                  width={54}
                  height={50}
                  alt="just cart image"
                />
              </div>
              <h4>Продукты</h4>
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
          </section>
        </div>
        <Footer/>
      </main>
    </>
  );
}
