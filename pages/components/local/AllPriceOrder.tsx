import React from "react";
import { useState } from "react";
import styles from "../../../styles/allPrice.module.css";

const AllPriceOrder = () => {
  const [order, setOrder] = useState<boolean>(false);
  return (
      <div className={styles.allPrice}>
        <h1>Ваш заказ</h1>
        <div style={{ display: "flex", gap: 15, marginTop: 12 }}>
          <label>Товары (2):</label>
          <p>8.000.000 сум</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 100,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <label>Доставка:</label>
          <p>Текст</p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 38,
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <label>Итого:</label>
          <h3>16.000.000 сум</h3>
        </div>
        <button
          onClick={() => {
            setOrder(true);
          }}
        >
          Заказать
        </button>
      </div>
  );
};

export default AllPriceOrder;
