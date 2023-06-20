import React from "react";
import styles from "../styles/delivery.module.css";
import Image from "next/image";
import Footer from "./components/global/Footer";
import AOS from "aos";
import { useState, useEffect } from "react";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Order from "./components/global/Order";

const Delivery = () => {
  const [application, setApplication] = useState(false);
  const [order, setOrder] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    order
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [order]);

  const OrderObj = [
    {
      image: "/phone.svg",
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      color: "Зеленый",
      memory: "256 гб",
      price: "8.000.0000 сум",
      width: 94,
      height: 110,
    },
    {
      image: "/phone.svg",
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      color: "Зеленый",
      memory: "256 гб",
      price: "8.000.0000 сум",
      width: 94,
      height: 110,
    },
    {
      image: "/phone.svg",
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      color: "Зеленый",
      memory: "256 гб",
      price: "8.000.0000 сум",
      width: 94,
      height: 110,
    },
  ];

  return (
    <div className={styles.Delivery} data-aos="zoom-in">
      <TopHeader />
      <Header />
      <Categories />
      <Order order={order} setOrder={setOrder}/>
      <div className={styles.cart}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Корзина</h1>
      </div>
      <div className={styles.Delivery__section}>
        <div className={styles.section__left}>
          {OrderObj.map((card, index) => {
            return (
              <div key={index} className={styles.card}>
                <input
                  style={{ width: 21.47, height: 21.47 }}
                  type="checkbox"
                />
                <Image
                  src={card.image}
                  width={card.width}
                  height={card.height}
                  alt="img"
                />
                <div className={styles.menu}>
                  <h1>{card.title}</h1>
                  <p style={{ color: "#B7AFAF" }}>{card.kategoriya}</p>
                  <div style={{ display: "flex", gap: 10, paddingTop: 7 }}>
                    <label>Цвет:</label>
                    <p>Цвет:{card.color}</p>
                  </div>
                  <div style={{ display: "flex", gap: 10 }}>
                    <label>Встроенная память:</label>
                    <p>{card.memory}</p>
                  </div>
                </div>
                <div className={styles.count}>
                  <p
                    style={{ fontSize: 18, fontWeight: 400, color: "#363636" }}
                  >
                    Кол-во:
                  </p>
                  <div className={styles.count__button}>
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                  </div>
                </div>
                <div>
                  <div className={styles.remove}>
                    <Image
                      src={"/remove.svg"}
                      width={14}
                      height={16}
                      alt="remove"
                    />
                    <p>Удалить</p>
                  </div>
                  <h1 style={{ paddingTop: 57, fontSize: 23, fontWeight: 700 }}>
                    {card.price}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.right}>
          <div className={styles.all__price}>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Delivery;
