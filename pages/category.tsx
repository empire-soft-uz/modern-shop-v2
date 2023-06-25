import styles from '../styles/category.module.css'
import Header from './components/global/Header'
import Image from 'next/image'
import MultiRangeSlider from './components/local/MultiRangeSlider'
import Card from './components/global/Card'
import Footer from './components/global/Footer'
import TopHeader from './components/global/TopHeader'
import Categories from './components/global/Categories'
import { useEffect, useState } from 'react'


export default function Categoriy() {
  const cardObj = [
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000000",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
    {
      image: "/icons/phone.svg",
      width: 107,
      height: 140,
      title: "Iphone 14 PRO",
      kategoriya: "Телефоны",
      price: "13.000.000сум",
    },
  ]
  const [isChecked, setIsChecked] = useState<number>(0)
  const [isSelected, setIsSelected] = useState<number>(0)
  useEffect(() => {
    setIsChecked(0)
    setIsSelected(0)
  }, [])
  return (
    <>
      <div className={styles.container}>
        <TopHeader />
        <Header />
        <Categories />
        <div className={styles.phone}>
          <h1 style={{ fontSize: 20, fontWeight: 700 }}>Телефоны</h1>
        </div>
        <div className={styles.card__section}>
          <div className={styles.section__left}>
            <div className={styles.price}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 18, fontWeight: 700 }}>Цена</p>
                <Image src={("/icons/toparrow.svg")} width={15} height={12} alt='toparrow' />
              </div>
              <div className={styles.rangeSlider}>
                <MultiRangeSlider min={100} max={700} />
              </div>
            </div>
            <div className={styles.manufacturer}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 18, fontWeight: 700 }}>Производитель</p>
                <Image src={('/icons/toparrow.svg')} width={15} height={12} alt='toparrow' />
              </div>
              <div onClick={() => {
                setIsSelected(0)
              }} className={styles.radio__input}>
                <input checked={isSelected === 0 ? true : false} type='radio' name='select company' />
                <label>Samsung</label>
              </div>
              <div onClick={() => {
                setIsSelected(1)
              }} className={styles.radio__input}>
                <input checked={isSelected === 1 ? true : false} type='radio' name='select company' />
                <label>Lg</label>
              </div>
              <div onClick={() => {
                setIsSelected(2)
              }} className={styles.radio__input}>
                <input checked={isSelected === 2 ? true : false} type='radio' name='select company' />
                <label>Apple</label>
              </div>
            </div>
            <div className={styles.operative}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <p style={{ fontSize: 18, fontWeight: 700 }}>Оператив. память</p>
                <Image src={("/icons/toparrow.svg")} width={15} height={12} alt='toparrow' />
              </div>
              <div onClick={() => {
                setIsChecked(0)
              }} className={styles.checkBox__input}>
                <input type="radio" name="select" checked={isChecked === 0 ? true : false} />
                <label>8 гб</label>
              </div>
              <div className={styles.checkBox__input} onClick={() => {
                setIsChecked(1)
              }}>
                <input checked={isChecked === 1 ? true : false} type="radio" name="select" />
                <label>4 гб</label>
              </div>
              <div onClick={() => {
                setIsChecked(2)
              }} className={styles.checkBox__input}>
                <input checked={isChecked === 2 ? true : false} type="radio" name="select" />
                <label>2 гб</label>
              </div>
            </div>
          </div>
          <div className={styles.section__right}>
            {cardObj.map((card, index) => {
              return <Card title={card.title} animation='fade-down' image={card.image} width={card.width} height={card.height} price={card.price} cat={card.kategoriya} key={index} />
            })}
          </div>
        </div>
        <div className={styles.carusel}>
          <div style={{ backgroundColor: "#E4B717", width: 39, height: 39, borderRadius: "100%", color: "#fff", textAlign: 'center', paddingTop: 8 }}>
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
