import React from "react";
import { applicantType } from "../../types/lecture/lectureType";
import styles from "../../styles/components/lecture/lectureApplicant.module.scss";

function LectureApplicant({ data }: { data: applicantType }) {
  return (
    <div className={styles.root}>
      <span className={styles.item}>닉네임: {data.nickname}</span>
      <span className={styles.item}>이름: {data.name}</span>
      <span className={styles.item}>이메일: {data.email}</span>
      <span className={styles.item}>휴대폰 번호: {data.phoneNumber}</span>
      <span className={styles.item}>주소: {data.address}</span>
      <span className={styles.item}>생일: {data.birthday}</span>
    </div>
  );
}

export default LectureApplicant;
