import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import TopHeader from "../components/global/TopHeader";
import Header from "../components/global/Header";
import Categories from "../components/global/Categories";
import styles from "@/styles/detail.module.css";
import Image from "next/image";
import Footer from "../components/global/Footer";
import Card from "../components/global/Card";
import Reviews from "../components/local/Reviews";
import Chat from "../components/local/Chat";
import Order from "../components/global/Order";
import { useRouter } from "next/router";
import axios from "axios";
import Loader from "../components/local/Loader";

const Detail = () => {
  const [controllerC, setControllerC] = useState<number>(0);
  const [controllerM, setControllerM] = useState<number>(0);
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [order, setOrder] = useState<boolean>(false);
  const [load, setLoad] = useState<boolean>(true)
  const [textLength, setTextLength] = useState<number>(1000)
  const [data, setData] = useState<any | any[]>([])
  const [likedObj, setLikedObj] = useState<any[] | any>([]);

  const router = useRouter()
  const { id } = router.query


  useEffect(() => {
    order !== true ? document.body.style.overflow = "auto" : document.body.style.overflow = "hidden"
  }, [order])
  useEffect(() => {
    isChatOpen !== true
      ? (document.body.style.overflow = "auto")
      : (document.body.style.overflow = "hidden");
  }, [isChatOpen]);

  useEffect(() => {
    setLoad(true)
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/products`).then((res: any) => {
      setData(res.data)
    }).catch((err: string) => {
      console.log(err)
    }).finally(() => {
      setLoad(false)
    })
  }, [])


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
  ];

  const sentence =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const videoRef = useRef<HTMLVideoElement | any>()

  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. " 

  if (!load) {
    const selectedProduct = data && data.products?.find((product: any) => product.id === id)
    return (
      <>
        <Head>
          <title>{selectedProduct?.name} - Page</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
        </Head>
        <main className={styles.detail}>
          <TopHeader />
          <Header />
          <Categories />
          <div className={styles.container}>
            <section className={styles.characteris}>
              <h3>
                {selectedProduct ? selectedProduct.name : "Apple iPhone 14"} {" "}
                {controllerM === 0 ? 256 : controllerM === 1 ? 512 : 1}
                {controllerM < 2 ? "GB" : "TB"}
              </h3>
              <div className={styles.characterisInfo}>
                <div className={styles.leftSide}>
                  <button className={styles.selectedImage}>
                    <Image
                      src={selectedProduct ? `${process.env.NEXT_PUBLIC_IMAGE_API}/${selectedProduct?.media[2].name}`: "/images/14.png"}
                      alt="iphone 14"
                      width={353}
                      height={460}
                    />
                  </button>
                </div>
                <Order selectedProduct={selectedProduct} order={order} setOrder={setOrder} />
                <div className={styles.characterSide}>
                  <div className={styles.character}>
                    <div className={styles.characterInfo}>
                      <div className={styles.characterInfoLeft}>
                        <p>Экран......................................</p>
                        <p>Модель процессора.............</p>
                        <p>Встроенная память................</p>
                        <p>Оперативная память.............</p>
                        <p>Разрешение камеры.............</p>
                      </div>
                      <div className={styles.characterInfoRight}>
                        <p>6.8</p>
                        <p>Snapdragon 8 Gen 2</p>
                        <p>
                          {controllerM === 0 ? 256 : controllerM === 1 ? 512 : 1}{" "}
                          {controllerM < 2 ? "Гб" : "Тб"}
                        </p>
                        <p>12 Гб</p>
                        <p>12 Мп, 10/10 Мп, 200 Мп</p>
                      </div>
                    </div>
                    <button>Все характеристики</button>
                    {isChatOpen && <Chat setIsChatOpen={setIsChatOpen} />}
                    <div
                      style={{
                        marginTop: "1.5rem",
                      }}
                      className={styles.characterInfo}
                    >
                      <div className={styles.characterInfoLeft}>
                        <p>Цвет.........................................</p>
                      </div>
                      <div className={styles.characterInfoRight}>
                        <p>Зеленый</p>
                      </div>
                    </div>
                    <div className={styles.imagesToSelect}>
                      {[0,1,2].map((e: number) => {
                        return <div key={e} className={styles.imageToSelect} style={e == 0 ? {boxShadow: "0px 1px 17px rgba(228, 183, 23, 0.3)"} : {}}>
                          <Image
                          src={selectedProduct ? `${process.env.NEXT_PUBLIC_IMAGE_API}/${selectedProduct?.media[e].name}`: "/images/smphone.png"}
                          alt={selectedProduct ? selectedProduct.name : "another phone image"}
                          width={71}
                          height={84.5}
                        />
                        </div>
                      })}
                    </div>
                    <div
                      style={{
                        marginTop: "1.5rem",
                      }}
                      className={styles.characterInfo}
                    >
                      <div className={styles.characterInfoLeft}>
                        <p>Встроенная память...............</p>
                      </div>
                      <div className={styles.characterInfoRight}>
                        <p>
                          {controllerM === 0 ? 256 : controllerM === 1 ? 512 : 1}{" "}
                          {controllerM < 2 ? "гб" : "тб"}
                        </p>
                      </div>
                    </div>
                    <div className={styles.selectMemory}>
                      <button
                        type="button"
                        className={
                          controllerM === 0 ? styles.memoryd : styles.memory
                        }
                        onClick={() => {
                          setControllerM(0);
                        }}
                      >
                        256 гб
                      </button>
                      <button
                        onClick={() => {
                          setControllerM(1);
                        }}
                        type="button"
                        className={
                          controllerM === 1 ? styles.memoryd : styles.memory
                        }
                      >
                        512 гб
                      </button>
                      <button onClick={() => {
                        setControllerM(2);
                      }}
                        type="button"
                        className={
                          controllerM === 2 ? styles.memoryd : styles.memory
                        }
                      >
                        1 тб
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.costSide}>
                  <div className={styles.costTop}>
                    <div className={styles.cost}>
                      <div className={styles.costP}>
                        <h3>18.000.000 сум</h3>
                        <h4
                          style={{
                            textDecoration: "line-through",
                          }}
                        >
                          23.000.000 сум
                        </h4>
                      </div>
                      <div className={styles.imageLike}>
                        <Image
                          src="/icons/liked.svg"
                          width={23}
                          height={22}
                          alt="like icon"
                        />
                      </div>
                    </div>
                    <div className={styles.buy}>
                      <button
                        type="button"
                        onClick={() => {
                          setOrder(true);
                        }}
                      >
                        Купить
                      </button>
                      <div className={styles.addCart}>
                        <Image
                          src={"/icons/buyY.svg"}
                          alt="add to cart icon"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.cartBottom}>
                    <button
                      onClick={() => {
                        setIsChatOpen(!isChatOpen);
                      }}
                      className={styles.cart}
                    >
                      <Image
                        src={"/icons/chat.svg"}
                        alt="chat icon"
                        width={43}
                        height={39}
                      />
                      Написать поставщику
                    </button>
                    <button className={styles.cart}>
                      <Image
                        src={"/icons/deliver.svg"}
                        alt="deliver icon"
                        width={49}
                        height={43}
                      />
                      Доставка
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.video}>
              <div className={styles.hole}>
                <video controls ref={videoRef} src="/videos/vieo.mp4" />
              </div>
            </section>
            <div className={styles.selectDetail}>
              <button
                className={controllerC === 0 ? styles.selected : styles.select}
                onClick={() => {
                  setControllerC(0);
                }}
              >
                Характеристики
              </button>
              <button
                onClick={() => {
                  setControllerC(1);
                }}
                className={controllerC === 0 ? styles.select : styles.selected}
              >
                Отзывы
              </button>
            </div>
            <section className={styles.detailSelected}>
              {controllerC === 0 ? (
                <>
                  <div className={styles.detailS}>
                    <div className={styles.characterInfo}><div className={styles.characterInfoLeft}>
                      <p>Экран......................................</p>
                      <p>Модель процессора.............</p>
                      <p>Встроенная память................</p>
                      <p>Оперативная память.............</p>
                      <p>Разрешение камеры.............</p>
                    </div>
                      <div className={styles.characterInfoRight}>
                        <p>6.8</p>
                        <p>Snapdragon 8 Gen 2</p>
                        <p>
                          {controllerM === 0 ? 256 : controllerM === 1 ? 512 : 1}
                          {controllerM < 2 ? "Гб" : "Тб"}
                        </p>
                        <p>12 Гб</p>
                        <p>12 Мп, 10/10 Мп, 200 Мп</p>
                      </div>
                    </div>
                    <div className={styles.characterInfo}>
                      <div className={styles.characterInfoLeft}>
                        <p>Экран......................................</p>
                        <p>Модель процессора.............</p>
                        <p>Встроенная память................</p>
                        <p>Оперативная память.............</p>
                        <p>Разрешение камеры.............</p>
                      </div>
                      <div className={styles.characterInfoRight}>
                        <p>6.8</p>
                        <p>Snapdragon 8 Gen 2</p>
                        <p>
                          {controllerM === 0 ? 256 : controllerM === 1 ? 512 : 1}
                          {controllerM < 2 ? "Гб" : "Тб"}
                        </p>
                        <p>12 Гб</p>
                        <p>12 Мп, 10/10 Мп, 200 Мп</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.info}>
                    <p
                      style={{
                        color: "#888888",
                        lineHeight: "25.6px",
                      }}

                    >
                      {selectedProduct? selectedProduct.description.substring(0, textLength) : desc.substring(0, textLength)} {selectedProduct && selectedProduct.description.length > 1000 ? <button onClick={() => {
                        setTextLength(selectedProduct?.description.length)
                      }} style={textLength !== selectedProduct?.description.length ? {
                        color: "#179AE4",
                        fontWeight: 700
                      } : {
                        display: "none"
                      }}>[read more]</button> : <button onClick={() => {
                        setTextLength(desc.length)
                      }} style={textLength !== desc.length ? {
                        color: "#179AE4",
                        fontWeight: 700
                      } : {
                        display: "none"
                      }}>[read more]</button> }
                    </p>
                  </div>
                </>
              ) : (
                <div className={styles.reviewsWrapper}>
                  {[1, 2, 3, 4].map((e: number) => {
                    return <Reviews key={e} />;
                  })}
                </div>
              )}
            </section>
            <section className={styles.similarProducts}>
              <h3>Похожие товары</h3>
              <div className={styles.productWrapper}>
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
                      likedObj={likedObj}
                      setLikedObj={setLikedObj}
                      isLiked
                      animation="fade-down"
                    />
                  );
                })}
              </div>
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
            </section>
          </div>
          <Footer />
        </main>
      </>
    );
  } else {
    return <Loader />
  }
};

export default Detail;
