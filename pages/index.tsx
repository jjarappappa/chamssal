import type { NextPage } from "next";
import Header from "../components/layout/header";
import Head from "next/head";
import Mainbutton from "../components/buttons/Mainbutton";
import Banner from "../components/banner/banner";
import styles from '../styles/pages/index.module.scss';
import Youtube from "../components/youtube/youtube";
const Home: NextPage = () => {
  return (
    <body>
      <Head>
        <title>아이맘 행복교실</title>
      </Head>
      <Header />
      <Banner />
      <div className={styles.mainbutton}>
        <Mainbutton />
      </div>
      <div className={styles.realyoutube}>
      <Youtube/>
      </div>
    </body>
  );
};

export default Home;
