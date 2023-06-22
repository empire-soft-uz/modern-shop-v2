import styles from '../styles/category.module.css'
import Header from './components/global/Header'
import Image from 'next/image'
import MultiRangeSlider from './components/local/MultiRangeSlider'
import Card from './components/global/Card'
import Footer from './components/global/Footer'
import { useEffect, useState } from 'react'
import TopHeader from './components/global/TopHeader'
import Categories from './components/global/Categories'


export default function Categoriy () {
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
      price: "13.000000сум",
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

  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <Header />
        <Categories />
        <div className={styles.phone}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Телефоны</h1>
        </div>
        <div className={styles.cardSection}>
          <div className={styles.sectionLeft}>
            <div className={styles.price}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className={styles.priceTitle}>Цена</p>
                <Image src={("/toparrow.svg")} width={15} height={12} alt='toparrow' />
              </div>
              <div className={styles.rangeSlider}>
                <MultiRangeSlider min={100} max={700} />
              </div>
            </div>
            <div className={styles.manufacturer}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className={styles.manufacturerTitle}>Производитель</p>
                <Image src={('/toparrow.svg')} width={15} height={12} alt='toparrow' />
              </div>
              <div className={styles.radioInput}>
                <input type='checkbox' />
                <label>Samsung</label>
              </div>
              <div className={styles.radioInput}>
                <input type='checkbox' />
                <label>Lg</label>
              </div>
              <div className={styles.radioInput}>
                <input type='checkbox' />
                <label>Apple</label>
              </div>
            </div>
            <div className={styles.operative}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p className={styles.operativeTitle}>Оператив. память</p>
                <Image src={("/toparrow.svg")} width={15} height={12} alt='toparrow' />
              </div>
              <div className={styles.checkBoxInput}>
                <input type='checkbox' />
                <label>8 гб</label>
              </div>
              <div className={styles.checkBoxInput}>
                <input type='checkbox' />
                <label>4 гб</label>
              </div>
              <div className={styles.checkBoxInput}>
                <input type='checkbox' />
                <label>2 гб</label>
              </div>
            </div>
          </div>
          <div className={styles.sectionRight}>
            {cardObj.map((card, index) => {
              return <Card title={card.title} image={card.image} width={card.width} height={card.height} price={card.price} cat={card.kategoriya} key={index} />
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
