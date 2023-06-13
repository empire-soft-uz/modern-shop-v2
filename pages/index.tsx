import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from './components/Header'
import NavBar from './components/NavBar'
import HeaderButton from './components/HeaderButton'
import topArrow from '../public/toparrow.svg'
import Image from 'next/image'
import MultiRangeSlider from './components/MultiRangeSlider'
import Card from './components/Card'
import Footer from './components/footer'
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [likedObj, setLikedObj] = useState<any>([])


  const cardObj = [
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000000",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
  ]

  useEffect(()=> {
    console.log(likedObj)
  })

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <NavBar />
        <Header />
        <HeaderButton />
        <div className={styles.telefon}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Телефоны</h1>
        </div>
        <div className={styles.card__section}>
          <div className={styles.section__left}>
            <div className={styles.price}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 18, fontWeight: 700 }}>Цена</p>
                <Image src={topArrow} width={15} height={12} alt='toparrow' />
              </div>
              <div className={styles.rangeSlider}>
                <MultiRangeSlider min={1} max={7} />
              </div>
            </div>
            <div className={styles.Manufacturer}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 18, fontWeight: 700 }}>Производитель</p>
                <Image src={topArrow} width={15} height={12} alt='toparrow' />
              </div>
              <div className={styles.radio__input}>
                <input type='checkbox' />
                <label>Samsung</label>
              </div>
              <div className={styles.radio__input}>
                <input type='checkbox' />
                <label>Lg</label>
              </div>
              <div className={styles.radio__input}>
                <input type='checkbox' />
                <label>Apple</label>
              </div>
            </div>
            <div className={styles.Operative}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 18, fontWeight: 700 }}>Оператив. память</p>
                <Image src={topArrow} width={15} height={12} alt='toparrow' />
              </div>
              <div className={styles.checkBox__input}>
                <input type='checkbox' />
                <label>8 гб</label>
              </div>
              <div className={styles.checkBox__input}>
                <input type='checkbox' />
                <label>4 гб</label>
              </div>
              <div className={styles.checkBox__input}>
                <input type='checkbox' />
                <label>2 гб</label>
              </div>
            </div>
          </div>
          <div className={styles.section__right}>
            {cardObj.map((card, index) => {
              return <Card title={card.title} card={card} likedObj={likedObj} setLikedObj={setLikedObj} image={card.image} width={card.width} height={card.height} price={card.price} kategoriya={card.kategoriya} key={index} />
            })}
          </div>
        </div>
        <div className={styles.carusel}>
          <div style={{backgroundColor: "#E4B717", width: 39, height: 39, borderRadius: "100%", color: "#fff", textAlign: 'center', paddingTop: 8}}>
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
  )
}
