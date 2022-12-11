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
import { ListItem, List, Divider, ListItemText } from "@mui/material";

function SignUp() {
  const [signUpInput, setSignUpInput] = useRecoilState(signUpInputState);
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [phone, setPhone] = useState(["010", "", ""]);
  const [birth, setBirth] = useState(["", "", ""]);
  const [domain, setDomain] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

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

  // console.log(errors?.)

  return (
    <div className="background">
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
      <Title>회원가입</Title>
      <div className={styles.signup}>
        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          onClick={() => {
            setIsOpenSelect(false);
            console.log("wrw");
          }}
        >
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
              <span className={styles.special}>@</span>
              <div>
                <div className={styles.select}>
                  <input
                    className={styles.input_middle}
                    placeholder="직접 입력"
                    {...register("domain")}
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    onFocus={() => setIsOpenSelect(false)}
                  />
                  <span
                    className={
                      !isOpenSelect ? styles.arrow_down : styles.arrow_up
                    }
                    onClick={(e) => {
                      setIsOpenSelect((prev) => !prev);
                      e.stopPropagation();
                    }}
                  >
                    <HiOutlineChevronDown className={styles.special} />
                  </span>
                </div>
                {isOpenSelect && (
                  <List
                    sx={{
                      width: "314px",
                      position: "absolute",
                      zIndex: "199",
                      backgroundColor: "#FAFAFA",
                      borderRadius: "10px",
                      display: "block",
                      fontSize: "16px",
                    }}
                    component="nav"
                    aria-label="mailbox folders"
                  >
                    <ListItem button sx={{ backgroundColor: "#FAFAFA" }}>
                      <ListItemText
                        primary="naver.com"
                        onClick={() => changeDomain("naver.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button sx={{ backgroundColor: "#FAFAFA" }}>
                      <ListItemText
                        primary="hanmail.net"
                        onClick={() => changeDomain("hanmail.net")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button sx={{ backgroundColor: "#FAFAFA" }}>
                      <ListItemText
                        primary="gmail.com"
                        onClick={() => changeDomain("gmail.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button sx={{ backgroundColor: "#FAFAFA" }}>
                      <ListItemText
                        primary="yahoo.com"
                        onClick={() => changeDomain("yahoo.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button sx={{ backgroundColor: "#FAFAFA" }}>
                      <ListItemText
                        primary="hotmail.com"
                        onClick={() => changeDomain("hotmail.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText
                        primary="daum.net"
                        onClick={() => changeDomain("daum.net")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button sx={{ backgroundColor: "#FAFAFA" }}>
                      <ListItemText
                        primary="nate.com"
                        onClick={() => changeDomain("nate.com")}
                      />
                    </ListItem>
                  </List>
                )}
              </div>
            </div>
          </div>

          <div className={styles.item}>
            <SignupName>비밀번호</SignupName>
            <div className={styles.inputs}>
              <input
                type="password"
                className={styles.input_long}
                {...register("password")}
                name="password"
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
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>전화번호</SignupName>
            <div className={styles.inputs}>
              <input
                type="text"
                className={styles.input_short}
                {...register("phone1", { pattern: /01[0-9]/ })}
                name="phone"
                // onChange={(e) => changePhone(0, e, 3)}
              />
              <span className={styles.special}>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("phone2")}
                name="phone"
                // onChange={(e) => changePhone(1, e, 4)}
              />
              <span className={styles.special}>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("phone3")}
                name="phone"
                // onChange={(e) => changePhone(2, e, 4)}
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
                // onChange={(e) => changeBirth(0, e, 4)}
                placeholder="yyyy"
              />
              <span className={styles.special}>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("birth2")}
                name="birth"
                // onChange={(e) => changeBirth(1, e, 2)}
                placeholder="mm"
              />
              <span className={styles.special}>-</span>
              <input
                type="number"
                className={styles.input_short}
                {...register("birth3")}
                name="birth"
                // onChange={(e) => changeBirth(2, e, 2)}
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
                {...register("name", { pattern: /^[가-힣]{2,4}$/ })}
                name="name"
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
                value={signUpInput.postcode}
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
                type="text"
                className={styles.input_full}
                {...register("address")}
                value={signUpInput.address}
                name="address"
                readOnly
                placeholder="주소"
              />
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>{""}</SignupName>
            <div className={styles.inputs}>
              <input
                type="text"
                className={styles.input_full}
                {...register("detailAddress")}
                name="detailAddress"
                placeholder="상세주소"
              />
            </div>
          </div>
          <input type="submit" className={styles.button} value="회원가입" />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
