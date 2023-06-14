import React from "react";
import styles from "../../styles/review.module.css";
import Image from "next/image";
import { Animated } from "react-animated-css";

const Reviews = () => {
  return (
    <div className={styles.review}>
      <div className={styles.userImage}>
        <Image src={"/user.png"} alt="user image" width={41} height={41} />
      </div>
      <Animated animationIn="pulse" className={styles.view}>
        <div className={styles.top}>
          <div className={styles.left}>
            <h3>Рафаэль Ройтман</h3>
            <div className={styles.stars}>
              <Image
                src={"/star2.svg"}
                alt="star icon"
                width={26}
                height={26}
              />
              <Image
                src={"/star2.svg"}
                alt="star icon"
                width={26}
                height={26}
              />
              <Image
                src={"/star2.svg"}
                alt="star icon"
                width={26}
                height={26}
              />
              <Image
                src={"/star2.svg"}
                alt="star icon"
                width={26}
                height={26}
              />
              <Image
                src={"/star1.svg"}
                alt="star icon"
                width={26}
                height={26}
              />
            </div>
          </div>
          <div className={styles.createdAt}>
            <Image src={"/date.svg"} alt="date icon" width={17} height={19} />
            <h4
              style={{
                color: "#888",
              }}
            >
              01.09.2022
            </h4>
          </div>
        </div>
        <p
          style={{
            color: "#888",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </Animated>
    </div>
  );
};

export default Reviews;
