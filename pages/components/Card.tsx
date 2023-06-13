import React, { useEffect } from 'react'
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
  setLikedObj: Function
  card: any
  likedObj: any
}



const Card = ({ price, title, width, height, image, kategoriya, card, setLikedObj, likedObj }: Card) => {


  // const value = localStorage.getItem("favoriteNumber") || ""

  // // Set the value received from the local storage to a local state
  // const [favoriteLikes, setFavoriteLikes] = useState(value)

  // // When user submits the form, save the favorite number to the local storage
  // const saveToLocalStorage = (e:any) => {
  //   setFavoriteLikes(e.target.value)
  //   e.preventDefault()
  //   localStorage.setItem("favoriteLikes", favoriteLikes)
  // }

  const [likes, setLikes] = useState(false)

  useEffect(()=> {
    console.log(likedObj)
  })

  return (
    <div className={styles.Card}>
      <div className={styles.like}>
        <Image src={image} width={width} height={height} alt="product" />
        <button onClick={()=> {
          likedObj.push(likedObj, {
            title: title,
            price: price,
            image: image,
            kategoriya: kategoriya,
            width: width,
            height: height
          })
        }}>
          <Image onClick={() => {
            setLikes(!likes)
          }} src={!likes ? like : likeBlue} width={43.96} height={45.6} alt='like' />
        </button>
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, paddingTop: 13 }}>{title}</h3>
      <p style={{ fontWeight: 450, color: "#D3D3D3" }}>{kategoriya}</p>
      <div className={styles.order}>
        <h3>{price}</h3>
        <div className={styles.korzinka}>
          <Link href="/components/Order">
            <Image src={Buy} width={18.6} height={20.46} alt='buy' />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card