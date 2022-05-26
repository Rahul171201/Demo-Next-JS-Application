import styles from "../styles/Performance.module.css";
import React, { useState } from "react";

const Memory = () => {
  const [elementBox, setElementBox] = useState([]);

  const addElements = () => {
    const elementList = [];
    for (let i = 0; i < 100; i++) {
      const element = React.createElement("h1", { id: "ele" }, "Another Item");
      console.log(element);
      elementList.push(element);
    }

    setElementBox(elementList);
  };

  const removeElements = () => {
    for (let i = 0; i < elementBox.length; i++) {
      document.querySelector("#ele").remove();
    }
    console.log(elementBox.length);
  };

  return (
    <div className={styles.memory}>
      <button className={styles.addButton} onClick={addElements}>
        Add
      </button>
      <button className={styles.removeButton} onClick={removeElements}>
        Remove
      </button>
      {elementBox}
    </div>
  );
};

export default Memory;
