import styles from "../styles/Performance.module.css";
import Temp from "../components/Temp";
import React, { useState } from "react";

const Performance = () => {
  const [elementBox, setElementBox] = useState([]);

  const handleClick = () => {
    const mainBox = [];
    for (let i = 0; i < 10000; i++) {
      mainBox.push(<Temp></Temp>);
    }
    setElementBox(mainBox);
  };

  const display = () => {
    const displayBox = [];
    for (let i = 0; i < elementBox.length; i++) {
      displayBox.push(<div>{elementBox[i]}</div>);
    }
    return displayBox;
  };

  return (
    <div className={styles.performanceBox}>
      <button onClick={handleClick} className={styles.clickButton}>
        Add
      </button>
      <div className={styles.textbox}>
        <div>Element List</div>
        {display()}
      </div>
    </div>
  );
};

export default Performance;
