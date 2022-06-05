import styles from "../styles/Network.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import Graph from "../components/Graph";

// $0.querySelector("button").click()
// on any keypress
// by having global object' property as function

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  return {
    props: {
      val: data,
    },
  };
};

const testFunc = () => {
  const final_data = [];
  setInterval(async () => {
    const res = await fetch("http://localhost:3000/api/roundtrip");
    const data = await res.json();
    final_data.push(data);
    // console.log(data);
  }, 5000);

  return final_data;
};

let counter = 0;
let arr = [];

const Network = ({ val }) => {
  const [flag, setFlag] = useState(false);
  const [displayGraph, setDisplayGraph] = useState(false);
  const [liveData, setLiveData] = useState([]);
  const [countArray, setCountArray] = useState([]);

  testFunc();

  useEffect(() => {
    const timer = setInterval(() => {
      arr.push(counter);
      counter++;

      setCountArray(arr);
      const reso = window.performance.getEntriesByType("resource").length;
      if (reso > 200) {
        window.performance.clearResourceTimings();
      }
      let res = window.performance.getEntriesByType("resource").pop();
      setLiveData(res);
      console.log(reso);
    }, 500);

    return function stopTimer() {
      clearInterval(timer);
    };
  }, []);

  // key press event
  useEffect(() => {
    window.addEventListener("keydown", () => {
      // console.log("ok", flag);
      if (flag) {
        let resources = window.performance.getEntriesByType("resource");
        for (let i = 0; i < resources.length; i++) {
          if (resources[i].duration > 50.0) {
            console.log("Url of the resource : " + resources[i].name);
            console.log("Type : " + resources[i].entryType);
            console.log("Initiated By : " + resources[i].initiatorType);
            // console.log("Duration : " + resources[i].duration);
          }
        }
        setFlag(false);
      } else setFlag(true);
    });

    // global object function
    window.getNetworkStats = {
      getNetworkDetails: function () {
        console.log("The requests which took more than 50ms are : ");
        let resources = window.performance.getEntriesByType("resource");
        for (let i = 0; i < resources.length; i++) {
          if (resources[i].duration > 50.0) {
            console.log("Url of the resource : " + resources[i].name);
            console.log("Type : " + resources[i].entryType);
            console.log("Initiated By : " + resources[i].initiatorType);
            // console.log("Duration : " + resources[i].duration);
          }
        }
      },
    };

    // Network Information API
    // setInterval(() => {
    //   let connection = navigator.connection;
    //   let downlink = connection.downlink; // effective bandwidth estimate in megabits per second
    //   let type = connection.effectiveType; // effective type of connection
    //   let rtt = connection.rtt; // estimated effective round-trip time of the current connection
    //   console.log("Downlink : " + downlink);
    //   console.log("Effective Type: " + type);
    //   console.log("Round trip time: " + rtt);
    // }, 2000);
  }, [flag]);

  function fetch_resource_timings() {
    if (
      !("performance" in window) ||
      !("getEntriesByType" in window.performance) ||
      !(window.performance.getEntriesByType("resource") instanceof Array)
    ) {
      console.log("Resource Timing API not supported");
    } else {
      console.log("The requests which took more than 50ms are : ");
      let resources = window.performance.getEntriesByType("resource");
      for (let i = 0; i < resources.length; i++) {
        if (resources[i].duration > 50.0) {
          console.log("Url of the resource : " + resources[i].name);
          console.log("Type : " + resources[i].entryType);
          console.log("Initiated By : " + resources[i].initiatorType);
          // console.log("Duration : " + resources[i].duration);
        }
      }
    }
  }

  function getRTT() {
    if (
      !("performance" in window) ||
      !("getEntriesByType" in window.performance) ||
      !(window.performance.getEntriesByType("resource") instanceof Array)
    ) {
      console.log("Resource Timing API not supported");
    } else {
      let resources = window.performance.getEntriesByType("resource");
      for (let i = 0; i < resources.length; i++) {
        if (resources[i].name === "http://localhost:3000/api/roundtrip") {
          console.log(resources[i].duration);
        }
      }
    }
  }

  function getLiveNetworkData() {
    let resources = window.performance.getEntriesByType("resource");
  }

  function alterGraph() {
    // console.log(displayGraph);
    setDisplayGraph(!displayGraph);
  }

  return (
    <div>
      <Head>
        <title>App Test | Network</title>
      </Head>
      <div className={styles.graphBox}>
        {displayGraph ? (
          <Graph
            className={styles.graph}
            live={liveData}
            count={countArray}
          ></Graph>
        ) : (
          ""
        )}
      </div>
      <div className={styles.mainbox}>
        <h1>Network</h1>
        <button onClick={getRTT} className={styles.fetchButton}>
          Fetch Resource Details
        </button>
        <button onClick={alterGraph} className={styles.showGraph}>
          Show Graph
        </button>
        <div className={styles.imageBox}>
          <img
            src="https://images.fineartamerica.com/images-medium-large-5/water-drop-on-peacock-feather-miragec.jpg"
            alt="alternating image"
            className={styles.image}
          />
          <img
            src="https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="alt image"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.renderBox}>
        {val.map((item) => (
          <div key={item.roll}>
            <h1>{item.name}</h1>
          </div>
        ))}
        {/* {console.log(val)} */}
      </div>
    </div>
  );
};

export default Network;
