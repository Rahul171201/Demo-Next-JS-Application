import Navbar from "../components/Navbar";
import Link from "next/link";
import "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="main">
      <Navbar></Navbar>
      <div className="textbody">
        An Experiment platform for detecting and testing performance measures as
        well as memory issues!
      </div>
      <div className="linkbox">
        <Link href="/network">Network</Link>
        <Link href="/performance">Performance</Link>
        <Link href="memory">Memory</Link>
      </div>
    </div>
  );
}
