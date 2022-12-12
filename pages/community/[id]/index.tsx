import { NextPage } from "next";
import Header from "../../../components/layout/header";
import CData from "../sanse.json";
import styles from "../../../styles/pages/detail.module.scss";
import Title from "../../../components/layout/title";
const Detail: NextPage = () => {
  return (
    <>
      <Header />
      <div className="background">
        <div className={styles.Detailbody}>
          <div className={styles.Detailtit}>
            <div className={styles.Detaildetail}>
              <div className={styles.Detailtop}>
                {/* <div className={styles.Detailtitle}>{CData.title}</div> */}
                <Title>{CData.title}</Title>
                <div className={styles.Detailright}>
                  <span className={styles.Detailname}>{CData.user.name}</span>
                  <span className={styles.Detailbirth}>
                    {CData.user.birthday}
                  </span>
                </div>
              </div>
              <p className={styles.Detailbottom}>{CData.content}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;
