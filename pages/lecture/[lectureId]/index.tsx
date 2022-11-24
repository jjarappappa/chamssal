import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/layout/header";
import Title from "../../../components/layout/title";
import LectureLabel from "../../../components/lecture/LectureLabel";
import styles from "../../../styles/pages/lectureContent.module.scss";
import useMedia from "../../../hooks/useMedia";

function LectureContent() {
  const router = useRouter();
  const { data } = router.query;
  const isMobile = useMedia("(min-width: 1188px)");

  //   console.log(data);
  //   const item = JSON.parse(data); // 문자를 array로
  console.log(isMobile);
  return (
    <div className="background">
      <Head>
        <title>회원가입</title>
      </Head>
      <Header />
      <Title>{"제목"}</Title>
      <div className={styles.lecture}>
        <div className={styles.lecture_info}>
          <LectureLabel>일시</LectureLabel>
          <span className={styles.item}>2022.12.12</span>
        </div>
        <div className={styles.lecture_info}>
          <LectureLabel>장소</LectureLabel>
          <span className={styles.item}>부산광역시 가락대로 1393</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>대상</LectureLabel>
          <span className={styles.item}>임산부</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>강사</LectureLabel>
          <span className={styles.item}>홍길동</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>접수 기간</LectureLabel>
          <span className={styles.item}>~2022.12.01</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>당첨자 발표</LectureLabel>
          <span className={styles.item}>2022.12.15</span>
        </div>
        <hr />
        <div></div>
      </div>
      <div className={styles.lecture}>
        <button className={styles.button}>신청하기</button>
      </div>
    </div>
  );
}

export default LectureContent;
