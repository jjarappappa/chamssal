import Head from "next/head";
import React from "react";
import Header from "../../components/layout/header";
import Title from "../../components/layout/title";
import LectureItem from "../../components/lecture/LectureItem";
import styles from "../../styles/pages/lecture.module.scss";

function Lecture() {
  return (
    <>
      <Head>
        <title>강의 신청</title>
      </Head>
      <Header />
      <div className="background" />
      {/* <Title>강의 신청</Title> */}
      <div className={styles.lecture}>
        {[...Array(9)].map((item, index) => {
          return <LectureItem key={index} data={item} />;
        })}
      </div>
    </>
  );
}

export default Lecture;