import React from 'react'
import styles from '../../styles/NavBar.module.css'
import Link from 'next/link'
import user from '../../public/user.svg'
import Image from 'next/image'

const NavBar = () => {
    return (
        <div className={styles.NavBar}>
            <nav className={styles.navigation}>
                <ul>
                    <li>
                        <Link href="#">Главная</Link>
                    </li>
                    <li>
                        <Link href="#">Магазин</Link>
                    </li>
                    <li>
                        <Link href="#">Доставка</Link>
                    </li>
                    <li>
                        <Link href="#">Блог</Link>
                    </li>
                    <li>
                        <Link href="#">О нас</Link>
                    </li>
                    <li>
                        <Link href="#">Контакты</Link>
                    </li>
                </ul>
                <div className={styles.navigation__right}>
                    <Image src={user} width={14} height={18} alt='hello' />
                    <Link href="#">Войти</Link>
                    <p style={{ color: '#8A8A8A' }}> | </p>
                    <Link href="#">Зарегестрироваться</Link>
                </div>
            </nav>
        </div>
    )
}

export default NavBar