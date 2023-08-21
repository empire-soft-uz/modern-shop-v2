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
import { v4 as uuidv4 } from "uuid"
import ICategory from "@/interfaces/ICategory";
import ISubCategories from "@/interfaces/subinterfaces/ISubCategories";
export default function Categoriy() {
  const [cardBurger, setCardBurger] = useState<boolean>(false);
  const [data, setData] = useState<any[] | any>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [prop, setProp] = useState<any[] | any>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [selectedManif, setSelectedManif] = useState<string>("");

  const [filtered, setFiltered] = useState<any[]>([]);
  const [likedObj, setLikedObj] = useState<any[]>([]);

  const cardBurgerHandler = () => {
    setCardBurger(!cardBurger);
  };

  const router = useRouter();

  const { q } = router.query;
  const [subCategories, setSubCategories] = useState<ISubCategories[]>([])

  useEffect(() => {
    setLoad(true)
    const fetchData = async () => {
      try {
        const req1 = await axios.get("/subcategories")
        const req2 = await axios.get(`/categories`)
        const req3 = await axios.get("/subcategories/64c87160e3e287afa132d410")
        const req4 = await axios.get("/products")
        const [res1, res2, res3, res4] = await axios.all([req1, req2, req3, req4])
        setSubCategories(res1.data)
        setCategory(res2.data)
      } catch (err) {
        console.error(err)
      } finally {
        setLoad(false)
      }
    }
    fetchData()
  }, [])

  const storage =
    prop && prop.props?.filter((e: any) => e.prop.name === "Storage");
  const color = prop && prop.props?.filter((e: any) => e.prop.name === "Color");
  const manif =
    prop && prop.props?.filter((e: any) => e.prop.name === "Manufacturer");

  useEffect(() => {
    data &&
      data.products?.map((f: any) => {
        console.log(
          f.props.filter((s: any) => {
            if (s.value === selectedManif) {
              setFiltered([f]);
            } else {
              console.log("ewf");
            }
          })
        );
      });
  }, [selectedManif]);

  if (!load && data) {
    return (
      <>
        <div className={styles.container}>
          <TopHeader />
          <Header />
          <Categories categories={category} subcategories={subCategories} />
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
                selectedManif={selectedManif}
                setSelectedManif={setSelectedManif}
                color={color}
                storage={storage}
                manif={manif}
              />
            )}
            <section className={styles.sectionLeft}>
              {manif && (
                <div className={styles.manufacturer}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className={styles.manufacturerTitle}>
                      {manif[0].prop.name}
                    </p>
                    <Image
                      src={"/toparrow.svg"}
                      width={15}
                      height={12}
                      alt="toparrow"
                    />
                  </div>

                  {manif.map((e: any) => {
                    return (
                      <div
                        key={uuidv4()}
                        className={styles.radioInput}
                        onClick={() => {
                          setSelectedManif(e.value);
                        }}
                      >
                        <input type="radio" name={e.prop.name} />
                        <label>{e.value}</label>
                      </div>
                    );
                  })}
                </div>
              )}
              {storage && (
                <div className={styles.operative}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className={styles.operativeTitle}>
                      {storage[0].prop.name}
                    </p>
                    <Image
                      src={"/toparrow.svg"}
                      width={15}
                      height={12}
                      alt="toparrow"
                    />
                  </div>
                  {storage.map((e: any) => {
                    return (
                      <div
                        key={uuidv4()}
                        className={styles.checkBoxInput}
                        onClick={() => {
                          setSelectedManif(e.value);
                        }}
                      >
                        <input type="radio" name={e.prop.name} />
                        <label>{e.value}</label>
                      </div>
                    );
                  })}
                </div>
              )}
              {color && (
                <div className={styles.operative}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className={styles.operativeTitle}>
                      {color[0].prop.name}
                    </p>
                    <Image
                      src={"/toparrow.svg"}
                      width={15}
                      height={12}
                      alt="toparrow"
                    />
                  </div>
                  {color.map((e: any) => {
                    return (
                      <div
                        key={uuidv4()}
                        className={styles.checkBoxInput}
                        onClick={() => {
                          setSelectedManif(e.value);
                        }}
                      >
                        <input type="radio" name={e.prop.name} />
                        <label>{e.value}</label>
                      </div>
                    );
                  })}
                </div>
              )}
            </section>
            <section className={styles.sectionRight}>
              {filtered &&
                filtered?.map((e: any, index: number) => {
                  return (
                    <Card
                      animation="fade-down"
                      cat={e.subcategory.name}
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
                      key={uuidv4()}
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
