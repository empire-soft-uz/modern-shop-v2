import React, { useEffect, useRef, useState } from "react";

import styles from "@/styles/auth.module.css";
import Image from "next/image";
import axios from "axios";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

interface Auth {
  setIsAuthOpen: Function;
  isAuthOpen: boolean;
  fromWhere: number
  setFromWhere: Function
}

const Auth = ({ setIsAuthOpen, isAuthOpen, fromWhere, setFromWhere }: Auth) => {

  const [queue, setQueue] = useState<number | any>(0);
  const [timer, setTimer] = useState<number>(62);
  const shouldMount = queue === 2.1;
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [shouldMount]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [queue === 1.1]);
  
  
  
  const phoneRef = useRef<HTMLInputElement | any>()
  const msgPassRef = useRef<HTMLInputElement | any>()

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className={isAuthOpen ? styles.authent : styles.dn}>
      <div className={isAuthOpen ? styles.auth : styles.dn}>
        <div className={styles.close}>
          <button
            onClick={() => {
              setIsAuthOpen(false);
            }}
          >
            <Image
              src={"/icons/close.svg"}
              alt="close auth icon"
              width={21}
              height={21}
            />
          </button>
        </div>
        <div className={styles.title}>
          <h3>
            {fromWhere === 1
              ? "Авторизация"
              : "Регистрация"}
          </h3>
        </div>
        <form action={"#"} autoComplete="off" className={styles.authForm}>
          {fromWhere === 1 ? (
            <>
              <input
                type="text"
                maxLength={13}
                placeholder="Номер телефона"
                required
                autoComplete="false"
              />
              <input
                type="password"
                maxLength={8}
                placeholder="Пароль"
                required
                autoComplete={"false"}
              />
              <button
                className={styles.forgotPass}
                onClick={() => {
                  setQueue(2);
                }}
              >
                Вы забыли пароль?
              </button>
              <button className={styles.enter}>Войти</button>
            </>
          ) : fromWhere === 2 ? <>
            <input
              type="text"
              maxLength={33}
              placeholder="Имя"
              required
              autoComplete="false"
            />
            <input
              type="password"
              maxLength={8}
              placeholder="Пароль"
              required
              autoComplete={"false"}
            />
            <input
              type="password"
              maxLength={8}
              placeholder="Подтвердите пароль"
              required
              autoComplete={"false"}
            />
             <DatePicker dateFormat="dd-MM-yyyy" selected={startDate} onChange={(date:any) => setStartDate(date)} />
            <button className={styles.enter}>Подтвердить</button>
          </> : ""}
        </form>
        {fromWhere === 1 ? <button onClick={() => {
          setFromWhere(2)
        }}>Регистрация</button> : <button onClick={() => {
          setFromWhere(1)
        }}>Уже есть аккаунт?</button>}
      </div>
      <div
        className={styles.bg}
        onClick={() => {
          setIsAuthOpen(false);
        }}
      />
    </div>
  );
};

export default Auth;
