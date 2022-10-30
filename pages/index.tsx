import type { NextPage } from "next";
import Header from "../components/layout/header";
import Head from "next/head";
import { useRecoilValue } from "recoil";
import { isOpenMenuState } from "../store/header/isOpenMenuAtom";

const Home: NextPage = () => {
  const isOpenMenu = useRecoilValue(isOpenMenuState);
  return (
    <>
      <Head>
        <title>아이맘 행복교실</title>
      </Head>
      <Header />
    </>
  );
};

export default Home;
