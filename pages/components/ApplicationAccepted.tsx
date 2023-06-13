import React from 'react'
import styles from '../../styles/application.module.css'
import exit from '../../public/exit.svg'
import check from '../../public/True.svg'
import Image from 'next/image'
import { useState } from 'react'


const ApplicationAccepted = () => {

    const [exits, setExits] = useState(true)

    const Exits = () => {
        setExits(!exits)
    }

    return (
        <div className={styles.Application}>
            <div className={styles.Application__card}>
                <div style={{ width: "100%", paddingLeft: 450, cursor: "pointer" }} >
                    <Image onClick={Exits} src={exit} width={21} height={21} alt='exit' />
                </div>
                <div className={styles.accepted}>
                    <Image src={check} width={164} height={164} alt='check' />
                    <h2 style={{ fontSize: 25, fontWeight: 700, paddingTop: 6 }}>Заявка принята</h2>
                    <p style={{ fontWeight: 450, color: "#8A8A8A", lineHeight: "120%" }}>В ближайшее время мы с вами свяжемся</p>
                    <button>Принять</button>
                </div>
            </div>
        </div>
    )
}

export default ApplicationAccepted