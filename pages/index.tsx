import type { NextPage } from "next";
import Header from "../components/layout/header";
import Head from "next/head";
import Mainbutton from "../components/buttons/Mainbutton";
import Banner from "../components/banenr/banner";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>아이맘 행복교실</title>
      </Head>
      <Header />
      <Banner/>
      <Mainbutton/>
    </>
  );
};

export default Home;
