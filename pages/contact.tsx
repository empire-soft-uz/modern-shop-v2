import React, { useEffect, useState } from "react";
import TopHeader from "./components/global/TopHeader";
import Header from "./components/global/Header";
import Categories from "./components/global/Categories";
import Image from "next/image";
import Footer from "./components/global/Footer";
import styles from "@/styles/contact.module.css";
import Link from "next/link";
import axios from "axios";

const Contact = () => {
  const [categories, setCategories] = useState<any[] | any>([]);
  const [subCategories, setSubCategories] = useState<any[] | any>([]);
  const [load, setLoad] = useState<boolean>(true);
  useEffect(() => {
    setLoad(true);
    const fetchData = async () => {
      try {
        const categories = await axios.get("/categories");
        const subCategories = await axios.get("/subcategories");
        const [res1, res2] = await axios.all([categories, subCategories]);
        setCategories(res1.data);
        setSubCategories(res2.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoad(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className={styles.container}>
      <TopHeader />
      <Header />
      <Categories categories={categories} subcategories={subCategories}/>
      <div className={styles.contactTitle}>
        <h3>Контакты</h3>
      </div>
      <div className={styles.contact}>
        <div className={styles.connection}>
          <div className={styles.contactCard}>
            <h3>Номера телефонов для связи:</h3>
            <div className={styles.phone}>
              <div className={styles.phoneNumber}>
                <Image
                  src={"icons/contact.svg"}
                  width={19}
                  height={19}
                  alt="svg"
                />
                <Link href="tel:+ 998 99 999 99 99">+ 998 99 999 99 99</Link>
              </div>
              <div className={styles.phoneNumber}>
                <Image
                  src={"icons/contact.svg"}
                  width={19}
                  height={19}
                  alt="svg"
                />
                <Link href="tel:+ 998 99 999 99 99">+ 998 99 999 99 99</Link>
              </div>
            </div>
          </div>
          <div className={styles.contactCard}>
            <h3>Почта для связи:</h3>
            <div className={styles.phone}>
              <div className={styles.phoneNumber}>
                <Image
                  src={"icons/mail.svg"}
                  width={19}
                  height={19}
                  alt="svg"
                />
                <Link href="https://mail.com/modern@mail.ru">modern@mail.ru</Link>
              </div>
            </div>
          </div>
        </div>
        <form className={styles.contactForm}>
          <h3>Написать обращение</h3>
          <div className={styles.contactInput}>
            <div>
              <p>Ф.И.О.</p>
              <input className={styles.input} />
            </div>

            <div className={styles.inputContainer}>
              <p>Тема обращения</p>
              <input className={styles.input} />
            </div>

            <div className={styles.inputContainer}>
              <p>Текст обращения</p>
              <textarea className={styles.input} />
            </div>
          </div>
          <button>Отправить</button>
        </form>
      </div>
      <div style={{ marginTop: "11rem" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
