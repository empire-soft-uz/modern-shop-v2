import React from "react";
import styles from "@/styles/profileBurger.module.css";
import Image from "next/image";

const ProfileBurger = () => {
  return (
    <div className={styles.ProfileBurger}>
      <div className={styles.profileLeft}>
        <div className={styles.profileCard}>
          <div className={styles.profileUser}>
            <Image src={"/user.svg"} width={16} height={21} alt="user" />
            <p>Личные данные</p>
          </div>
          <div className={styles.profileOrder}>
            <Image src={"/book.svg"} width={17.29} height={21} alt="book" />
            <p>Мои заказы</p>
          </div>
        </div>
        <div className={styles.profileClose}>
          <Image src={"/logout.svg"} width={19} height={19} alt="close" />
          <p>Выйти</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileBurger;
