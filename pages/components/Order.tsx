import React, { useEffect } from "react";

import styles from "../../styles/order.module.css";
import Image from "next/image";

import { Animated } from "react-animated-css";

interface Order {
  setOrder: Function;
  order: any
}

const Order = ({ setOrder, order }: Order) => {
  
  return (
    <Animated animationOutDuration={10} animationOut="bounce" className={styles.order} isVisible={order === false ? false : true}>
      <Animated animationOutDuration={1000} animationIn="pulse" animationOut="fadeOutDown" isVisible={order === false ? false : true} className={styles.orderSide}>
          <div className={styles.close}>
            <button
              onClick={() => {
                setOrder(false);
              }}
            >
              <Image
                src={"/close.svg"}
                alt="close icon"
                width={21}
                height={21}
              />
            </button>
          </div>
          <div className={styles.center}>
            <div className={styles.check}>
              <Image
                src={"/check.png"}
                alt="checked item icon"
                width={82}
                height={62}
              />
            </div>
            <h3>Заявка принята</h3>
            <p>В ближайшее время мы с вами свяжемся</p>
          </div>
          <button className={styles.take}>Принять</button>
      </Animated>
      <div
        className={styles.bg}
        onClick={() => {
          setOrder(false);
        }}
      />
    </Animated>
  );
};

export default Order;
