import styles from "../styles/Performance.module.css";
import React, { useState } from "react";

const Performance = () => {
  const [elementBox, setElementBox] = useState([]);

  const handleClick = () => {
    const mainBox = [];
    for (let i = 0; i < 1000; i++) {
      const newElement = React.createElement(
        "h1",
        {},
        "This is just another line!"
      );
      mainBox.push(newElement);
    }
    setElementBox(mainBox);
    console.log(mainBox);
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
      {display()}
    </div>
  );
};

export default Performance;
