import { NextPage } from "next";
import Information from "../../components/Information/community";
import ReviewData from "./reviewd.json";
import Header from "../../components/layout/header";
import styles from "../../styles/pages/review.module.scss";
import Link from "next/link";
import Title from "../../components/layout/title";
const Review: NextPage = () => {
  return (
    <div className={styles.reviewall}>
      <Header />
      <div className={styles.reviewgang}>
        <div>
          <Title>강의 후기</Title>
          <div className={styles.reviewItem}>
            {ReviewData.data.map((r) => (
              <Information
                title={r.title}
                name={r.userName}
                day={r.createdAt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
