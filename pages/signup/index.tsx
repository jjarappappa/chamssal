import React, { useState } from "react";
import { Postcode } from "../../components/buttons/Postcode";
import Header from "../../components/layout/header";
import { useRecoilState } from "recoil";
import { signUpInputState } from "../../store/auth/signUpInputAtom";
import styles from "../../styles/pages/signup.module.scss";
import Head from "next/head";
import Title from "../../components/layout/title";
import { HiOutlineChevronDown } from "react-icons/hi";
import SignupName from "../../components/signup/SignupName";
import { useForm } from "react-hook-form";
import { snackBarState } from "../../store/alert/snackBarAtom";

function SignUp() {
  const [signUpInput, setSignUpInput] = useRecoilState(signUpInputState);
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [phone, setPhone] = useState(["010", "", ""]);
  const [birth, setBirth] = useState(["", "", ""]);
  const [domain, setDomain] = useState("");
  const { register, handleSubmit } = useForm();

  const changeSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpInput({
      ...signUpInput,
      [name]: value,
    });
  };

  const changeDomain = (newDomain: string) => {
    setDomain(newDomain);
    setIsOpenSelect(false);
  };

  const changePhone = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    maxLen: number
  ) => {
    let newPhone = [...phone];
    if (e.target.value.length > maxLen)
      e.target.value = e.target.value.slice(0, maxLen);
    newPhone[index] = e.target.value;
    setPhone(newPhone);
  };

  const changeBirth = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>,
    maxLen: number
  ) => {
    let newBirth = [...birth];
    if (e.target.value.length > maxLen)
      e.target.value = e.target.value.slice(0, maxLen);
    newBirth[index] = e.target.value;
    setBirth(newBirth);
  };

  let nameReg = /^[가-힣]{2,4}$/;

  return (
    <div>
      <Head>
        <title>회원가입</title>
      </Head>
      <Header />
      {/* <button
        onClick={() =>
          setSnackBar({
            isOpen: true,
            severity: "error",
            message: "asdf",
          })
        }
      /> */}
      <div className="background" />
      <Title>회원가입</Title>
      <form onSubmit={handleSubmit(() => console.log("asdf"))}>
        <div className={styles.signup}>
          <div className={styles.item}>
            <SignupName>이메일</SignupName>
            <div className={styles.inputs}>
              <input
                type="text"
                className={styles.input_middle}
                {...register("email")}
                name="email"
                // value={signUpInput.email}
                // onChange={(e) => changeSignUp(e)}
              />
              <span>@</span>
              <div className={styles.select}>
                <input
                  className={styles.input_middle}
                  placeholder="직접 입력"
                  {...register("domain")}
                  // value={domain}
                  // onChange={(e) => setDomain(e.target.value)}
                  onFocus={() => setIsOpenSelect(false)}
                />
                <span
                  className={
                    !isOpenSelect ? styles.arrow_down : styles.arrow_up
                  }
                  onClick={() => setIsOpenSelect((prev) => !prev)}
                >
                  <HiOutlineChevronDown width={44} height={44} />
                </span>
              </div>
            </div>
          </div>

          {isOpenSelect && (
            <ul>
              <li onClick={() => changeDomain("naver.com")}>naver.com</li>
              <li onClick={() => changeDomain("hanmail.net")}>hanmail.net</li>
              <li onClick={() => changeDomain("gmail.com")}>gmail.com</li>
              <li onClick={() => changeDomain("yahoo.com")}>yahoo.com</li>
              <li onClick={() => changeDomain("hotmail.com")}>hotmail.com</li>
              <li onClick={() => changeDomain("daum.net")}>daum.net</li>
              <li onClick={() => changeDomain("nate.com")}>nate.com</li>
            </ul>
          )}

          <div className={styles.item}>
            <SignupName>비밀번호</SignupName>
            <div className={styles.inputs}>
              <input
                type="password"
                className={styles.input_long}
                {...register("password")}
                name="password"
                // value={signUpInput.password}
                // onChange={(e) => changeSignUp(e)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>비밀번호 확인</SignupName>
            <div className={styles.inputs}>
              <input
                type="password"
                className={styles.input_long}
                {...register("confirmPassword")}
                name="confirmPassword"
                // value={signUpInput.confirmPassword}
                // onChange={(e) => changeSignUp(e)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>전화번호</SignupName>
            <div className={styles.inputs}>
              <input
                type="number"
                className={styles.input_short}
                {...register("phone1")}
                name="phone"
                // value={phone[0]}
                onChange={(e) => changePhone(0, e, 3)}
              />
              <span>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("phone2")}
                name="phone"
                // value={phone[1]}
                onChange={(e) => changePhone(1, e, 4)}
              />
              <span>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("phone3")}
                name="phone"
                // value={phone[2]}
                onChange={(e) => changePhone(2, e, 4)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>생년월일</SignupName>
            <div className={styles.inputs}>
              <input
                type="number"
                className={styles.input_short}
                {...register("birth1")}
                name="birth"
                // value={birth[0]}
                onChange={(e) => changeBirth(0, e, 4)}
                placeholder="yyyy"
              />
              <span>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("birth2")}
                name="birth"
                // value={birth[1]}
                onChange={(e) => changeBirth(1, e, 2)}
                placeholder="mm"
              />
              <span>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("birth3")}
                name="birth"
                // value={birth[2]}
                onChange={(e) => changeBirth(2, e, 2)}
                placeholder="dd"
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>이름</SignupName>
            <div className={styles.inputs}>
              <input
                type="name"
                className={styles.input_long}
                {...register("name")}
                name="name"
                // value={signUpInput.name}
                // onChange={(e) => changeSignUp(e)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>닉네임</SignupName>
            <div className={styles.inputs}>
              <input
                type="nickname"
                className={styles.input_long}
                {...register("nickname")}
                name="nickname"
                // value={signUpInput.nickname}
                // onChange={(e) => changeSignUp(e)}
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>주소</SignupName>
            <div className={styles.inputs}>
              <input
                type="text"
                className={styles.input_long}
                {...register("postcode")}
                name="postcode"
                // value={signUpInput.nickname}
                // onChange={(e) => changeSignUp(e)}
                readOnly
                placeholder="우편번호"
              />
              <Postcode className={styles.button} />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>{""}</SignupName>
            <div className={styles.inputs}>
              <input
                type="nickname"
                className={styles.input_full}
                name="nickname"
                value={signUpInput.nickname}
                onChange={(e) => changeSignUp(e)}
                readOnly
                placeholder="주소"
              />
              {/* <Postcode className={styles.button} /> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
