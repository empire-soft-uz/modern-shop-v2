import React from "react";
import styles from "@/styles/profile.module.css";
import Footer from "./components/global/Footer";
import Image from "next/image";
import AOS from "aos";
import { useState, useEffect } from "react";
import ChanchePassword from "./components/local/ChangePassword";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Order from "./components/global/Order";
import ProfileBurger from "./components/local/ProfileBurger";

const Profile = () => {
  const [isChangePassOpen, setIsChangePassOpen] = useState(false);
  const [profileBurger, setProfileBurger] = useState(false)

  const AuthOpen = () => {
    setIsChangePassOpen(!isChangePassOpen);
  };

  const ProfileBurgerHandler = () => {
    setProfileBurger(!profileBurger)
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.Profile} data-aos="fade-up" data-aos-duration="3000">
      {isChangePassOpen && (
        <ChanchePassword setIsChangePassOpen={setIsChangePassOpen} />
      )}
      <TopHeader />
      <Header />
      <Categories />
      <div className={styles.profileTitle}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Профиль</h1>
        <div className={styles.profileBurger} onClick={ProfileBurgerHandler}>
          <Image
            src={"/profileBurger.svg"}
            width={22}
            height={17}
            alt="burger"
          />
        </div>
        {profileBurger && <ProfileBurger/>}
      </div>
      <section className={styles.ProfileSection}>
        <section className={styles.profileLeft}>
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
        </section>
        <section className={styles.profileRight}>
          <div className={styles.profileUpload}>
            <Image
              src={"/profile.svg"}
              width={115.31}
              height={115.31}
              alt="profile"
            />
            <div className={styles.circle}>
              <Image
                src={"/circle.svg"}
                width={19.77}
                height={16.47}
                alt="circle"
              />
            </div>
          </div>
          <div className={styles.inputSection}>
            <div className={styles.input}>
              <div>
                <p>Имя</p>
                <input type="text" />
              </div>
              <div>
                <p>Фамилия</p>
                <input type="text" />
              </div>
            </div>
            <div className={styles.input}>
              <div>
                <p>Номер телефона</p>
                <input placeholder="+998 " type="text" />
              </div>
              <div>
                <p>Пароль</p>
                <input type="password" />
              </div>
            </div>
          </div>
          <div className={styles.profileButton}>
            <button onClick={AuthOpen}>Изменить пароль</button>
            <button
              style={{
                marginLeft: 16,
                backgroundColor: "#E4B717",
                color: "#fff",
              }}
            >
              Редактировать
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Profile;
