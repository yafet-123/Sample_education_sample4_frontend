import Head from "next/head";
import Image from "next/image";
import { About } from "../components/About";
import { Footer } from "../components/footer";
import { Hero } from "../components/Hero";
import { Membership } from "../components/Membership";
import { Navbar } from "../components/Navbar";
import { Objective } from "../components/Objective";
import { Trending } from "../components/Trending";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <Objective />
      <Membership />
      <Trending />
      <About />
      <Footer />
    </div>
  );
}
