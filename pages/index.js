import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Head from "next/head";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      val: data,
    },
  };
};

export default function Home({ val }) {
  return (
    <div>
      <Head>
        <title>App Test | Home</title>
      </Head>
      <div className={styles.main}>
        <Navbar></Navbar>
        <div className={styles.textbody}>
          An Experiment platform for detecting and testing performance measures
          as well as memory issues!
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
      <div>
        {val.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
