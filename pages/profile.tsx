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
import axios from "axios";
import { useCookies } from "react-cookie";
import Loader from "./components/local/Loader";

const Profile = () => {
  const [isChangePassOpen, setIsChangePassOpen] = useState(false);
  const [profileBurger, setProfileBurger] = useState(false);
  const [button, setButton] = useState<number>(0);
  const [buttonColor, setButtonColor] = useState<number>(0);

  const [profile, setProfile] = useState<any | any[]>([]);
  const [load, setLoad] = useState(true);

  const AuthOpen = () => {
    setIsChangePassOpen(!isChangePassOpen);
  };
  const [cookie] = useCookies(["userInfo"]);

  const { userInfo } = cookie;
  console.log(userInfo);
  const ProfileBurgerHandler = () => {
    setProfileBurger(!profileBurger);
  };

  useEffect(() => {
    document.body.style.overflow = "auto";
  });

  useEffect(() => {
    setLoad(true)
    axios.get(`${process.env.NEXT_PUBLIC_API}/api/users/current`, {
      headers: {
        Authorization: userInfo ? userInfo.userToken : ""
      }
    }).then(res => setProfile(res.data)).catch(err => console.log(err.message)).finally(() => {
      setLoad(false)
    })
    // @ts-ignore
  }, [userInfo])


  const objCard = [
    {
      title: "Iphone 14 PRO",
      image: "icons/phone.svg",
      const: 2,
      price: "900.000.000",
      w: 58,
      h: 691,
    },
    {
      title: "Iphone 14 PRO",
      image: "icons/phone.svg",
      const: 2,
      price: "900.000.000",
      w: 58,
      h: 691,
    },
  ];

  if (!load) {
    const username: any = localStorage.getItem("userName");
    const password: any = localStorage.getItem("password");
    const lastname: any = localStorage.getItem("lastname");
    if (userInfo) {
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
            <div
              className={styles.profileBurger}
              onClick={ProfileBurgerHandler}
            >
              <Image
                src={"/profileBurger.svg"}
                width={22}
                height={17}
                alt="burger"
              />
            </div>
            {profileBurger && (
              <ProfileBurger
                setButtonColor={setButtonColor}
                buttonColor={buttonColor}
              />
            )}
          </div>
          {buttonColor === 0 ? (
            <>
              <section className={styles.ProfileSection}>
                <section className={styles.profileLeft}>
                  <div className={styles.profileCard}>
                    <div
                      className={styles.profileUser}
                      style={
                        buttonColor !== 0
                          ? { backgroundColor: "#fff" }
                          : { backgroundColor: "#E4B717", color: "#fff" }
                      }
                      onClick={() => {
                        setButtonColor(0);
                      }}
                    >
                      <Image
                        src={
                          !buttonColor
                            ? "icons/user.svg"
                            : "icons/userWhite.svg"
                        }
                        width={16}
                        height={21}
                        alt="user"
                      />
                      <p>Личные данные</p>
                    </div>
                    <div
                      className={styles.profileOrder}
                      style={
                        // @ts-ignore
                        buttonColor !== 1
                          ? { backgroundColor: "#fff" }
                          : { backgroundColor: "#E4B717", color: "#fff" }
                      }
                      onClick={() => {
                        setButtonColor(1);
                      }}
                    >
                      <Image
                        src={
                          !buttonColor
                            ? "icons/book.svg"
                            : "icons/bookWhite.svg"
                        }
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
                        <input disabled value={username} type="text" />
                      </div>
                      <div>
                        <p>Фамилия</p>
                        <input disabled value={lastname} type="text" />
                      </div>
                    </div>
                    <div className={styles.input}>
                      <div>
                        <p>Номер телефона</p>
                        <input
                          disabled
                          value={`+${profile.phoneNumber}`}
                          placeholder="+998 "
                          type="text"
                        />
                      </div>
                      <div>
                        <p>Пароль</p>
                        <input value={password} type="password" disabled />
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
              <section className={styles.ProfileSection}>
                <section className={styles.profileLeft}>
                  <div className={styles.profileCard}>
                    <div
                      className={styles.profileUser}
                      style={
                        buttonColor !== 0
                          ? { backgroundColor: "#fff" }
                          : { backgroundColor: "#E4B717", color: "#fff" }
                      }
                      onClick={() => {
                        setButtonColor(0);
                      }}
                    >
                      <Image
                        src={
                          !buttonColor
                            ? "icons/userWhite.svg"
                            : "icons/user.svg"
                        }
                        width={16}
                        height={21}
                        alt="user"
                      />
                      <p>Личные данные</p>
                    </div>
                    <div
                      className={styles.profileOrder}
                      style={
                        buttonColor !== 1
                          ? { backgroundColor: "#fff" }
                          : { backgroundColor: "#E4B717", color: "#fff" }
                      }
                      onClick={() => {
                        setButtonColor(1);
                      }}
                    >
                      <Image
                        src={
                          !buttonColor
                            ? "icons/book.svg"
                            : "icons/bookWhite.svg"
                        }
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
                  <h3 className={styles.orderTitle}>Мои заказы</h3>
                  <div className={styles.cardOrder}>
                    <div className={styles.orderNumber}>
                      <p>Товары</p>
                      <div className={styles.orderButton}>
                        <p>Статус: На рассмотрении</p>
                        <button>Заказ № 13</button>
                      </div>
                    </div>
                    <div className={styles.orderSection}>
                      <div>
                        {objCard.map((e: any, index: number) => {
                          return (
                            <>
                              {" "}
                              <div key={index} className={styles.cart}>
                                <Image
                                  src={e.image}
                                  width={e.w}
                                  height={e.w}
                                  alt="hello"
                                />
                                <div className={styles.cartTitle}>
                                  <h3>{e.title}</h3>
                                  <div className={styles.const}>
                                    <div className={styles.constTag}>
                                      <p>Кол-во:</p>
                                      <p>{e.const}</p>
                                    </div>
                                    <div className={styles.priceTitle}>
                                      <p>Стоимость:</p>
                                      <p>{e.price}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.line}></div>
                            </>
                          );
                        })}
                      </div>
                      <div className={styles.rightOrder}>
                        <div className={styles.total}>
                          <h4>Итого:</h4>
                          <h5>72.000.000 сум</h5>
                        </div>
                        <div className={styles.button}>
                          <button>Связаться с продавцом</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </>
          )}
          <Footer />
        </div>
      );
    } else {
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
            <div
              className={styles.profileBurger}
              onClick={ProfileBurgerHandler}
            >
              <Image
                src={"/profileBurger.svg"}
                width={22}
                height={17}
                alt="burger"
              />
            </div>
            {profileBurger && (
              <ProfileBurger
                setButtonColor={setButtonColor}
                buttonColor={buttonColor}
              />
            )}
          </div>
          {buttonColor === 0 ? (
            <section className={styles.ProfileSection}>
              <section className={styles.profileLeft}>
                <div className={styles.profileCard}>
                  <div
                    className={styles.profileUser}
                    style={
                      buttonColor !== 0
                        ? { backgroundColor: "#fff" }
                        : { backgroundColor: "#E4B717", color: "#fff" }
                    }
                    onClick={() => {
                      setButtonColor(0);
                    }}
                  >
                    <Image
                      src={
                        !buttonColor ? "icons/userWhite.svg" : "icons/user.svg"
                      }
                      width={16}
                      height={21}
                      alt="user"
                    />
                    <p>Личные данные</p>
                  </div>
                  <div
                    className={styles.profileOrder}
                    style={
                      // @ts-ignore
                      buttonColor !== 1
                        ? { backgroundColor: "#fff" }
                        : { backgroundColor: "#E4B717", color: "#fff" }
                    }
                    onClick={() => {
                      setButtonColor(1);
                    }}
                  >
                    <Image
                      src={
                        !buttonColor ? "icons/book.svg" : "icons/bookWhite.svg"
                      }
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
                <h1 style={{ textAlign: "center" }}>
                  You don't have account yet!
                </h1>
              </section>
            </section>
          ) : (
            <>
              <section className={styles.ProfileSection}>
                <section className={styles.profileLeft}>
                  <div className={styles.profileCard}>
                    <div
                      className={styles.profileUser}
                      style={
                        buttonColor !== 0
                          ? { backgroundColor: "#fff" }
                          : { backgroundColor: "#E4B717", color: "#fff" }
                      }
                      onClick={() => {
                        setButtonColor(0);
                      }}
                    >
                      <Image
                        src={
                          !buttonColor
                            ? "icons/userWhite.svg"
                            : "icons/user.svg"
                        }
                        width={16}
                        height={21}
                        alt="user"
                      />
                      <p>Личные данные</p>
                    </div>
                    <div
                      className={styles.profileOrder}
                      style={
                        buttonColor !== 1
                          ? { backgroundColor: "#fff" }
                          : { backgroundColor: "#E4B717", color: "#fff" }
                      }
                      onClick={() => {
                        setButtonColor(1);
                      }}
                    >
                      <Image
                        src={
                          !buttonColor
                            ? "icons/book.svg"
                            : "icons/bookWhite.svg"
                        }
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
                  <h3 className={styles.orderTitle}>Мои заказы</h3>
                  <div className={styles.cardOrder}>
                    <div className={styles.orderNumber}>
                      <p>Товары</p>
                      <div className={styles.orderButton}>
                        <p>Статус: На рассмотрении</p>
                        <button>Заказ № 13</button>
                      </div>
                    </div>
                    <div className={styles.orderSection}>
                      <div>
                        {objCard.map((e: any, index: number) => {
                          return (
                            <>
                              {" "}
                              <div key={index} className={styles.cart}>
                                <Image
                                  src={e.image}
                                  width={e.w}
                                  height={e.w}
                                  alt="hello"
                                />
                                <div className={styles.cartTitle}>
                                  <h3>{e.title}</h3>
                                  <div className={styles.const}>
                                    <div className={styles.constTag}>
                                      <p>Кол-во:</p>
                                      <p>{e.const}</p>
                                    </div>
                                    <div className={styles.priceTitle}>
                                      <p>Стоимость:</p>
                                      <p>{e.price}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.line}></div>
                            </>
                          );
                        })}
                      </div>
                      <div className={styles.rightOrder}>
                        <div className={styles.total}>
                          <h4>Итого:</h4>
                          <h5>72.000.000 сум</h5>
                        </div>
                        <div className={styles.button}>
                          <button>Связаться с продавцом</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </>
          )}
          <Footer />
        </div>
      );
    }
  }
};

export default Profile;
