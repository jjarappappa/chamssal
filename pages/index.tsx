import type { NextPage } from "next";
import Header from "../components/layout/header";
import Head from "next/head";
import Mainbutton from "../components/buttons/Mainbutton";
import Banner from "../components/banner/banner";
import styles from "../styles/pages/main.module.scss";
import Youtube from "../components/youtube/youtube";
const Home: NextPage = () => {
  return (
    <div className={styles.total}>
      <Head>
        <title>아이맘 행복교실</title>
      </Head>
      <div className={styles.background}>
        <Header />
        <section className={styles.mainsection}>
          <Banner />
          <div className={styles.mainbutton}>
            <Mainbutton />
          </div>
          <div className={styles.realyoutube}>
            <Youtube />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
