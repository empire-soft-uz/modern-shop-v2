import styles from "@/styles/profile.module.css";
import Footer from "./components/global/Footer";
import Image from "next/image";
import { useState } from "react";
import ChangePassword from "./components/local/ChangePassword";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import ProfileBurger from "./components/local/ProfileBurger";
import { useEffect } from "react";

const Profile = () => {
  const [isChangePassOpen, setIsChangePassOpen] = useState(false);
  const [profileBurger, setProfileBurger] = useState(false);
  const [button, setButton] = useState<number>(0);
  const [buttonColor, setButtonColor] = useState<number>(0);

  const AuthOpen = () => {
    setIsChangePassOpen(!isChangePassOpen);
  };

  const ProfileBurgerHandler = () => {
    setProfileBurger(!profileBurger);
  };

  const objCard = [
    {
      image: "icons/phone.svg",
      title: "Iphone 14 PRO",
      const: 2,
      price: 9.0,
    },
    {
      image: "icons/phone.svg",
      title: "Iphone 14 PRO",
      const: 2,
      price: 9.0,
    },
  ];

  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  return (
    <div className={styles.Profile}>
      {isChangePassOpen && (
        <ChangePassword setIsChangePassOpen={setIsChangePassOpen} />
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
        {profileBurger && <ProfileBurger />}
      </div>
      {button === 0 ? (
        <>
          <section className={styles.ProfileSection}>
            <section className={styles.profileLeft}>
              <div className={styles.profileCard}>
                <div
                  className={styles.profileUser}
                  onClick={() => {
                    setButton(0);
                  }}
                  style={
                    buttonColor !== 0
                      ? { backgroundColor: "#fff" }
                      : { backgroundColor: "#E4B717", color: "#fff" }
                  }
                >
                  <Image
                    src={"icons/user.svg"}
                    width={16}
                    height={21}
                    alt="user"
                  />
                  <p>Личные данные</p>
                </div>
                <div
                  className={styles.profileOrder}
                  onClick={() => {
                    setButton(1);
                  }}
                  style={
                    buttonColor !== 1
                      ? { backgroundColor: "#fff" }
                      : { backgroundColor: "#E4B717", color: "#fff" }
                  }
                >
                  <Image
                    src={"icons/book.svg"}
                    width={17.29}
                    height={21}
                    alt="book"
                  />
                  <p>Мои заказы</p>
                </div>
                <div className={styles.profileClose}>
                  <Image
                    src={"icons/logout.svg"}
                    width={19}
                    height={19}
                    alt="close"
                  />
                  <p>Выйти</p>
                </div>
              </div>
            </section>
            <section className={styles.profileRight}>
              <div className={styles.profileUpload}>
                <Image
                  src={"/icons/profile.svg"}
                  width={115.31}
                  height={115.31}
                  alt="profile"
                />
                <div className={styles.circle}>
                  <Image
                    src={"/icons/circle.svg"}
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
        </>
      ) : (
        <>
          <div className={styles.ProfileSection}>
            <section className={styles.profileLeft}>
              <div className={styles.profileCard}>
                <div
                  className={styles.profileUser}
                  onClick={() => {
                    setButton(0);
                  }}
                  style={
                    buttonColor !== 1
                      ? { backgroundColor: "#fff" }
                      : { backgroundColor: "#E4B717", color: "#fff" }
                  }
                >
                  <Image
                    src={"icons/user.svg"}
                    width={16}
                    height={21}
                    alt="user"
                  />
                  <p>Личные данные</p>
                </div>
                <div
                  className={styles.profileOrder}
                  onClick={() => {
                    setButton(1);
                  }}
                  style={
                    buttonColor !== 0
                      ? { backgroundColor: "#fff" }
                      : { backgroundColor: "#E4B717", color: "#fff" }
                  }
                >
                  <Image
                    src={"icons/book.svg"}
                    width={17.29}
                    height={21}
                    alt="book"
                  />
                  <p>Мои заказы</p>
                </div>
                <div className={styles.profileClose}>
                  <Image
                    src={"icons/logout.svg"}
                    width={19}
                    height={19}
                    alt="close"
                  />
                  <p>Выйти</p>
                </div>
              </div>
            </section>
            <section className={styles.order}>
              <h1 className={styles.orderTitle}>Мои заказы</h1>
              <section className={styles.cardOrder}>
                <div className={styles.orderNumber}>
                  <p>Товары</p>
                  <div>
                    <p>Статус: На рассмотрении</p>
                    <button>Заказ № 13</button>
                  </div>
                </div>
                <div className={styles.orderSection}>
                  <section className={styles.cartOrder}>
                    {objCard.map((card, index) => {
                      return (
                        <div key={index} className={styles.cart}>
                          <Image
                            src={card.image}
                            width={58}
                            height={69}
                            alt="image"
                          />
                          <div className={styles.cartTitle}>
                            <h3>{card.title}</h3>
                            <div className={styles.const}>
                              <p>Кол-во:</p>
                              <p>{card.const}</p>
                            </div>
                          </div>
                          <div className={styles.priceTitle}>
                            <p>Стоимость:</p>
                            <p>{card.price}</p>
                          </div>
                        </div>
                      );
                    })}
                  </section>
                  <div className={styles.rightOrder}>
                    <div className={styles.total}>
                      <h4>Итого:</h4>
                      <h5>72.000.000 сум</h5>
                    </div>
                    <button>Связаться с продавцом</button>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
