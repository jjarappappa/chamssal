import Head from "next/head";
import React, { useEffect, useState } from "react";
import AdminTitle from "../../../../components/layout/AdminTitle";
import Sidebar from "../../../../components/layout/Sidebar";
import { useQueries, useQuery, useQueryClient } from "react-query";
import {
  getLectureApplicantList,
  getLectureList,
} from "../../../../util/api/lecture";
import {
  applicantType,
  lectureType,
} from "../../../../types/lecture/lectureType";
import LectureApplicant from "../../../../components/lecture/LectureApplicant";
import styles from "../../../../styles/pages/admin/lectureApplicant.module.scss";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function Applicant() {
  const queryClient = useQueryClient();
  const [lectureId, setLectureId] = useState("0");
  const lectureListResult = useQuery("lectureList", () => getLectureList(), {
    enabled: lectureId === "0",
  });

  // useEffect(() => {
  //   if (lectureListResult.isSuccess) {
  //     setLectureId(lectureListResult.data.data.lectureList[0].id);
  //   }
  // }, []);

  const lectureApplicantResult = useQuery(
    `lecture/${lectureId}`,
    () => getLectureApplicantList(lectureId),
    { enabled: lectureId !== "0" }
  );

  console.log(lectureApplicantResult);

  console.log(lectureId);
  return (
    <>
      <Head>
        <title>강의 신청자 정보 조회</title>
      </Head>
      <Sidebar />
      <div className="background_admin">
        <AdminTitle>강의 신청자 정보 조회</AdminTitle>
        <FormControl
          sx={{
            display: "block",
            marginRight: "0",
            marginLeft: "calc(100% - 200px)",
            backgroundColor: "white",
          }}
        >
          <InputLabel id="demo-simple-select-label">강의</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lectureId}
            label="강의"
            onChange={(e) => setLectureId(e.target.value)}
            sx={{
              width: "200px",
              height: "60px",
              fontSize: "16px",
              borderRadius: "10px",
            }}
          >
            {lectureListResult.data?.data.lectureList.map(
              (item: lectureType) => {
                return (
                  <MenuItem value={item.id} key={item.id}>
                    {item.title}
                  </MenuItem>
                );
              }
            )}
          </Select>
        </FormControl>
        <div className={styles.applicantList}>
          {lectureId === "0" ? (
            <h1>강의를 선택하세요!</h1>
          ) : lectureApplicantResult.data?.data.userList.length ? (
            lectureApplicantResult.data?.data.userList.map(
              (item: applicantType, index: number) => {
                return <LectureApplicant key={index} data={item} />;
              }
            )
          ) : (
            <h1>이 강의에는 신청자가 없습니다!!!!!!!!</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default Applicant;
