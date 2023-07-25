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

  const [profile, setProfile] = useState<any | any[]>([])
  const [load, setLoad] = useState(true)


  const AuthOpen = () => {
    setIsChangePassOpen(!isChangePassOpen);
  };

  const [cookie] = useCookies(["userInfo"])

  const { userInfo } = cookie
  console.log(userInfo)
  const ProfileBurgerHandler = () => {
    setProfileBurger(!profileBurger);
  };

  useEffect(() => {
    document.body.style.overflow = "auto"
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
  }, [])



  if (!load) {

    const username: any = localStorage.getItem("userName")
    const password: any = localStorage.getItem("password")
    const lastname: any = localStorage.getItem("lastname")
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
          <section className={styles.ProfileSection}>
            <section className={styles.profileLeft}>
              <div className={styles.profileCard}>
                <div className={styles.profileUser}>
                  <Image src={"icons/user.svg"} width={16} height={21} alt="user" />
                  <p>Личные данные</p>
                </div>
                <div className={styles.profileOrder}>
                  <Image src={"icons/book.svg"} width={17.29} height={21} alt="book" />
                  <p>Мои заказы</p>
                </div>
                <div className={styles.profileClose}>
                  <Image src={"icons/logout.svg"} width={19} height={19} alt="close" />
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
                    <input disabled value={`+${profile.phoneNumber}`} placeholder="+998 " type="text" />
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
      <Footer />
    </div>
  );
  }
};
}

export default Profile;