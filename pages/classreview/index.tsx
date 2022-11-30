import { NextPage } from "next";
import Information from "../../components/community/Information";
import ReviewData from './review.json';
import Header from "../../components/layout/header";
import styles from '../../styles/pages/review.module.scss';
const Review: NextPage = () => {

    return (
        <div className={styles.reviewall}>
            <Header />
            <div className={styles.reviewgang}>
                <div>
                    <div className={styles.reviewtxt}><p>강의 후기</p></div>
                    <div>
                        {
                            ReviewData.data.map(r => (
                                <Information
                                    title={r.title}
                                    name={r.userName}
                                    day={r.createdAt}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review;
