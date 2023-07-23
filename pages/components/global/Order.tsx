import styles from "@/styles/order.module.css";
import Image from "next/image";
import Link from "next/link";
import check from '@/public/icons/check.svg'
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import useCookies from "react-cookie/cjs/useCookies";

interface Order {
  setOrder: Function;
  order: boolean;
}

const Order = ({ setOrder, order }: Order) => {
  const [cookie, setCookie] = useCookies(["aboutUser"])
  const router = useRouter()
  const { id } = router.query
  const { aboutUser } = cookie

  console.log(aboutUser)

  useEffect(() => {
    AOS.init()
  }, [])

  const handlePushToCart = () => {
    axios.post(`${process.env.NEXT_PUBLIC_API}/api/orders/new`, {
      userId: aboutUser ? aboutUser.userId : "64b92059a276759947d296d3",
      products: [
        {
          productId: id,
          qty: 1
        }
      ],
      deliveryAddress: "some address to deliver"
    },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": aboutUser ? aboutUser.userToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YjkyMDU5YTI3Njc1OTk0N2QyOTZkMyIsInBob25lTnVtYmVyIjo5OTg5MTIzNDU2NzgsImlhdCI6MTY4OTk1Mzc0N30.nz6rhxCKJj2q5ZIyn2ydBgOy90Lw2Y5RsgfjPbjT0a8"
        },
      }).then((res: any) => {
        setCookie("aboutUser", {
          userBooked: res.data.id, 
          userId: res.data.id,
          userToken: res.data.token
        }, { path: "/" })
      }).catch(err => console.log(err))
  }


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
          <button onClick={() => {
            handlePushToCart()
            router.push("/cart")
            setOrder(false);
          }} className={styles.take}>
            Принять
          </button>
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
