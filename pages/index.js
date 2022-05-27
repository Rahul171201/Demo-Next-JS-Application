import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.textbody}>
        An Experiment platform for detecting and testing performance measures as
        well as memory issues!
      </div>
      <div className={styles.linkbox}>
        <Link href="/network">
          <a className={styles.linkitem}>Network</a>
        </Link>
        <Link href="/performance">
          <a className={styles.linkitem}>Performance</a>
        </Link>
        <Link href="/memory">
          <a className={styles.linkitem}>Memory</a>
        </Link>
      </div>
    </div>
  );
}
