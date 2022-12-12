import React, { useRef, useState } from "react";
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
import { useQuery, useMutation, useQueryClient } from "react-query";
import { ErrorMessage } from "@hookform/error-message";
import { instance } from "../../instance/instance";
import { signupType } from "../../types/auth/signupType";

function SignUp() {
  const [signUpInput, setSignUpInput] = useRecoilState(signUpInputState);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [domain, setDomain] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
    setValue,
  } = useForm();

  const queryClient = useQueryClient();

  const joinUser = async (data: signupType): Promise<signupType> => {
    const response = await instance.post<signupType>("/user", data);
    return response.data;
  };

  const signUpMutation = useMutation(joinUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("signup");
    },
  });

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await instance.post("/user", {});
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);

  const changeDomain = (newDomain: string) => {
    setDomain(newDomain);
    setIsOpenSelect(false);
  };

  return (
    <div className={styles.background}>
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
          onSubmit={handleSubmit((data) => {
            const signupData = {
              address: signUpInput.address,
              birthday: data.birth1 + "-" + data.birth2 + "-" + data.birth3,
              email: data.email + "@" + data.domain,
              name: data.name,
              nickname: data.nickname,
              password: data.password,
              phoneNumber: data.phone1 + data.phone2 + data.phone3,
            };
            console.log(signupData);
            signUpMutation.mutate(signupData);
          })}
          onClick={() => {
            setIsOpenSelect(false);
          }}
        >
          <div className={styles.item}>
            <SignupName>이메일</SignupName>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <input
                  type="text"
                  className={styles.input_middle}
                  {...register("email", {
                    required: { value: true, message: "이메일을 입력하세요!" },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  name="email"
                  // value={signUpInput.email}
                  // onChange={(e) => changeSignUp(e)}
                />
                <ErrorMessage
                  errors={errors}
                  name="email"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
              <span className={styles.special}>@</span>
              <div>
                <div className={styles.select}>
                  <div className={styles.inputItem}>
                    <input
                      className={styles.input_middle}
                      placeholder="직접 입력"
                      {...register("domain", {
                        required: {
                          value: true,
                          message: "이메일 도메인을 입력하세요!",
                        },
                      })}
                      onFocus={() => setIsOpenSelect(false)}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="domain"
                      as="p"
                      className={styles.errorMessage}
                    />
                  </div>
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
                    <ListItem button>
                      <ListItemText
                        primary="naver.com"
                        onClick={() => setValue("domain", "naver.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText
                        primary="hanmail.net"
                        onClick={() => setValue("domain", "hanmail.net")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText
                        primary="gmail.com"
                        onClick={() => setValue("domain", "gmail.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText
                        primary="yahoo.com"
                        onClick={() => setValue("domain", "yahoo.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText
                        primary="hotmail.com"
                        onClick={() => setValue("domain", "hotmail.com")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText
                        primary="daum.net"
                        onClick={() => setValue("domain", "daum.net")}
                      />
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                      <ListItemText
                        primary="nate.com"
                        onClick={() => setValue("domain", "nate.com")}
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
              <div className={styles.inputItem}>
                <input
                  type="password"
                  className={styles.input_long}
                  {...register("password", {
                    required: {
                      value: true,
                      message: "비밀번호를 입력하세요!",
                    },
                  })}
                  name="password"
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>비밀번호 확인</SignupName>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <input
                  type="password"
                  className={styles.input_long}
                  {...register("confirmPassword", {
                    required: {
                      value: true,
                      message: "비밀번호 확인을 입력하세요!",
                    },
                    pattern: {
                      value: new RegExp(`[${getValues("password")}]`, "g"),
                      message: "비밀번호가 맞지 않습니다!",
                    },
                  })}
                  name="confirmPassword"
                />
                <ErrorMessage
                  errors={errors}
                  name="confirmPassword"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>전화번호</SignupName>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <input
                  type="text"
                  className={styles.input_short}
                  {...register("phone1", {
                    required: {
                      value: true,
                      message: "휴대폰 앞자리를 입력하세요!",
                    },
                    maxLength: {
                      value: 3,
                      message: "3자리로 입력하세요!",
                    },
                    pattern: {
                      value: /01[0-9]/,
                      message: "숫자만 입력하세요!",
                    },
                  })}
                  name="phone1"
                  // onChange={(e) => changePhone(0, e, 3)}
                />
                <ErrorMessage
                  errors={errors}
                  name="phone1"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
              <span className={styles.special}>-</span>
              <div className={styles.inputItem}>
                <input
                  type="number"
                  className={styles.input_short}
                  {...register("phone2", {
                    required: {
                      value: true,
                      message: "휴대폰 중간자리를 입력하세요!",
                    },
                    maxLength: {
                      value: 4,
                      message: "4자리로 입력하세요!",
                    },
                  })}
                  name="phone2"
                  // onChange={(e) => changePhone(1, e, 4)}
                />
                <ErrorMessage
                  errors={errors}
                  name="phone2"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
              <span className={styles.special}>-</span>
              <div className={styles.inputItem}>
                <input
                  type="number"
                  className={styles.input_short}
                  {...register("phone3", {
                    required: {
                      value: true,
                      message: "휴대폰 뒷자리를 입력하세요!",
                    },
                    maxLength: {
                      value: 4,
                      message: "4자리로 입력하세요!",
                    },
                  })}
                  name="phone3"
                  // onChange={(e) => changePhone(2, e, 4)}
                />
                <ErrorMessage
                  errors={errors}
                  name="phone3"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>생년월일</SignupName>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <input
                  type="number"
                  className={styles.input_short}
                  {...register("birth1", {
                    required: {
                      value: true,
                      message: "태어난 연도를 입력하세요!",
                    },
                    maxLength: {
                      value: 4,
                      message: "4자리로 입력하세요!",
                    },
                  })}
                  name="birth1"
                  // onChange={(e) => changeBirth(0, e, 4)}
                  placeholder="yyyy"
                />
                <ErrorMessage
                  errors={errors}
                  name="birth1"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
              <span className={styles.special}>-</span>
              <div className={styles.inputItem}>
                <input
                  type="number"
                  className={styles.input_short}
                  {...register("birth2", {
                    required: {
                      value: true,
                      message: "태어난 달을 입력하세요!",
                    },
                    maxLength: {
                      value: 2,
                      message: "2자리로 입력하세요!",
                    },
                  })}
                  name="birth2"
                  // onChange={(e) => changeBirth(1, e, 2)}
                  placeholder="mm"
                />
                <ErrorMessage
                  errors={errors}
                  name="birth2"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
              <span className={styles.special}>-</span>
              <div className={styles.inputItem}>
                <input
                  type="number"
                  className={styles.input_short}
                  {...register("birth3", {
                    required: {
                      value: true,
                      message: "태어난 날짜를 입력하세요!",
                    },
                    maxLength: {
                      value: 2,
                      message: "2자리로 입력하세요!",
                    },
                  })}
                  name="birth3"
                  // onChange={(e) => changeBirth(2, e, 2)}
                  placeholder="dd"
                />
                <ErrorMessage
                  errors={errors}
                  name="birth3"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>이름</SignupName>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <input
                  type="name"
                  className={styles.input_long}
                  {...register("name", {
                    pattern: {
                      value: /^[가-힣]{2,4}$/,
                      message: "이름 2~4글자로 입력하세요!",
                    },
                    required: {
                      value: true,
                      message: "이름을 입력하세요!",
                    },
                  })}
                  name="name"
                />
                <ErrorMessage
                  errors={errors}
                  name="name"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>닉네임</SignupName>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <input
                  type="nickname"
                  className={styles.input_long}
                  {...register("nickname", {
                    required: {
                      value: true,
                      message: "닉네임을 입력하세요!",
                    },
                  })}
                  name="nickname"
                />

                <ErrorMessage
                  errors={errors}
                  name="nickname"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
            </div>
          </div>
          <div className={styles.item}>
            <SignupName>주소</SignupName>
            <div className={styles.inputs}>
              <div className={styles.inputItem}>
                <input
                  type="text"
                  className={styles.input_long}
                  {...register("postcode", {
                    required: {
                      value: true,
                      message: "우편번호를 입력하세요!",
                    },
                  })}
                  name="postcode"
                  readOnly
                  placeholder="우편번호"
                />
                <ErrorMessage
                  errors={errors}
                  name="postcode"
                  as="p"
                  className={styles.errorMessage}
                />
              </div>
              <Postcode className={styles.button} setValue={setValue} />
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
