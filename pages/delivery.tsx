import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import styles from "@/styles/delivery.module.css"

import Categories from './components/global/Categories'
import Header from './components/global/Header'
import TopHeader from './components/global/TopHeader'
import Footer from './components/global/Footer'
import { v4 as uuidv4 } from "uuid"
import ICategory from '@/interfaces/ICategory'
import axios from 'axios'
import ISubCategories from '@/interfaces/subinterfaces/ISubCategories'
import Loader from './components/local/Loader'
const Delivery = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [isSelected, setIsSelected] = useState<number>(0)
  const [load, setLoad] = useState<boolean>(true)
  const [categories, setCategories] = useState<ICategory[]>([])
  const [subCategories, setSubCategories] = useState<ISubCategories[]>([])

  useEffect(()=> {
    useEffect(() => {
      setLoad(true)
      const fetchData = async () => {
        try {
          const req2 = axios.get(`/categories`)
          const req1 = axios.get("/subcategories")
          const [res1, res2] = await axios.all([req1,req2])
          setSubCategories(res1.data)
          setCategories(res2.data)
        } catch (err) {
          console.error(err)
        } finally {
          setLoad(false)
        }
      }
      fetchData()
    }, [])
  }, [])

  if (!load) {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.delivery}>
          <TopHeader />
          <Header />
          <Categories categories={categories} subcategories={subCategories} />
          <div className={styles.container}>
            <h2>Доставка</h2>
            <div className={styles.article}>
              <div className={styles.deliver}>
                <Image src={"/images/deliver.png"} width={594} height={480} alt='deliver image' />
              </div>
              <div className={styles.articleTitle}>
                <h3>Заголовок текст</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
              </div>
            </div>
            <div className={styles.quests}>
              <h2>Часто задаваемые вопросы</h2>
              {[1, 2, 3, 4].map((e: number) => {
                return <div key={uuidv4()} onClick={() => {
                  setIsOpened(!isOpened)
                  setIsSelected(e)
                }} className={styles.quest}>
                  <div className={styles.questTop}>
                    <h3>Генеральный партнер выставки</h3>
                    <button onClick={() => {
                      setIsOpened(!isOpened)
                    }}>
                      <Image style={isSelected !== e ? {
                        transform: "rotate(-180deg)"
                      } : {}} src={"/icons/chevron.svg"} alt='chevron icon' width={10} height={17} />
                    </button>
                  </div>
                  <p className={isSelected !== e ? styles.dn : styles.just}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  </p>
                </div>
              })}
            </div>
          </div>
          <Footer />
        </main>
      </>
    )
  } else {
    return <Loader />
  }
}

export default Delivery