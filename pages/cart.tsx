import React from "react";
import styles from "@/styles/cart.module.css";
import Image from "next/image";
import Footer from "./components/global/Footer";
import AOS from "aos";
import { useState, useEffect } from "react";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Order from "./components/global/Order";
import axios from "axios";
import { useCookies } from "react-cookie";
import Loader from "./components/local/Loader";

const Cart = () => {
  const [order, setOrder] = useState<boolean>(false);
  const [allPrice, setAllPrice] = useState(false);
  const [load, setLoad] = useState(true);
  const [selectedType, setSelectedType] = useState<any[] | any>([]);

  const [data, setData] = useState<any | any[]>([]);
  const [categories, setCategories] = useState<any | any[]>([]);
  const [cookie] = useCookies(["aboutUser"]);
  const [userInform] = useCookies(["userInfo"]);
  const [selectedCards] = useCookies(["selectedCard"]);
  const { aboutUser } = cookie;
  const { selectedCard } = selectedCards;
  const { userInfo } = userInform;

  console.log(selectedCard);

  useEffect(() => {
    order
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [order]);

  useEffect(() => {
    setLoad(true);

    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/categories`)
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => console.log(err));
    setLoad(false);
  }, []);

  if (!load) {
    return (
      <div className={styles.Delivery}>
        <TopHeader />
        <Header />
        <Categories />
        <Order
          selectedProduct={selectedCard}
          order={order}
          setOrder={setOrder}
        />
        <div className={styles.cart}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Корзина</h1>
        </div>
        <section className={styles.DeliverySection}>
          <section className={styles.sectionLeft}>
            {selectedCard &&
              selectedCard?.map((card: any, index: number) => {
                return (
                  <div key={index} className={styles.card}>
                    <input className={styles.input} type="checkbox" />
                    <Image
                      src={
                        card.product
                          ? `${process.env.NEXT_PUBLIC_IMAGE_API}/${card.product.media[1].name}`
                          : "/images/14.png"
                      }
                      width={90}
                      height={100}
                      alt="img"
                    />
                    <div className={styles.menu}>
                      <h1>
                        {card.product
                          ? card.product.name
                          : `Phone named something ${card.productId}`}
                      </h1>
                      <p style={{ color: "#B7AFAF" }}>
                        {card.product.subcategory
                          ? card.product.subcategory.name
                          : "Artel"}
                      </p>
                      <div style={{ display: "flex", gap: 10, paddingTop: 7 }}>
                        <label>Цвет:</label>
                        <p>{card.color ? card.color : "Зеленый"}</p>
                      </div>
                      <div style={{ display: "flex", gap: 10 }}>
                        <label>Встроенная память:</label>
                        <p>{card.memory ? card.memory : "256 гб"}</p>
                      </div>
                    </div>
                    <div className={styles.count}>
                      <p
                        style={{
                          fontSize: 18,
                          fontWeight: 400,
                          color: "#363636",
                        }}
                      >
                        Кол-во:
                      </p>
                      <div className={styles.countButton}>
                        <button>-</button>
                        <p>1</p>
                        <button>+</button>
                      </div>
                    </div>
                    <div className={styles.countPrice}>
                      <div className={styles.remove}>
                        <Image
                          src={"/icons/remove.svg"}
                          width={14}
                          height={16}
                          alt="remove"
                        />
                        <p>Удалить</p>
                      </div>
                      <h1>
                        {card.product
                          ? `${card.product.price[0].price}`
                          : "900"}
                        .0000 сум
                      </h1>
                    </div>
                  </div>
                );
              })}
          </section>
          <section className={styles.right}>
            <div className={styles.allPrice}>
              <h1>Ваш заказ</h1>
              <div style={{ display: "flex", gap: 15, marginTop: 12 }}>
                <label>Товары (2):</label>
                <p>8.000.000 сум</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 100,
                  alignItems: "center",
                  marginTop: 5,
                }}
              >
                <label>Доставка:</label>
                <p>Текст</p>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 38,
                  alignItems: "center",
                  marginTop: 30,
                }}
              >
                <label>Итого:</label>
                <h3>16.000.000 сум</h3>
              </div>
              <button
                onClick={() => {
                  setOrder(true);
                }}
              >
                Заказать
              </button>
            </div>
          </section>
        </section>
        <Footer />
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Cart;
