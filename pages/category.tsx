import styles from "@/styles/category.module.css";
import Header from "./components/global/Header";
import Image from "next/image";
import MultiRangeSlider from "./components/local/MultiRangeSlider";
import Card from "./components/global/Card";
import Footer from "./components/global/Footer";
import { useState, useEffect } from "react";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import CardBurger from "./components/local/CardBurger";
import axios from "axios";
import Loader from "./components/local/Loader";
import { useRouter } from "next/router";

export default function Categoriy() {
  const [cardBurger, setCardBurger] = useState<boolean>(false);
  const [data, setData] = useState<any[] | any>([]);
  const [category, setCategory] = useState<any[] | any>([]);
  const [load, setLoad] = useState<boolean>(true);

  const [likedObj, setLikedObj] = useState<any[] | any>([]);

  const cardBurgerHandler = () => {
    setCardBurger(!cardBurger);
  };

  const router = useRouter();

  const { q } = router.query;

  console.log(q);

  const cat = category.map((e: any) =>
    e.subcategories.find((sub: any) => sub.name.toLocaleLowerCase() === q)
  );

  console.log(cat);

  useEffect(() => {
    setLoad(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/categories`)
      .then((res: any) => {
        setCategory(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
  }, []);

  useEffect(() => {
    setLoad(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/products`)
      .then((res: any) => {
        setData(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
  }, []);

  
  if (!load && data) {
    return (
      <>
        <div className={styles.container}>
          <TopHeader />
          <Header />
          <Categories />
          <div className={styles.phone}>
            <h1 style={{ fontSize: 20, fontWeight: 700 }}>Телефоны</h1>
          </div>
          <section className={styles.cardSection}>
            <div className={styles.cardBurgerg} onClick={cardBurgerHandler}>
              <h3>Фильтр</h3>
              <Image
                src={"/rightArrow.svg"}
                width={24}
                height={24}
                alt="arrow"
              />
            </div>
            {cardBurger && (
              <CardBurger
                setCardBurger={setCardBurger}
                cardBurger={cardBurger}
              />
            )}
            <section className={styles.sectionLeft}>
              <div className={styles.price}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p className={styles.priceTitle}>Цена</p>
                  <Image
                    src={"/toparrow.svg"}
                    width={15}
                    height={12}
                    alt="toparrow"
                  />
                </div>
                <div className={styles.rangeSlider}>
                  <MultiRangeSlider min={100} max={700} />
                </div>
              </div>
              <div className={styles.manufacturer}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p className={styles.manufacturerTitle}>Производитель</p>
                  <Image
                    src={"/toparrow.svg"}
                    width={15}
                    height={12}
                    alt="toparrow"
                  />
                </div>
                <div className={styles.radioInput}>
                  <input type="checkbox" />
                  <label>Samsung</label>
                </div>
                <div className={styles.radioInput}>
                  <input type="checkbox" />
                  <label>Lg</label>
                </div>
                <div className={styles.radioInput}>
                  <input type="checkbox" />
                  <label>Apple</label>
                </div>
              </div>
              <div className={styles.operative}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <p className={styles.operativeTitle}>Оператив. память</p>
                  <Image
                    src={"/toparrow.svg"}
                    width={15}
                    height={12}
                    alt="toparrow"
                  />
                </div>
                <div className={styles.checkBoxInput}>
                  <input type="checkbox" />
                  <label>8 гб</label>
                </div>
                <div className={styles.checkBoxInput}>
                  <input type="checkbox" />
                  <label>4 гб</label>
                </div>
                <div className={styles.checkBoxInput}>
                  <input type="checkbox" />
                  <label>2 гб</label>
                </div>
              </div>
            </section>
            <section className={styles.sectionRight}>
              {data &&
                data.products?.map((e: any, index: number) => {
                  return (
                    <Card
                      animation="fade-down"
                      cat={"e.subcategory.name"}
                      url={e.id}
                      height={300}
                      width={300}
                      image={
                        e.media.length
                          ? `${process.env.NEXT_PUBLIC_IMAGE_API}/${e.media[1]?.name}`
                          : "/images/14.png"
                      }
                      title={e.name}
                      price={e.price[0].price}
                      key={index}
                      isLiked
                      likedObj={likedObj}
                      setLikedObj={setLikedObj}
                    />
                  );
        
                })}
            </section>
          </section>
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
          <Footer />
        </div>
      </>
    );
  } else {
    return <Loader />;
  }
}
