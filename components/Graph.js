import styles from "../styles/Graph.module.css";
import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

const finalArray = [];

const Graph = (props) => {
  finalArray.push(props.live);
  // console.log(props.live);
  // if (finalArray.length >= 100) {
  //   finalArray.splice(0, 50);
  // }
  if (finalArray.length > 50) finalArray.shift();

  const labelArray = finalArray.map((item) => {
    return item.timeStamp;
  });
  const valueArray = finalArray.map((item) => {
    return item.duration;
  });

  // console.log(finalArray[finalArray.length - 1].duration);

  const chartData = {
    labels: labelArray,
    datasets: [
      {
        label: "RTT",
        data: valueArray,
        backgroundColor: "red",
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={styles.mainbox}>
      <h2>Bar Example (custom size)</h2>
      <Line data={chartData} width="700px" height="500px"></Line>
    </div>
  );
};

export default Graph;
