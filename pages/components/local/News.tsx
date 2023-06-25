import React from "react";
import Image from "next/image";

import styles from "@/styles/home.module.css"

interface News {
  id: number;
}

const News = ({ id }: News) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundImage: "url('/images/newsBg.png')",
        backgroundRepeat: "no-repeat",
        height: 305,
      }}
      className={styles.news}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <div
          style={{
            background: "#E4B717",
            height: 55,
            width: 59,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              textAlign: "center",
              color: "#fff",
            }}
          >
            {id} <br /> мая
          </h3>
        </div>
      </div>
      <div>
        <h3
          style={{
            color: "#fff",
          }}
        >
          Мы оказываем широкий спектр услуг.
        </h3>
        <p
          style={{
            color: "#C2C2C2",
          }}
        >
          Квартирные, офисные и дачные переезды– это наша ежедневная работа и мы
          настоящие профессионалы своего дела.{" "}
        </p>
      </div>
    </div>
  );
};

export default News;
