import styles from "../styles/Network.module.css";

const Network = () => {
  function fetch_resource_timings() {
    if (
      !("performance" in window) ||
      !("getEntriesByType" in window.performance) ||
      !(window.performance.getEntriesByType("resource") instanceof Array)
    ) {
      console.log("Resource Timing API not supported");
    } else {
      let resources = window.performance.getEntriesByType("resource");
      let imageResources = resources.filter(
        (item) => item.initiatorType === "img"
      );
      console.log(imageResources);
      console.log(imageResources.length);
    }
  }

  return (
    <div>
      <h1>Network</h1>
      <button onClick={fetch_resource_timings}>Fetch Network</button>
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
  );
};

export default Network;
