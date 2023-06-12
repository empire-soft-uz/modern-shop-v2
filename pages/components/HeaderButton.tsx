import React from 'react'
import styles from '../../styles/Header.module.css'
import Four from '../../public/four.svg'
import Image from 'next/image'
import Link from 'next/link'
import arrow from '../../public/arrow.svg'

const HeaderButton = () => {
    return (
        <div className={styles.HeaderButton}>
            <div className={styles.HeaderButton__section}>
                <button className={styles.katagorie}>
                    <p>Категории</p>
                    <Image src={Four} width={18} height={18} alt='four' />
                </button>
                <div className={styles.Header__down}>
                    <Link href="#">Мужское</Link>
                    <Image style={{paddingLeft: 7}} src={arrow} width={22} height={12} alt='arrow' />
                </div>
                <div className={styles.Header__down}>
                    <Link href="#">Женское</Link>
                    <Image style={{paddingLeft: 7}} src={arrow} width={22} height={12} alt='arrow' />
                </div>
                <div className={styles.Header__down}>
                    <Link href="#">Детское</Link>
                    <Image style={{paddingLeft: 7}} src={arrow} width={22} height={12} alt='arrow' />
                </div>
                <div className={styles.Header__down}>
                    <Link href="#">Все для дома</Link>
                    <Image style={{paddingLeft: 7}} src={arrow} width={22} height={12} alt='arrow' />
                </div>
                <div className={styles.Header__down}>
                    <Link href="#">Электроника</Link>
                    <Image style={{paddingLeft: 7}} src={arrow} width={22} height={12} alt='arrow' />
                </div>
            </div>
        </div>
    )
}

export default HeaderButton