import React, { useEffect, useState } from "react";
import styles from "@/styles/liked.module.css";
import Header from "./components/global/Header";
import Buy from "@/public/images/Buy.png";
import Link from "next/link";
import Image from "next/image";
import Footer from "./components/global/Footer";
import AOS from "aos";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import Card from "./components/global/Card";
import axios from "axios";

const Liked = () => {

  const [categories, setCategories] = useState<any[] | any>([]);
  const [subCategories, setSubCategories] = useState<any[] | any>([]);
  const [likedObj, setLikedObj] = useState([])
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const categories = await axios.get("/categories");
        const subCategories = await axios.get("/subcategories");
        const [res1, res2] = await axios.all([categories, subCategories]);
        setCategories(res1.data);
        setSubCategories(res2.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);
  const cardObj = [
    {
      image: "/images/productPhone.png",
      w: 144,
      h: 192,
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
      h: 192,
      title: "Наушники SONY",
      price: "300.000 сум",
      cat: "Аксессуары",
    },
    {
      image: "/images/smphone.png",
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
      <Categories categories={categories} subcategories={subCategories} />
      <div className={styles.Favorites}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Избранное</h1>
      </div>
      <section className={styles.likedSection}>
        <div className={styles.likedCards}>
          {cardObj.map((card, index) => {
            return (
              <Card url={`/${index}`} animation="zoom-in" cat={card.cat} height={card.h} image={card.image} price={card.price} title={card.title} width={card.w} key={index} isLiked setLikedObj={setLikedObj} likedObj={likedObj}/>
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

export default Liked;
