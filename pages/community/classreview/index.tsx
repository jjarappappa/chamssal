import { NextPage } from "next";
import Information from "../../../components/Information/community";
import Header from "../../../components/layout/header";
import styles from "../../../styles/pages/community.module.scss";
import Title from "../../../components/layout/title";
import {useEffect, useState} from "react";
import { getCommunity } from "../../../util/api/community";
import { useQuery, useQueryClient } from "react-query";
const Review:NextPage = () => {
  const {communityQuery} = useQuery('getCommunity', getCommunity);
  
  useEffect(() => {
    console.log(communityQuery);
  }, []);
  
  return (
    <div className={styles.reviewall}>
      <Header />
      <div className={styles.reviewgang}>
        <div>
          <Title>강의 후기</Title>
          <div className={styles.reviewItem}>
            {communityQuery.feedList.map((d) => (
              <Information
                title={d.title}
                name={d.username}
                day={d.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;