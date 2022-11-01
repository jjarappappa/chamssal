import type { NextPage } from "next";
import Header from "../../components/layout/header";
import Head from "next/head";
import styles from "../../styles/pages/login.module.scss";
import { ChangeEvent, useState } from "react";

interface loginInput {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const [input, setInput] = useState<loginInput>({
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const nextInputs = {
      ...input,
      [name]: value,
    };

    setInput(nextInputs);
  };

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
          <input
            type="email"
            placeholder="이메일"
            className={styles.input}
            value={input.email}
            onChange={(e) => onChange(e)}
            name="email"
          />
          <input
            type="password"
            placeholder="비밀번호"
            className={styles.input}
            value={input.password}
            onChange={(e) => onChange(e)}
            name="password"
          />
        </div>
        <button className={styles.button} onClick={() => console.log(input)}>
          로그인
        </button>
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
