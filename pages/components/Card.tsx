import React from 'react'
import styles from '../../styles/card.module.css'
import Image from 'next/image';
import like from '../../public/like.svg'
import Buy from '../../public/Buy.png'
import likeBlue from '../../public/likeBlue.svg'
import { useState } from 'react';
import Link from 'next/link';

interface Card {
  title: string;
  price: string;
  width: number;
  height: number;
  image: string;
  kategoriya: string;
}

const Card = ({ price, title, width, height, image, kategoriya }: Card) => {

  const [likes, setLikes] = useState(false)

  return (
    <div className={styles.Card}>
      <div className={styles.like}>
        <Image src={image} width={width} height={height} alt="product" />
        <Image onClick={() => {
          setLikes(!likes)
        }} src={!likes ? like : likeBlue} width={43.96} height={45.6} alt='like' />
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, paddingTop: 13 }}>{title}</h3>
      <p style={{ fontWeight: 450, color: "#D3D3D3" }}>{kategoriya}</p>
      <div className={styles.order}>
        <h3>{price}</h3>
        <div className={styles.korzinka}>
          <Link href="/components/History">
            <Image src={Buy} width={18.6} height={20.46} alt='buy' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card