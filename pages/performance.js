import styles from "../styles/Performance.module.css";
import Temp from "../components/Temp";
import React, { useState } from "react";
import Head from "next/head";

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
      displayBox.push(<div key={i}>{elementBox[i]}</div>);
    }
    return displayBox;
  };

  const handleCPU = () => {
    console.log("System information : " + navigator.userAgent);
    console.log("CPU Information : ");

    console.log(chrome.system);

    chrome.system.cpu.getInfo(function (cpuInfo) {
      console.log(cpuInfo.modelName);
      console.log(cpuInfo.archName);
      console.log(cpuInfo.features);
    });
  };

  return (
    <div className={styles.performanceBox}>
      <Head>
        <title>App Test | Performance</title>
      </Head>
      <h1>Performance</h1>
      <button onClick={handleClick} className={styles.clickButton}>
        Add
      </button>
      <button onClick={handleCPU} className={styles.cpuUsageButton}>
        Get CPU Usage
      </button>
      <div className={styles.textbox}>
        <div>Element List</div>
        {display()}
      </div>
    </div>
  );
};

export default Performance;
