import React, { useEffect, useState } from "react";
import styles from "@/styles/delivery.module.css";


interface Counts {
    count: number;
    setCount: Function
}

const Counter = ({count, setCount}: Counts) => {
  const [counts, setCounts] = useState<number>(1);
  
  useEffect(()=> {
    setCount(count + counts)
  }, [])
  const increment = () => {
    setCounts(counts + 1);
    setCount(counts + 1)
  };

  const decrement = () => {
    setCounts(counts > 1 ? counts - 1 : 1);
    setCount(counts > 1 ? counts -  1 : 1)
  };

  return (
    <div className={styles.countButton}>
      <button onClick={decrement}>-</button>
      <p>{counts}</p>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;