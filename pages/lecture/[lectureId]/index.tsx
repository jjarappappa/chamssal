import React, { useEffect, useState } from "react";
import { useRouter, withRouter } from "next/router";
import Head from "next/head";
import Header from "../../../components/layout/header";
import Title from "../../../components/layout/title";
import LectureLabel from "../../../components/lecture/LectureLabel";
import styles from "../../../styles/pages/lectureContent.module.scss";
import useMedia from "../../../hooks/useMedia";
import { useQuery, useMutation, useQueries } from "react-query";
import { instance } from "../../../instance/instance";
import {
  applyLecture,
  cancelLecture,
  getLectureApplicantList,
  getLectureDetail,
} from "../../../util/api/lecture";
import Tooltip from "@mui/material/Tooltip";
import { snackBarState } from "../../../store/alert/snackBarAtom";
import { useRecoilState } from "recoil";
import { getUserInfo } from "../../../util/api/user";
import { signupType } from "../../../types/auth/signupType";

function LectureContent() {
  const router = useRouter();
  const id = router.query.lectureId;
  const [disabled, setDisabled] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const [snackBar, setSnackBar] = useRecoilState(snackBarState);

  // const { data } = useQuery(`lecture/${id}`, () =>
  //   getLectureDetail(router, id)
  // );

  const query = useQueries([
    { queryKey: ["user"], queryFn: () => getUserInfo() },
    {
      queryKey: ["applicantList"],
      queryFn: () => getLectureApplicantList(id),
      enabled: typeof id !== "undefined",
    },
    {
      queryKey: [`lecture/${id}`],
      queryFn: () => getLectureDetail(id),
      enabled: typeof id !== "undefined",
    },
  ]);

  useEffect(() => {
    if (
      query[0].isSuccess &&
      query[1].isSuccess &&
      query[1].data?.data.userList.some(
        (user: signupType) => user.name === query[0].data?.data.name
      )
    ) {
      setIsJoined(true);
    } else {
      console.log(query);
    }
  }, [query]);
  const applyMutation = useMutation(() => applyLecture(query[2].data?.data.id));
  const cancelMutation = useMutation(() =>
    cancelLecture(query[2].data?.data.id)
  );

  useEffect(() => {
    if (applyMutation.isSuccess) {
      setSnackBar({ isOpen: true, message: "?????? ??????!", severity: "success" });
      setIsJoined(true);
    } else if (applyMutation.isError) {
      setSnackBar({ isOpen: true, message: "?????? ??????!", severity: "error" });
    }
  }, [applyMutation.status]);

  useEffect(() => {
    if (cancelMutation.isSuccess) {
      setSnackBar({ isOpen: true, message: "?????? ??????!", severity: "success" });
      setIsJoined(false);
    } else if (cancelMutation.isError) {
      setSnackBar({ isOpen: true, message: "?????? ??????!", severity: "error" });
    }
  }, [cancelMutation.status]);

  useEffect(() => {
    // console.log(typeof window !== "undefined");
    // console.log(!localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      setDisabled(true);
    }
  }, []);

  return (
    <div className="background">
      <Head>
        <title>{query[2].data?.data.title}</title>
      </Head>
      <Header />
      <Title>{query[2].data?.data.title}</Title>
      <div className={styles.lecture}>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>??????</LectureLabel>
          <span className={styles.item}>{query[2].data?.data.date}</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>?????? ??????</LectureLabel>
          <span className={styles.item}>~{query[2].data?.data.period}</span>
        </div>
        <div className={styles.lecture_info}>
          <LectureLabel>??????</LectureLabel>
          <span className={styles.item}>{query[2].data?.data.place}</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>??????</LectureLabel>
          <span className={styles.item}>{query[2].data?.data.target}</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>??????</LectureLabel>
          <span className={styles.item}>{query[2].data?.data.teacher}</span>
        </div>
        <div className={styles.lecture_info_inline}>
          <LectureLabel>????????? ??????</LectureLabel>
          <span className={styles.item}>{query[2].data?.data.luckyDate}</span>
        </div>
        <hr />
      </div>
      <div className={styles.content}>{query[2].data?.data.content}</div>
      <div className={styles.lecture}>
        {isJoined ? (
          <button
            className={styles.button}
            onClick={() => {
              cancelMutation.mutate();
            }}
            disabled={disabled}
            style={disabled ? { pointerEvents: "none" } : {}}
          >
            ????????????
          </button>
        ) : (
          <Tooltip title={disabled && "????????? ??? ?????? ???????????????."} arrow>
            <span>
              <button
                className={styles.button}
                onClick={() => {
                  applyMutation.mutate();
                }}
                disabled={disabled}
                style={disabled ? { pointerEvents: "none" } : {}}
              >
                ????????????
              </button>
            </span>
          </Tooltip>
        )}
      </div>
    </div>
  );
}

export default withRouter(LectureContent);
