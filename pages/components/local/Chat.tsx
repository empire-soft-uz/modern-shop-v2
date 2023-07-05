import React, { useEffect } from "react";
import styles from "@/styles/chat.module.css";
import Image from "next/image";

interface Chat {
  setIsChatOpen: Function;
}

const Chat = ({ setIsChatOpen }: Chat) => {
  return (
    <>
      <div className={styles.chat}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h3>Поставщик</h3>
          </div>
          <div className={styles.mainChat}>
            <div className={styles.message}>
              <p>some sentence</p>
              <div className={styles.createdAt}>
                <Image
                  src={"/icons/date.svg"}
                  width={20}
                  height={23}
                  alt="created at"
                />
                <p>18.05.2023, 15:00</p>
              </div>
            </div>
            <div className={styles.messageS}>
              <p>some sentence</p>
              <div className={styles.createdAt}>
                <Image
                  src={"/icons/date.svg"}
                  width={20}
                  height={23}
                  alt="created at"
                />
                <p>18.05.2023, 15:00</p>
              </div>
            </div>
          </div>
          <div className={styles.sendMessage}>
            <input type="text" placeholder="Напишите сообщение..." />
            <Image
              src={"/icons/sendImg.svg"}
              alt="image send icon"
              width={16}
              height={27}
            />
            <input type="file" accept="image/*" />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.userTop}>
            <h3>Сообщения</h3>
            <button
              onClick={() => {
                setIsChatOpen(false);
              }}
            >
              <Image
                src={"/icons/close.svg"}
                alt="close chat icon"
                width={21}
                height={21}
              />
            </button>
          </div>
          <div className={styles.chatWith}>
            {[1, 2, 34, 5, 6].map((e: number) => {
              return (
                <div key={e} className={styles.eachChat}>
                  <Image
                    src={"/images/user.png"}
                    alt="user image"
                    width={50}
                    height={50}
                  />
                  <div className={styles.chatWithWhom}>
                    <h4>Рафаэль Ройтман</h4>
                    <p>Текст сообщения...</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.bg} />
    </>
  );
};

export default Chat;
