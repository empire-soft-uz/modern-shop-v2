import React from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import HeaderButton from "./HeaderButton";
import styles from "../../styles/allKategor.module.css";
import { useState } from "react";

const AllKategor = () => {
  const [buttonColor, setButtonColor] = useState<number>(0);

  return (
    <div className={styles.AllKategor}>
      <NavBar />
      <Header />
      <HeaderButton />
      <div className={styles.AllKategor__section}>
        <h1>Вы смотрите:</h1>
        <div className={styles.NavButton}>
          <button
            onClick={() => {
              setButtonColor(0);
            }}
            style={
              buttonColor !== 0
                ? { borderColor: "#8A8A8A" }
                : { borderColor: "#E4B717", color: "#E4B717" }
            }
          >
            Продукты
          </button>
          <button
            style={
              buttonColor !== 1
                ? { borderColor: "#8A8A8A" }
                : { borderColor: "#E4B717", color: "#E4B717" }
            }
            onClick={() => {
              setButtonColor(1);
            }}
          >
            Заводы
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllKategor;
