import React from "react";
import Sidebar from "../../../components/layout/Sidebar";
import AdminTitle from "../../../components/layout/AdminTitle";
import styles from "../../../styles/pages/admin/info.module.scss";
import InfoTitle from "../../../components/info/InfoTitle";
import InfoItem from "../../../components/info/InfoItem";

function Pragnancy() {
  return (
    <>
      <Sidebar />
      <div className="background_admin">
        <AdminTitle>임신/출산 정보</AdminTitle>
        <div className={styles.period}>
          <InfoTitle isAdmin>임신 초기</InfoTitle>
          <div className={styles.item}>
            <InfoItem title={"제목1"} isAdmin>
              내용1
            </InfoItem>
            <InfoItem title={"제목2"} isAdmin>
              내용2
            </InfoItem>
            <InfoItem title={"제목3"} isAdmin>
              내용3
            </InfoItem>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pragnancy;
