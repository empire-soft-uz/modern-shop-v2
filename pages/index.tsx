import Head from "next/head";
import styles from "@/styles/home.module.css";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Image from "next/image";
import Card from "./components/global/Card";
import Footer from "./components/global/Footer";
import { useState, useRef, useEffect } from "react";
import HeaderTabs from "./components/local/HeaderTabs";
import classes from "@/styles/allCategory.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSwiper } from 'swiper/react';
import Link from "next/link";
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import { useRouter } from "next/router";
import 'swiper/css/pagination';
import backGetter from "@/utils/BackendGetter";
import axios from "axios"
import Loader from "./components/local/Loader";

export default function Home() {
  const [nav, setNav] = useState<number>(0);
  const [buttonColor, setButtonColor] = useState<number>(0)
  const [slidesPerView, setSlidesPerView] = useState<number>(4)
  const [data, setData] = useState<any[] | any>([])
  const [categories, setCategories] = useState<any | any[]>([])
  const [load, setLoad] = useState<boolean>(true)
  const router = useRouter()


  useEffect(() => {
    setLoad(true)
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/products`).then((res: any) => {
      setData(res.data)
    }).catch((e: string) => console.log(e))
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/categories`).then((res) => {
      setCategories(res.data)
    }).catch(err => console.log(err)).finally(() => {
      setLoad(false)
    })
  }, [])
  console.log(categories)

  const fakeObj = [
    {
      image: "/icons/phone.svg",
      title: "Телефоны",
      height: 29,
      width: 52,
    },
    {
      image: "/icons/uniform.svg",
      title: "Одежда",
      height: 51,
      width: 65,
    },
    {
      image: "/icons/home.svg",
      title: "Для дома",
      height: 51,
      width: 52,
    },
    {
      image: "/icons/pc.svg",
      title: "Компютеры",
      height: 47,
      width: 49,
    },
    {
      image: "/icons/toys.svg",
      title: "Игрушки",
      height: 51,
      width: 52,
    },
    {
      image: "/icons/sport.svg",
      title: "Спортивное",
      height: 60.5,
      width: 36,
    },
  ];
  const cardObj = [
    {
      image: "/images/productPhone.png",
      w: 144,
      h: 167,
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
      h: 190,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
    },
    {
      image: "/images/smphone.png",
      w: 160,
      h: 173,
      title: "Samsung M53",
      price: "4.000.000 сум",
      cat: "Телефоны",
    },
    {
      image: "/images/productPhone.png",
      w: 144,
      h: 167,
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
      h: 190,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
    },
    {
      image: "/images/smphone.png",
      w: 160,
      h: 173,
      title: "Samsung M53",
      price: "4.000.000 сум",
      cat: "Телефоны",
    },
  ];
  const cardObj1 = [
    {
      image: "/icons/phone.svg",
      width: 95.51,
      height: 113.35,
      title: "Iphone 14 PRO",
      cat: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 95.51,
      height: 113.35,
      title: "Iphone 14 PRO",
      cat: "Телефоны",
      price: "13.000000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 95.51,
      height: 113.35,
      title: "Iphone 14 PRO",
      cat: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 95.51,
      height: 113.35,
      title: "Iphone 14 PRO",
      cat: "Телефоны",
      price: "13.000.000сум",
    },
  ];

  useEffect(() => {
    document.body.offsetWidth < 680 && document.body.offsetWidth > 460 ? setSlidesPerView(3) : document.body.offsetWidth < 460 ? setSlidesPerView(2) : setSlidesPerView(4)
  }, [])

  const pagination: object = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  if (!load && data) {
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
            {buttonColor === 0 ? <>
              <div>
                <Swiper
                  pagination={pagination}
                  modules={[Pagination]}
                  className={styles.add}
                >
                  <SwiperSlide className={styles.addItem}>
                    <div className={styles.addLeft}>
                      <h1>iPhone 14 Pro</h1>
                      <Image
                        src="/images/iphone.png"
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
                  </SwiperSlide>
                  <SwiperSlide className={styles.addItem}>
                    <div className={styles.addLeft}>
                      <h1>iPhone 14 Pro</h1>
                      <Image
                        src="/images/iphone.png"
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
                  </SwiperSlide>
                  <SwiperSlide className={styles.addItem}>
                    <div className={styles.addLeft}>
                      <h1>iPhone 14 Pro</h1>
                      <Image
                        src="/images/iphone.png"
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
                  </SwiperSlide>
                  <SwiperSlide className={styles.addItem}>
                    <div className={styles.addLeft}>
                      <h1>iPhone 14 Pro</h1>
                      <Image
                        src="/images/iphone.png"
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
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className={styles.categories}>
                <h3
                  style={{
                    fontSize: 23,
                  }}
                >
                  Категории для вас
                </h3>
                <Swiper
                  spaceBetween={50}
                  slidesPerView={slidesPerView}
                  className={styles.swiperL}
                  modules={[Navigation]}
                  navigation={true}
                >
                  {fakeObj.map((e: any) => {
                    return (
                      <SwiperSlide key={e.image} style={{
                        marginRight: 0
                      }} className={styles.cat}>
                        <div className={styles.catTop}>
                          <Image
                            src={e.image}
                            alt={`${e.image} image`}
                            width={e.width}
                            height={e.height}
                          />
                        </div>
                        <h4 className={styles.catTitle}>{e.title}</h4>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <section className={styles.newProducts}>
                <h3>Новые продукты</h3>
                <div className={styles.newProductsWrapper}>
                  {cardObj.map((card, index) => {
                    return (
                      <Card
                        url={`${index}`}
                        title={card.title}
                        image={card.image}
                        width={card.w}
                        height={card.h}
                        price={card.price}
                        cat={card.cat}
                        key={index}
                        animation={"fade-down"}
                      />
                    );
                  })}
                  {data && data?.products?.map((e: any, index: number) => {
                    return (
                      <Card
                        animation="fade-down"
                        cat={e.subcategory.name}
                        url={e.id}
                        height={300}
                        width={300}
                        image={`${process.env.NEXT_PUBLIC_IMAGE_API}/${e.media[0].name}`}
                        title={e.name}
                        price={e.price[0].price}
                        key={index}
                      />
                    )
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
                        url={`${index}`}
                        title={card.title}
                        image={card.image}
                        width={card.w}
                        height={card.h}
                        price={card.price}
                        cat={card.cat}
                        key={index}
                        animation="fade-down"
                      />
                    );
                  })}
                </div>
                <button className={styles.loadMore}>Посмотреть больше</button>
              </section>
            </> : <>
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
              {[1, 2, 3, 4, 5].map((e: number) => {
                return (
                  <div className={styles.cards} key={e}>
                    <div className={styles.card__left}>
                      <Link style={{
                        color: "#000"
                      }} href={`/company/${e}`} className={styles.card__title}>
                        <Image
                          src={"/icons/profile.svg"}
                          width={57}
                          height={57}
                          alt="profile"
                        />
                        <div>
                          <h3>Shenzhen Qingmai Bicycle Co., Ltd.</h3>
                          <p>Мужское</p>
                        </div>
                      </Link>
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
                        <button onClick={() => {
                          router.push(`/company/${e}`)
                        }}>Посмотреть все товары</button>
                        <button>Связаться</button>
                      </div>
                      <div className={styles.carusel__card}>
                        {cardObj1.map((card, index) => {
                          return (
                            <Card
                              url={`${index}`}
                              image={card.image}
                              height={card.height}
                              width={card.width}
                              title={card.title}
                              price={card.price}
                              cat={card.cat}
                              animation="zoom-in"
                              key={index}
                            />
                          );
                        })}
                        <div className={styles.controllerProduct}>
                          <button>
                            <Image
                              src={"/icons/chevronLeft.svg"}
                              alt="chevron left icon"
                              width={11}
                              height={20}
                            />
                          </button>
                          <button>
                            <Image
                              src={"/icons/chevronRight.svg"}
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
            </>}
          </div>
          <Footer />
        </main >
      </>
    );
  } else {
    return <Loader />
  }
}
