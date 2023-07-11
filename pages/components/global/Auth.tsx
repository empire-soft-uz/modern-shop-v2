import React, { use, useEffect, useState } from "react";

import styles from "@/styles/auth.module.css";
import Image from "next/image";
import axios from "axios";
interface Auth {
  setIsAuthOpen: Function;
  isAuthOpen: boolean;
}

const Auth = ({ setIsAuthOpen, isAuthOpen }: Auth) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  const [queue, setQueue] = useState<number | any>(0);

  const [timer, setTimer] = useState<number>(62);

  const shouldMount = queue === 1.1 || queue === 2.1;

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [shouldMount]);

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
            {queue === 0
              ? "Авторизация"
              : queue === 1
              ? "Регистрация"
              : queue === 1.1 || queue === 2.1
              ? "Введите код"
              : queue === 2
              ? "Восстановить аккаунт"
              : queue === 2.2
              ? "Новый пароль"
              : "fuck"}
          </h3>
        </div>
        {queue === 0 ? (
          <>
            <form action={"#"} autoComplete="off" className={styles.authForm}>
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
            </form>
          </>
        ) : queue === 1 ? (
          <form action={"#"} autoComplete="off" className={styles.authForm}>
            <input
              type="text"
              maxLength={13}
              placeholder="Номер телефона"
              required
              autoComplete="false"
            />
            <button
              className={styles.enter}
              onClick={() => {
                setQueue(1.1);
              }}
            >
              Запросить код
            </button>
          </form>
        ) : queue === 1.1 ? (
          <form action={"#"} autoComplete="off" className={styles.authForm}>
            <input
              type="text"
              maxLength={8}
              placeholder="Код"
              required
              autoComplete="false"
            />
            <button
              className={styles.enter}
              onClick={() => {
                setQueue(1.1);
              }}
            >
              Подтвердить
            </button>
          </form>
        ) : queue === 2 ? (
          <form action={"#"} autoComplete="off" className={styles.authForm}>
            <input
              type="text"
              maxLength={8}
              placeholder="Код"
              required
              autoComplete="false"
            />
            <button
              className={styles.enter}
              onClick={() => {
                queue === 1 ? setQueue(1.1) : setQueue(2.1);
              }}
            >
              Подтвердить
            </button>
          </form>
        ) : queue === 2.1 ? (
          <form action={"#"} autoComplete="off" className={styles.authForm}>
            <input
              type="text"
              maxLength={8}
              placeholder="Код"
              required
              autoComplete="false"
            />
            <button
              className={styles.enter}
              onClick={() => {
                setQueue(2.2);
              }}
            >
              Подтвердить
            </button>
          </form>
        ) : queue === 2.2 ? (
          <form action={"#"} autoComplete="off" className={styles.authForm}>
            <input
              type="password"
              maxLength={8}
              placeholder="Новый пароль"
              required
              autoComplete="false"
            />
            <input
              type="password"
              maxLength={8}
              placeholder="Подтвердите пароль"
              required
              autoComplete={"false"}
            />
            <button
              className={styles.enter}
              onClick={() => {
                setQueue(0);
              }}
            >
              Подтвердить
            </button>
          </form>
        ) : (
          <p>wefwef</p>
        )}
        <button
          className={styles.signUp}
          style={
            queue === 1.1 && timer === 0
              ? {
                  color: "#f00",
                }
              : {
                  color: "#888",
                }
          }
          onClick={() => {
            queue === 0
              ? setQueue(1)
              : queue === 1 || queue === 2
              ? setQueue(0)
              : queue === 1.1
              ? setTimer(60)
              : setQueue(1.1);
          }}
        >
          {queue === 0
            ? "Регистрация"
            : queue === 1 || queue === 2
            ? "Уже есть аккаунт?"
            : queue === 2.2
            ? ""
            : `Запросить еще раз ( 0:${timer >= 0 ? timer : setTimer(0)} )`}
        </button>
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
