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
import { useRouter } from "next/router";
import Loader from "./components/local/Loader";
import { Cookies } from "react-cookie";

interface Like {
  like: any;
  setLike: Function
}

const cookies = new Cookies()
const Liked = ({like, setLike}: Like) => {
  const [likedObj, setLikedObj] = useState<any[] | any>([]);

  const [likes, setLikes] = useState(true)
  useEffect(() => {
    const liked: any[] | any = cookies.get("likedObj")
    setLikedObj(liked);

    console.log(likedObj);
  }, []);

  console.log(likedObj);


  if (likedObj) {
    return (
      <div className={styles.liked} data-aos="zoom-in-up">
        <TopHeader />
        <Header />
        <Categories />
        <div className={styles.Favorites}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Избранное</h1>
        </div>
        <section className={styles.likedSection}>
          <div className={styles.newProductsWrapper}>
            {likedObj.map((card:any, index:any) => {
              return (
                <Card
                  url={index}
                  title={card.title}
                  image={card.image}
                  width={card.width}
                  height={card.height}
                  price={card.price}
                  cat={card.cat}
                  key={card.title}
                  animation={"fade-down"}
                  likedObj={likedObj}
                  setLikedObj={setLikedObj}
                  isLiked
                />
              );
            })}
          </div>
        </section>
        <div style={{ marginTop: "11rem" }}>
          <Footer />
        </div>
      </div>
    );
  } else {
    return <Loader />;
  }
};

export default Liked;
