import styles from "../styles/Network.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();
  return {
    props: {
      val: data,
    },
  };
};

const Network = ({ val }) => {
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

  return (
    <div>
      <Head>
        <title>App Test | Network</title>
      </Head>
      <div className={styles.mainbox}>
        <h1>Network</h1>
        <button onClick={fetch_resource_timings} className={styles.fetchButton}>
          Fetch Resource Details
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
