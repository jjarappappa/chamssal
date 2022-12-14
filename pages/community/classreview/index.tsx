import { NextPage } from "next";
import Information from "../../../components/Information/community";
import Header from "../../../components/layout/header";
import styles from "../../../styles/pages/community.module.scss";
import Title from "../../../components/layout/title";
import {useEffect, useState} from "react";
import { getCommunity } from "../../../util/api/community";
import { useQuery, useQueryClient } from "react-query";
import { ImPencil } from "react-icons/im";
import Link from "next/link";
const Review:NextPage = () => {
  const {data} = useQuery('getCommunity', () => getCommunity("HUGIER"));


  useEffect(() => {
    //console.log(communityQuery);
  }, []);
  
  return (
    <div className={styles.reviewall}>
      <Header />
      <div className={styles.reviewgang}>
        <div>
          <Title>강의 후기</Title>
          <div className={styles.write}>
          <Link href={{pathname: '/community/write', query: {type : JSON.stringify("HUGIER")},}}>
              <span className={styles.write_span}>
                <span className={styles.write_span_span}>글쓰기</span>
                <span className={styles.write_span_pencil}><ImPencil/></span>
              </span>
            </Link>
          </div>
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