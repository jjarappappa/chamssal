import React from "react";
import { useRouter, withRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/layout/header";
import Title from "../../../components/layout/title";
import LectureLabel from "../../../components/lecture/LectureLabel";
import styles from "../../../styles/pages/lectureContent.module.scss";
import useMedia from "../../../hooks/useMedia";
import { useQuery, useMutation } from "react-query";
import { instance } from "../../../instance/instance";
import { applyLecture, getLectureDetail } from "../../../util/api/lecture";

function LectureContent() {
  const router = useRouter();
  const id = router.query.lectureId;

  const { data } = useQuery(`lecture/${id}`, () =>
    getLectureDetail(router, id)
  );
  // const isMobile = useMedia("(min-width: 1188px)");
  console.log(data);
  // console.log(isMobile);
  const applyMutation = useMutation(() => applyLecture(data?.data.id));
  return (
    <div className="background">
      <Head>
        <title>{data?.data.title}</title>
      </Head>
      <Header />
      <Title>{data?.data.title}</Title>
      <div className={styles.lecture}>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>일시</LectureLabel>
          <span className={styles.item}>{data?.data.date}</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>접수 기간</LectureLabel>
          <span className={styles.item}>~{data?.data.period}</span>
        </div>
        <div className={styles.lecture_info}>
          <LectureLabel>장소</LectureLabel>
          <span className={styles.item}>{data?.data.place}</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>대상</LectureLabel>
          <span className={styles.item}>{data?.data.target}</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>강사</LectureLabel>
          <span className={styles.item}>{data?.data.teacher}</span>
        </div>
        {/* <div className={styles.lecture_info_inline}>
          <LectureLabel>당첨자 발표</LectureLabel>
          <span className={styles.item}>2022.12.15</span>
        </div> */}
        <hr />
      </div>
      <div className={styles.content}>{data?.data.content}</div>
      <div className={styles.lecture}>
        <button
          className={styles.button}
          onClick={() => {
            applyMutation.mutate();
          }}
        >
          신청하기
        </button>
      </div>
    </div>
  );
}

export default withRouter(LectureContent);
