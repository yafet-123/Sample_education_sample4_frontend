import Head from "next/head";
import Image from "next/image";
import { Footer } from "../components/footer";
import { Hero } from "../components/Hero";
import { Membership } from "../components/Membership";
import { Navbar } from "../components/Navbar";
import { Objective } from "../components/Objective";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Hero />
      <Objective />
      <Membership />
      <Footer />
    </div>
  );
}
