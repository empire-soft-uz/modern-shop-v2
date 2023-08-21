import ICategory from '@/interfaces/ICategory'
import IProduct from '@/interfaces/Product/IProduct'
import axios from 'axios'
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Card from '../components/global/Card'
import Categories from '../components/global/Categories'
import Footer from '../components/global/Footer'
import Header from '../components/global/Header'
import TopHeader from '../components/global/TopHeader'
import CardBurger from '../components/local/CardBurger'
import Loader from '../components/local/Loader'
import styles from "@/styles/category.module.css";
import Image from "next/image";
import { ISubcategory } from '@/interfaces/ISubcategory'

type Repo = {
    params: { id: string }
    seubcategories:ISubcategory
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  //@ts-ignore
    const res = await axios.get<ISubcategory>('/subcategories/' + params.id)
    const data = res.data
    let props={}
    // data.props.map(d=>{
    //   console.log(d)
    //   if(props[d.prop.name] in props){
    //     props[d.prop.name]=[...props[d.prop.name],d]
    //   }
    //   else{
    //     props[d.prop.name]=[d]
    //   }
    // })
    console.log(props)
    return { props: { subcategories:data, params } }
}

export default function Page({
    data, params
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [cardBurger, setCardBurger] = useState<boolean>(false);
  const [subcategor, setSubcategory] = useState();
  const [load, setLoad] = useState<boolean>(true);
  const [selectedProps, setSelectedProps] = useState<any[] | any>([]);
  const [selectedProduct, setSelectedProduct] = useState<
    { page: number; products: IProduct[]; limit: number } | undefined
  >();
  const [likedObj, setLikedObj] = useState<any[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  const cardBurgerHandler = () => {
    setCardBurger(!cardBurger);
  };

  const router = useRouter();

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
  // useEffect(() => {
  //   if (subcategory) {
  //     axios
  //       .get(`${process.env.NEXT_PUBLIC_API}/api/subcategories/${subcategory}`)
  //       .then((res: any) => {
  //         console.log(res.data);
  //         setSubcategory(res.data);
  //       })
  //       .catch((e: string) => console.log(e))
  //       .finally(() => {
  //         setLoad(false);
  //       });
  //   }
  // }, []);
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
          <Categories categories={categories} subcategories={subcategor} />
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
              {data && (
                <div className={styles.manufacturer}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p className={styles.manufacturerTitle}>
                      {data.props[0].prop.name}
                    </p>
                    <Image
                      src={"/toparrow.svg"}
                      width={15}
                      height={12}
                      alt="toparrow"
                    />
                  </div>
                  {data.props.map((e: any) => {
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
              {selectedProduct &&
                selectedProduct.products.map((e, index: number) => (
                  <Card
                    animation="fade-down"
                    // @ts-ignore
                    cat={subcategory?subcategory.id:''}
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

              {/* {selectedProps.length === 0 && selectedProduct
                ? selectedProduct?.map((e: any, index: number) => {
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
                  })} */}
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