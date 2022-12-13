import { NextPage } from "next";
import Information from "../../../components/Information/community";
import Header from "../../../components/layout/header";
import styles from "../../../styles/pages/community.module.scss";
import Title from "../../../components/layout/title";
import {useEffect, useState} from "react";
import { getCommunity } from "../../../util/api/community";
import { useQuery, useQueryClient } from "react-query";
const Review:NextPage = () => {
  const {data} = useQuery('getCommunity', () => getCommunity("EVENT"));

  useEffect(() => {
    //console.log(communityQuery);
  }, []);
  
  return (
    <div className={styles.reviewall}>
      <Header />
      <div className={styles.reviewgang}>
        <div>
          <Title>이벤트</Title>
          <div className={styles.reviewItem}>
            {data?.feedList?.map((f) => (
              <Information
                title={f.title}
                name={f.username}
                day={f.createdAt}
                id={f.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;