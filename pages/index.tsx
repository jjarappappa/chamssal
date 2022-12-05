import type { NextPage } from "next";
import Header from "../components/layout/header";
import Head from "next/head";
import Mainbutton from "../components/buttons/Mainbutton";
import Banner from "../components/banner/banner";
import styles from "../styles/pages/main.module.scss";
import Youtube from "../components/youtube/youtube";
import Sidebar from "../components/layout/Sidebar";
import AdminTitle from "../components/layout/AdminTitle";
import { FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>아이맘 행복교실</title>
      </Head>
      {!true ? (
        <div className="background">
          <Header />
          <Banner />
          <div className={styles.mainbutton}>
            <Mainbutton />
          </div>
          <div className={styles.realyoutube}>
            <Youtube />
          </div>
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="background_admin">
            <AdminTitle>메인 배너 등록</AdminTitle>
            <div className={styles.banners}>
              <div className={styles.banner}>
                <FaPlus size={40} color="#73726F" className={styles.plus} />
              </div>
              <div className={styles.banner}>
                <FiPlus size={24} color="#A3A29E" className={styles.delete} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
