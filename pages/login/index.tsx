import type { NextPage } from "next";
import Header from "../../components/layout/header";
import Head from "next/head";
import styles from "../../styles/pages/login.module.scss";

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>로그인</title>
      </Head>
      <Header />
      <div className="background"></div>
      <div className={styles.login}>
        <h1>로그인</h1>
        <div className={styles.inputs}>
          <input type="text" placeholder="이메일" className={styles.input} />
          <input
            type="password"
            placeholder="비밀번호"
            className={styles.input}
          />
        </div>
        <button className={styles.button}>로그인</button>
        <div className={styles.search}>
          <span>이메일 찾기</span>
          <div className={styles.line}></div>
          <span>비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
