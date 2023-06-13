import React from 'react'
import styles from '../../styles/profile.module.css'
import NavBar from './NavBar'
import Header from './Header'
import HeaderButton from './HeaderButton'
import Footer from './footer'
import Image from 'next/image'
import { useState } from 'react'
import ChanchePassword from './ChanchePassword'

const Profile = () => {

    const [isChangePassOpen, setIsChangePassOpen] = useState(false)

    const AuthOpen = () => {
        setIsChangePassOpen(!isChangePassOpen)
    }

    return (
        <div className={styles.Profile}>
            {isChangePassOpen && <ChanchePassword setIsChangePassOpen={setIsChangePassOpen}/>}
            <NavBar />
            <Header />
            <HeaderButton />
            <div className={styles.profile__title}>
                <h1 style={{ fontSize: 20, fontWeight: 700 }}>Профиль</h1>
            </div>
            <div className={styles.Profile__section}>
                <div className={styles.profile__left}>
                    <div className={styles.profile__card}>
                        <div className={styles.profile__user}>
                            <Image src={('/user.svg')} width={16} height={21} alt='user' />
                            <p>Личные данные</p>
                        </div>
                        <div className={styles.profile__order}>
                            <Image src={('/book.svg')} width={17.29} height={21} alt='book' />
                            <p>Мои заказы</p>
                        </div>
                    </div>
                    <div className={styles.profile__close}>
                        <Image src={("/close.svg")} width={19} height={19} alt='close' />
                        <p>Выйти</p>
                    </div>
                </div>
                <div className={styles.profile__right}>
                    <div className={styles.profile__upload}>
                        <Image src={('/profile.svg')} width={115.31} height={115.31} alt='profile' />
                        <div className={styles.circle}>
                            <Image src={('/circle.svg')} width={19.77} height={16.47} alt='circle' />
                        </div>
                    </div>
                    <div className={styles.input__section}>
                        <div className={styles.input}>
                            <div>
                                <p>Имя</p>
                                <input type='text' />
                            </div>
                            <div>
                                <p>Фамилия</p>
                                <input type='text' />
                            </div>
                        </div>
                        <div className={styles.input}>
                            <div>
                                <p>Номер телефона</p>
                                <input placeholder='+998 ' type='text' />
                            </div>
                            <div>
                                <p>Пароль</p>
                                <input type='password' />
                            </div>
                        </div>
                    </div>
                    <div className={styles.profile__button}>
                        <button onClick={AuthOpen}>Изменить пароль</button>
                        <button style={{marginLeft: 16, backgroundColor: "#E4B717", color: "#fff"}}>Редактировать</button>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 30 }}>
                <Footer />
            </div>
        </div>
    )
}

export default Profile