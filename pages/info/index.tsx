import Head from "next/head";
import React from "react";
import Header from "../../components/layout/header";

function Info() {
  return (
    <div className="background">
      <Head>
        <title>정보 보기</title>
      </Head>
      <Header />
    </div>
  );
}

export default Info;
