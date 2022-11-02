import React from "react";
import { Postcode } from "../../components/buttons/Postcode";
import Header from "../../components/layout/header";
import { useRecoilState } from "recoil";
import { signUpInputState } from "../../store/auth/signUpInputAtom";
import styles from "../../styles/pages/signup.module.scss";
import Head from "next/head";
import Title from "../../components/layout/title";
function SignUp() {
  const [signUpInput, setSignUpInput] = useRecoilState(signUpInputState);
  console.log(signUpInput);
  return (
    <div>
      <Head>
        <title>회원가입</title>
      </Head>
      <Header />
      <div className="background" />
      <Title>회원가입</Title>
      {/* <Postcode className={styles.button} /> */}
    </div>
  );
}

export default SignUp;
