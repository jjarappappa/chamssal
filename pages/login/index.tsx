import type { NextPage } from "next";
import Header from "../../components/layout/header";
import Head from "next/head";
import styles from "../../styles/pages/login.module.scss";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { instance } from "../../instance/instance";
import { loginType } from "../../types/auth/loginType";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const queryClient = useQueryClient();

  const router = useRouter();

  const login = async (data: loginType) => {
    return await instance.post("/auth", data);
  };

  const loginMutation = useMutation(login);

  useEffect(() => {
    if (loginMutation.status === "success") {
      console.log("asdf");
      localStorage.setItem("accessToken", loginMutation.data?.data.accessToken);
      router.push("/");
    }
  }, [loginMutation, router]);

  return (
    <div className={styles.background}>
      <Head>
        <title>로그인</title>
      </Head>
      <Header />
      <div className={styles.login}>
        <h1>로그인</h1>
        <form
          onSubmit={handleSubmit((data) => {
            const loginData = {
              email: data.email,
              password: data.password,
            };
            loginMutation.mutate(loginData);
            console.log(loginMutation);
          })}
        >
          <div className={styles.inputs}>
            <input
              type="email"
              placeholder="이메일"
              className={styles.input}
              {...register("email")}
              name="email"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className={styles.input}
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
        {/* <div className={styles.search}>
          <span>이메일 찾기</span>
          <div className={styles.line}></div>
          <span>비밀번호 찾기</span>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
