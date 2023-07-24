import React from "react";
import styles from "@/styles/delivery.module.css";
import Image from "next/image";
import Footer from "./components/global/Footer";
import AOS from "aos";
import { useState, useEffect } from "react";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Order from "./components/global/Order";
import axios from "axios";
import Loader from "./components/local/Loader";
import Counter from "@/utils/Counter";


const Delivery = () => {
  const [order, setOrder] = useState<boolean>(false);
  const [data, setData] = useState<any[] | any>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [count, setCount] = useState(0)

  useEffect(() => {
    order
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [order]);


  let price = 1200

  const get = "api/products";

  useEffect(() => {
    setLoad(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/${get}`)
      .then((res: any) => {
        setData(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
  }, []);
  console.log(data);



  if (!load && data) {
    return (
      <div className={styles.Delivery}>
        <TopHeader />
        <Header />
        <Categories />
        <Order order={order} setOrder={setOrder} />
        <div className={styles.cart}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Корзина</h1>
        </div>
        <section className={styles.DeliverySection}>
          <section className={styles.sectionLeft}>
            {data &&
              data.products.map((e: any, index: number) => {
                return (
                  <div key={index} className={styles.card}>
                    <input className={styles.input} type="checkbox" />
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_API}/${e.media[1].name}`}
                      width={94}
                      height={110}
                      alt="img"
                    />
                    <div className={styles.menu}>
                      <h1>{e.title}</h1>
                      <p style={{ color: "#B7AFAF" }}>{e.subcategory.name}</p>
                      <div style={{ display: "flex", gap: 10, paddingTop: 7 }}>
                        <label>Цвет:</label>
                        <p>Зеленый</p>
                      </div>
                      <div style={{ display: "flex", gap: 10 }}>
                        <label>Встроенная память:</label>
                        <p>256гб</p>
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
                        <Counter count={count} setCount={setCount}/>
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
                      <h1>{e.price[0].price}</h1>
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
                <h3>{count * price}$</h3>
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

export default Delivery;
