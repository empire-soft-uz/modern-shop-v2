import styles from "@/styles/order.module.css";
import Image from "next/image";
import Link from "next/link";
import check from '@/public/icons/check.svg'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";



interface Order {
  setOrder: Function;
  order: boolean;
}

const Order = ({ setOrder, order }: Order) => {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <>
      <div className={order ? styles.order : styles.dn}>
        <div className={styles.orderSide}>
          <div className={styles.close}>
            <button
              onClick={() => {
                setOrder(false);
              }}
            >
              <Image src={"/icons/close.svg"} alt="close icon" width={21} height={21} />
            </button>
          </div>
          <div className={styles.center}>
            <div className={styles.check}>
              <Image
                src={check}
                alt="checked item icon"
                width={164}
                height={164}
              />
            </div>
            <h3>Заявка принята</h3>
            <p>В ближайшее время мы с вами свяжемся</p>
          </div>
          <Link href="/profile" className={styles.take}>
            Принять
          </Link>
        </div>
        <div
          className={styles.bg}
          onClick={() => {
            setOrder(false);
          }}
        />
      </div>
    </>
  );
};

export default Order;
