import styles from "../styles/Memory.module.css";
import Temp from "../components/Temp";
import React, { useState } from "react";

const arr = [];

const Memory = () => {
  const [elementBox, setElementBox] = useState([]);

  const addElements = () => {
    const elementList = [];

    for (let i = 0; i < 10000; i++) {
      arr.push(<Temp></Temp>);
      elementList.push(<Temp className={styles.temp} key={i}></Temp>);
    }

    setElementBox(elementList);
  };

  const removeElements = () => {
    setElementBox("");
  };

  const fetchMemoryDetails = () => {
    // jsHeapSizeLimit -> the amount of memory that JavaScript heap is limited to
    // usedJSHeapSize -> the amount of memory that JavaScript has allocated (including free space)
    // totalJSHeapSize -> the amount of memory currently being used

    console.log(performance.memory);
  };

  return (
    <div className={styles.memoryBox}>
      <h1>Memory</h1>
      <div className={styles.buttonBox}>
        <button className={styles.addButton} onClick={addElements}>
          Add
        </button>
        <button className={styles.removeButton} onClick={removeElements}>
          Remove
        </button>
        <button className={styles.memoryButton} onClick={fetchMemoryDetails}>
          Memory
        </button>
      </div>
      <div className={styles.textbox}>
        <div>Element List</div>
        {elementBox}
      </div>
    </div>
  );
};

export default Memory;
