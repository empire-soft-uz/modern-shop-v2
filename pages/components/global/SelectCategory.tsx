import React, { Dispatch, SetStateAction } from "react";
import styles from "@/styles/selectCategory.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SelectCategory = ({ categories, selected }: Categories) => {
  const [subcategory, setSubcategory] = useState<any[] | any>([]);
  const [load, setLoad] = useState(true);
  const [hovered, setHovered] = useState<any>("")

const SelectCategory = () => {
  useEffect(() => {
    setLoad(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/api/subcategories`)
      .then((res: any) => {
        setSubcategory(res.data);
      })
      .catch((e: string) => console.log(e))
      .finally(() => {
        setLoad(false);
      });

  }, []);

  if (hovered && subcategory) {
    const hvd = subcategory.find((dt: any) => dt.id === hovered.id);
  }
  return (
    <div data-aos="zoom-in" className={styles.selectCategory}>
      <section className={styles.categorSection}>
        <div className={styles.categorLeft}>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Мужское</h1>
          </div>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Женское</h1>
          </div>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Электроника</h1>
          </div>
          <div>
            <Image src={"/dress.png"} width={21} height={16} alt="dress" />
            <h1>Для дома</h1>
          </div>
        </div>
        <div className={styles.categorRight}>
          <ul>
            {hovered !== "" && hovered.subcategories.map((e: any, index: number) => {
              return <li key={index}><Link key={index} style={{ color: "#666565" }} href={`/category?subcategory=${e.id.toLocaleLowerCase()}`}>{e.name}</Link></li>
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default SelectCategory;

