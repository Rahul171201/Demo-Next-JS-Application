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

  const countArray = props.count;

  if (finalArray.length > 50) finalArray.shift();

  if (countArray.length > 50) countArray.shift();

  const labelArray = props.count;
  const valueArray = finalArray.map((item) => {
    if (item) return item.duration;
    else return 0;
  });

  // console.log(finalArray[finalArray.length - 1].duration);

  const chartData = {
    labels: labelArray,
    datasets: [
      {
        label: "Round Trip Time (RTT)",
        data: valueArray,
        backgroundColor: "red",
        borderColor: "white",
        color: "white",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className={styles.mainbox}>
      <h2>Network delay (Round Trip Time)</h2>
      <Line
        data={chartData}
        width="700px"
        height="500px"
        options={{
          animation: {
            duration: 0,
          },
        }}
      ></Line>
    </div>
  );
};

export default Graph;
