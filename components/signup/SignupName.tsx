import React from "react";
import styles from "../../styles/components/signup/signupItem.module.scss";

function SignupItem({ children }: { children: string }) {
  //   const [signUpInput, setSignUpInput] = useRecoilState(signUpInputState);
  //   console.log(children);
  return (
    <div className={styles.name_div}>
      <span className={styles.name}>{children}</span>
    </div>
  );
}

export default SignupItem;
