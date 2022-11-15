import type { NextPage } from "next";
import Header from "../components/layout/header";
import Head from "next/head";
import Mainbutton from "../components/buttons/Mainbutton";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>아이맘 행복교실</title>
      </Head>
      <Header />
      <Mainbutton/>
    </>
  );
};

export default Home;
