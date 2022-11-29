import type { NextPage } from "next";
import Header from "../../components/layout/header";
import Head from "next/head";
import styles from "../../styles/pages/login.module.scss";
import { useForm } from "react-hook-form";

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  return (
    <div className="background">
      <Head>
        <title>로그인</title>
      </Head>
      <Header />
      <div className={styles.login}>
        <h1>로그인</h1>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div className={styles.inputs}>
            <input
              type="email"
              placeholder="이메일"
              className={styles.input}
              // value={input.email}
              // onChange={(e) => onChange(e)}
              {...register("email")}
              name="email"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className={styles.input}
              // value={input.password}
              // onChange={(e) => onChange(e)}
              {...register("password")}
              name="password"
            />
          </div>
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            로그인
          </button>
        </form>
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
