import React from 'react'
import styles from '../../styles/Header.module.css'
import Image from 'next/image'
import Search from '../../public/search.svg'
import World from '../../public/world.svg'
import Call from '../../public/call.svg'
import Heart from '../../public/heart.svg'
import Buy from '../../public/buy.svg'
import Link from 'next/link'

const Header = () => {

    return (
        <div className={styles.Header}>
            <div className={styles.Header__section}>
                  <h1 style={{ color: '#E4B717' }}>MODERN</h1>
                <div className={styles.Header__search}>
                    <input placeholder='Поиск' />
                    <Image src={Search} width={22} height={22} alt='Search' />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                    <div className={styles.select}>
                        <Image src={World} width={43} height={43} alt='world' />
                        <select>
                            <option value="RU">RU</option>
                            <option value="EN">EN</option>
                            <option value="UZ">UZ</option>
                        </select>
                    </div>
                    <div className={styles.call}>
                        <Image src={Call} width={43} height={43} alt='call' />
                        <p>+998 99 999 99 99</p>
                    </div>
                    <div className={styles.order}>
                        <Link href="/components/Izbrinni"><Image src={Heart} width={43} height={43} alt='heart' /></Link>
                        <Link href="/components/Order"><Image style={{ paddingLeft: 10 }} src={Buy} width={53} height={53} alt='buy' /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
