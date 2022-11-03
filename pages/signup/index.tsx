import React, { useState } from "react";
import { Postcode } from "../../components/buttons/Postcode";
import Header from "../../components/layout/header";
import { useRecoilState } from "recoil";
import { signUpInputState } from "../../store/auth/signUpInputAtom";
import styles from "../../styles/pages/signup.module.scss";
import Head from "next/head";
import Title from "../../components/layout/title";
import classNames from "classnames";
import Image from "next/image";
import { HiOutlineChevronDown } from "react-icons/hi";

function SignUp() {
  const [signUpInput, setSignUpInput] = useRecoilState(signUpInputState);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  return (
    <div>
      <Head>
        <title>회원가입</title>
      </Head>
      <Header />
      <div className="background" />
      <Title>회원가입</Title>
      {/* <Postcode className={styles.button} /> */}
      <div className={styles.signup}>
        <div className={styles.item}>
          <div className={styles.name_div}>
            <span className={styles.name}>이메일</span>
          </div>
          <div className={styles.inputs}>
            <input type="text" className={styles.input_middle} />
            <span>@</span>
            <div className={styles.select}>
              <input className={styles.input_middle} placeholder="직접 입력" />
              <span
                className={styles.arrow}
                onClick={() => setIsOpenSelect((prev) => !prev)}
              >
                <HiOutlineChevronDown width={44} height={44} />
              </span>
            </div>
          </div>
        </div>
        {isOpenSelect && (
          <ul>
            <li value="naver.com">naver.com</li>
            <li value="hanmail.net">hanmail.net</li>
            <li value="gmail.com">gmail.com</li>
            <li value="yahoo.com">yahoo.com</li>
            <li value="hotmail.com">hotmail.com</li>
            <li value="daum.net">daum.net</li>
            <li value="nate.com">nate.com</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default SignUp;
