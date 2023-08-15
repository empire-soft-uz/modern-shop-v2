import styles from "@/styles/category.module.css";
import Header from "./components/global/Header";
import Image from "next/image";
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
  const [subcategor, setSubcategory] = useState<any[] | any>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [selectedProps, setSelectedProps] = useState<any[] | any>([]);
  const [selectedProduct, setSelectedProduct] = useState<any[] | any>([]);
  const [likedObj, setLikedObj] = useState<any[]>([]);

  const cardBurgerHandler = () => {
    setCardBurger(!cardBurger);
  };

  const router = useRouter();

  const { subcategory } = router.query;

  useEffect(() => {
    setLoad(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/subcategories/${subcategory}`)
      .then((res: any) => {
        setSubcategory(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
  }, []);

  const handlerFilter = () => {
    const p = new Set(selectedProps);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/products/`, {
        params: {
          props: selectedProps,
        },
      })
      .then((res: any) => {
        setSelectedProps(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
    console.log(selectedProps);
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/products/`, {
        params: {
          subcategory: subcategory,
        },
      })
      .then((res: any) => {
        setSelectedProduct(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
  }, []);

  const storage =
    subcategor &&
    subcategor.props?.filter((e: any) => e.prop.name === "Storage");
  const color =
    subcategor && subcategor.props?.filter((e: any) => e.prop.name === "Color");
  const manif =
    subcategor &&
    subcategor.props?.filter((e: any) => e.prop.name === "Manufacturer");

  if (!load && selectedProps) {
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
                selectedProps={selectedProps}
                setSelectedProps={setSelectedProps}
                color={color}
                storage={storage}
                manif={manif}
                handlerFilter={handlerFilter}
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
                        className={styles.radioInput}
                        onClick={() => {
                          setSelectedProps([e.id]);
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
                        className={styles.checkBoxInput}
                        onClick={() => {
                          setSelectedProps([...selectedProps, e.id]);
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
                        className={styles.checkBoxInput}
                        onClick={() => {
                          setSelectedProps([...selectedProps, e.id]);
                        }}
                      >
                        <input type="radio" name={e.prop.name} />
                        <label>{e.value}</label>
                      </div>
                    );
                  })}
                </div>
              )}
              <button onClick={handlerFilter} className={styles.apply}>
                Apply
              </button>
            </section>
            <section className={styles.sectionRight}>
              {selectedProps.length === 0 && selectedProduct
                ? selectedProduct.products?.map((e: any, index: number) => {
                    return (
                      <Card
                        animation="fade-down"
                        cat={e.subcategory.name}
                        url={e.id}
                        height={300}
                        width={300}
                        image={
                          e.media.length
                            ? ` ${process.env.NEXT_PUBLIC_IMAGE_API}/${e.media[1]?.name}`
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
                  })
                : selectedProps.products?.map((e: any, index: number) => {
                    return (
                      <Card
                        animation="fade-down"
                        cat={e.subcategory.name}
                        url={e.id}
                        height={300}
                        width={300}
                        image={
                          e.media.length
                            ? ` ${process.env.NEXT_PUBLIC_IMAGE_API}/${e.media[1]?.name}`
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
