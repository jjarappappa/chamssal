import { NextPage } from "next";
import Header from "../../../components/layout/header";
import styles from "../../../styles/pages/detail.module.scss";
import Title from "../../../components/layout/title";
import {useEffect, useState} from "react";
import { getFeed } from "../../../util/api/community";
import { useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";

const Detail: NextPage = () => {

  const {data} = useQuery('getFeed', () => getFeed(id));
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <div>
        <div className={styles.Detailbody}>
          <div className={styles.Detailtit}>
            <div className={styles.Detaildetail}>
              <div className={styles.Detailtop}>
                {/* <div className={styles.Detailtitle}>{CData.title}</div> */}
                <Title>{data?.title}</Title>
                <div className={styles.Detailright}>
                  <span className={styles.Detailname}>{data?.user?.name}</span>
                  <span className={styles.Detailbirth}>
                    {data?.user?.birthday}
                  </span>
                </div>
              </div>
              <p className={styles.Detailbottom}>{data?.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
