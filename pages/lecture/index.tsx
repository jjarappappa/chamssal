import Head from "next/head";
import React from "react";
import Header from "../../components/layout/header";
import Title from "../../components/layout/title";
import LectureItem from "../../components/lecture/LectureItem";
import styles from "../../styles/pages/lecture.module.scss";
import { QueryCache, useQuery, useQueryClient } from "react-query";
import { instance } from "../../instance/instance";
import { lectureType } from "../../types/lecture/lectureType";
import Link from "next/link";
import { getLectureList } from "../../util/api/lecture";
import { useRecoilState } from "recoil";
import { lectureListState } from "../../store/lecture/lectureListAtom";

function Lecture() {
  const { status, data, error } = useQuery("lecture", () => getLectureList());
  const queryClient = useQueryClient();
  return (
    <div className={styles.background}>
      <Head>
        <title>강의 신청</title>
      </Head>
      <Header />
      <Title>강의 신청</Title>
      <div className={styles.lecture}>
        {status === "success" &&
          data?.data.lectureList?.map((item: lectureType) => {
            return <LectureItem data={item} key={item.id} />;
          })}
      </div>
    </div>
  );
}

export default Lecture;
