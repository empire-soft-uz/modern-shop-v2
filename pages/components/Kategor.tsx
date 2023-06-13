import React from 'react'
import styles from '../../styles/Header.module.css'
import { useState } from 'react'
import Image from 'next/image'


const Kategor = () => {

    const [kategor, setKategor] = useState(true)
    const [kategorTwo, setKategorTwo] = useState(false)
    const [kategorThree, setKategorThree] = useState(false)
    const [kategorFour, setKategorFour] = useState(false)



    const Kategor = () => {
        setKategor(!kategor)
    }


    const KategorTwo = () => {
        setKategorTwo(!kategorTwo)
    }

    const KategorThree = () => {
        setKategorThree(!kategorThree)
    }

    const KategorFour = () => {
        setKategorFour(!kategorFour)
    }

    return (
        <div className={styles.Kategor}>
            <div className={styles.Kategor__section}>
                <div className={styles.Kategor__left}>
                    <div onClick={Kategor}>
                        <Image src={('/dress.png')} width={21} height={16} alt='dress' />
                        <h1>Мужское</h1>
                    </div>
                    <div onClick={KategorTwo}>
                        <Image src={('/dress.png')} width={21} height={16} alt='dress' />
                        <h1>Женское</h1>
                    </div>
                    <div onClick={KategorThree}>
                        <Image src={('/dress.png')} width={21} height={16} alt='dress' />
                        <h1>Электроника</h1>
                    </div>
                    <div onClick={KategorFour}>
                        <Image src={('/dress.png')} width={21} height={16} alt='dress' />
                        <h1>Для дома</h1>
                    </div>
                </div>
                <div className={styles.Kategor__right}>
                    <div>
                        {kategor && <HeaderNav />}
                        {kategorTwo && <HeaderNavTwo />}
                        {kategorThree && <HeaderNavThree />}
                        {kategorFour && <HeaderNavFour/>}
                    </div>
                    <div className={styles.table}>
                        <ul>
                            <li>
                                <a href='#'>Платья</a>
                            </li>
                            <li>
                                <a href='#'>Платья</a>
                            </li>
                            <li>
                                <a href='#'>Платья</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href='#'>Футболки</a>
                            </li>
                            <li>
                                <a href='#'>Футболки</a>
                            </li>
                            <li>
                                <a href='#'>Футболки</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <a href='#'>Обувь</a>
                            </li>
                            <li>
                                <a href='#'>Обувь</a>
                            </li>
                            <li>
                                <a href='#'>Обувь</a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>

        </div>
    )


}

const HeaderNav = () => {
    return <div className={styles.table__top}>
        <h1>Мужское</h1>
    </div>
}

const HeaderNavTwo = () => {
    return <div className={styles.table__top}>
       <h1>Женское</h1>
    </div>
}

const HeaderNavThree = () => {
    return <div className={styles.table__top}>
       <h1>Электроника</h1>
    </div>
}

const HeaderNavFour = () => {
    return <div className={styles.table__top}>
        <h1>Для дома</h1>
    </div>
}

export default Kategor