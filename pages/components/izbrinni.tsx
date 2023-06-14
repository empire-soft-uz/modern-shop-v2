import React, { useEffect } from "react";
import styles from "../../styles/izbrinni.module.css";
import NavBar from "./NavBar";
import Header from "./Header";
import HeaderButton from "./HeaderButton";
import { useState } from "react";
import like from "../../public/like.svg";
import Buy from "../../public/Buy.png";
import likeBlue from "../../public/likeBlue.svg";
import Link from "next/link";
import Image from "next/image";
import Footer from "./footer";

const izbrinni = () => {
  const [likes, setLikes] = useState(true);

  const [likedObj, setLikedObj] = useState<any>();

  useEffect(() => {
    const liked: any = localStorage.getItem("izbri");
    const res = JSON.parse(liked);
    setLikedObj(res);
  }, []);

  console.log(likedObj);

  return (
    <div className={styles.Izbrinni}>
      <NavBar />
      <Header />
      <HeaderButton />
      <div className={styles.Favorites}>
        <h1 style={{ fontSize: 20, fontWeight: 700 }}>Избранное</h1>
      </div>
      <div className={styles.izbrinni__section}>
        <div className={styles.izbrinni__cards}>
          {likedObj && (
            <div>
              <div className={styles.Card}>
                <div className={styles.like}>
                  <Image
                    src={likedObj.image}
                    width={likedObj.width}
                    height={likedObj.height}
                    alt="product"
                  />
                  <button onClick={()=> {
                    localStorage.clear()
                    setLikedObj(null)
                  }}>
                    <Image
                      onClick={() => {
                        setLikes(!likes);
                      }}
                      src={!likes ? like : likeBlue}
                      width={43.96}
                      height={45.6}
                      alt="like"
                    />
                  </button>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, paddingTop: 13 }}>
                  {likedObj.title}
                </h3>
                <p style={{ fontWeight: 450, color: "#D3D3D3" }}>
                  {likedObj.kategoriya}
                </p>
                <div className={styles.order}>
                  <h3>{likedObj.price}</h3>
                  <div className={styles.korzinka}>
                    <Link href="/components/History">
                      <Image src={Buy} width={18.6} height={20.46} alt="buy" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div style={{ marginTop: '11rem'}}>
        <Footer />
      </div>
    </div>
  );
};

export default izbrinni;
