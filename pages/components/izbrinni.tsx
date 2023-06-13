import React from 'react'
import styles from "../../styles/izbrinni.module.css"
import NavBar from './NavBar'
import Header from './Header'
import HeaderButton from './HeaderButton'
import { useState } from 'react'
import like from '../../public/like.svg'
import Buy from '../../public/Buy.png'
import likeBlue from '../../public/likeBlue.svg'
import Link from 'next/link';
import Image from 'next/image'
import Footer from './footer'

const izbrinni = () => {

    const izbrinniObj = [
        {
            image: "/phone.svg",
            title: "Iphone 14 PRO",
            kategoriya: "Телефоны",
            price: "13.000.000",
            width: 144,
            height: 193
        },
        {
            image: "/ps4.svg",
            title: "Xbox",
            kategoriya: "Приставки",
            price: "7.000.000 сум",
            width: 192,
            height: 193
        },
        {
            image: "/blackPods.svg",
            title: "Наушники SONY",
            kategoriya: "Аксессуары",
            price: "300.000 сум",
            width: 193,
            height: 193
        },
        {
            image: "/samsung.svg",
            title: "Samsung M53",
            kategoriya: "Телефоны",
            price: "4.000.000 сум",
            width: 197,
            height: 193
        },
    ]
    const [likes, setLikes] = useState(true);

    return (


        <div className={styles.Izbrinni}>
            <NavBar />
            <Header />
            <HeaderButton />
            <div className={styles.Favorites}>
                <h1 style={{ fontSize: 20, fontWeight: 700 }}>Корзина</h1>
            </div>
            <div className={styles.izbrinni__section}>
                <div className={styles.izbrinni__cards}>
                    {izbrinniObj.map((card, index) => {
                        return <div>
                            <div className={styles.Card} key={index}>
                                <div className={styles.like}>
                                    <Image src={card.image} width={card.width} height={card.height} alt="product" />
                                    <Link href="#">
                                        <Image onClick={() => {
                                            setLikes(!likes)
                                        }} src={!likes ? like : likeBlue} width={43.96} height={45.6} alt='like' />
                                    </Link>
                                </div>
                                <h3 style={{ fontSize: 20, fontWeight: 700, paddingTop: 13 }}>{card.title}</h3>
                                <p style={{ fontWeight: 450, color: "#D3D3D3" }}>{card.kategoriya}</p>
                                <div className={styles.order}>
                                    <h3>{card.price}</h3>
                                    <div className={styles.korzinka}>
                                        <Link href="/components/History">
                                            <Image src={Buy} width={18.6} height={20.46} alt='buy' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

            <div style={{ marginTop: 170 }}>
                <Footer />
            </div>
        </div>
    )
}

export default izbrinni