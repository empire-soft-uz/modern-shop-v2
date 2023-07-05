import React, { Dispatch, SetStateAction } from 'react'
import styles from "@/styles/burger.module.css"

interface Burger {
  setIsBurgerOpen: Function
  isBurgerOpen: boolean
}

const Burger = ({setIsBurgerOpen, isBurgerOpen}: Burger) => {
  return (
    <div className={styles.burger}>
      <div className={styles.container}>
rewfewef
      </div>
    </div>
  )
}

export default Burger