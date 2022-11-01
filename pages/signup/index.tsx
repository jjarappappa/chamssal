import React from "react";
import { Postcode } from "../../components/buttons/Postcode";
import Header from "../../components/layout/header";
import Head from "next/head";
function SignUp() {
  return (
    <div>
      <Head>
        <title>회원가입</title>
      </Head>
      <Header />
      <Postcode />
    </div>
  );
}

export default SignUp;
