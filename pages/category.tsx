import styles from "@/styles/category.module.css";
import Header from "./components/global/Header";
import Image from "next/image";
import Card from "./components/global/Card";
import Footer from "./components/global/Footer";
import { useState } from "react";
import TopHeader from "./components/global/TopHeader";
import Categories from "./components/global/Categories";
import CardBurger from "./components/local/CardBurger";
<<<<<<< HEAD

export default function Categoriy() {

  const [cardBurger, setCardBurger] = useState<boolean>(false)
=======
import axios from "axios";
import Loader from "./components/local/Loader";
import { useRouter } from "next/router";
import ICategory from "@/interfaces/ICategory";
import IProduct from "@/interfaces/Product/IProduct";
import CategoryProp from "./components/local/CategoryProp";
import ISubCategories from "@/interfaces/subinterfaces/ISubCategories";


export default function Categoriy() {
  const [cardBurger, setCardBurger] = useState<boolean>(false);
  const [subcategor, setSubcategory] = useState<any[] | any>();
  const [load, setLoad] = useState<boolean>(true);
  const [selectedProps, setSelectedProps] = useState<any[] | any>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    { page: number; products: IProduct[]; limit: number } | undefined
  >();
  const [likedObj, setLikedObj] = useState<any[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [subCategories, setSubCategories] = useState<ISubCategories[]>([]);
>>>>>>> 0db687d999447973dc78c7ecc059721e61b848d2

 const cardBurgerHandler = () =>{
  setCardBurger(!cardBurger)
 } 

  const cardObj = [
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
  ];

<<<<<<< HEAD
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <Header />
        <Categories />
        <div className={styles.phone}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Телефоны</h1>
=======
  const { subcategory } = router.query;

  useEffect(() => {
    setLoad(true);
    console.log(subcategory);
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

  useEffect(() => {
    setLoad(true)
    const fetchData = async () => {
      try {
        const categories = await axios.get("/categories")
        const subCategories = await axios.get("/subcategories")
        const [res1, res2] = await axios.all([categories, subCategories])
        setCategories(res1.data)
        setSubCategories(res2.data)
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (subcategory) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API}/api/subcategories/${subcategory}`)
        .then((res: any) => {
          console.log(res.data);
          setSubcategory(res.data);
        })
        .catch((e: string) => console.log(e))
        .finally(() => {
          setLoad(false);
        });
    }
  }, []);

  const handlerFilter = () => {
    const p = new Set(selectedProps);
    axios
      .get<IProduct[]>(`${process.env.NEXT_PUBLIC_API}/api/products/`, {
        params: {
          subcategory: subcategory,
          props: selectedProps,
        },
      })
      .then((res: any) => {
        setSelectedProduct(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });
  };

  if (!load && selectedProps) {
    return (
      <>
        <div className={styles.container}>
          <TopHeader />
          <Header />
          <Categories categories={categories} subcategories={subCategories} />
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
                handlerFilter={handlerFilter}
                subcategor={subcategor}
              />
            )}
            <CategoryProp
              selectedProps={selectedProps}
              setSelectedProps={setSelectedProps}
              handlerFilter={handlerFilter}
              subcategor={subcategor}
            />
            <section className={styles.sectionRight}>
              {selectedProduct &&
                selectedProduct.products.map((e, index: number) => (
                  <Card
                    animation="fade-down"
                    // @ts-ignore
                    cat={subcategory.id}
                    url={e.id}
                    height={300}
                    width={300}
                    image={
                      e.media.length
                        ? ` ${process.env.NEXT_PUBLIC_IMAGE_API}/${e.media[1]?.name}`
                        : "/images/14.png"
                    }
                    title={e.name}
                    // @ts-ignore
                    price={e.price[0].price}
                    key={e.id}
                    isLiked
                    likedObj={likedObj}
                    setLikedObj={setLikedObj}
                  />
                ))}
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
>>>>>>> 0db687d999447973dc78c7ecc059721e61b848d2
        </div>
        <section className={styles.cardSection}>
          <div className={styles.cardBurgerg} onClick={cardBurgerHandler}>
            <h3>Фильтр</h3>
            <Image src={"/rightArrow.svg"} width={24} height={24} alt="arrow" />
          </div>
          {cardBurger && <CardBurger setCardBurger={setCardBurger} cardBurger={cardBurger}/>}
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
            {cardObj.map((card, index) => {
              return (
                <Card
                url={`/detail/${index}`}
                  title={card.title}
                  image={card.image}
                  width={card.width}
                  height={card.height}
                  price={card.price}
                  cat={card.kategoriya}
                  key={index}
                  animation="zoom-in"
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
}
