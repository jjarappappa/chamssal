import { NextPage } from "next";
import Information from "../../components/community/Information";
import ReviewData from './reviewd.json';
import Header from "../../components/layout/header";
const Review: NextPage = () => {

    return (
        <div>
        <Header />
            <div>
                <div><p>강의 후기</p></div>
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
    )
}
export default Review;