import React from "react";
import InfoTitle from "../../../components/info/InfoTitle";
import styles from "../../../styles/components/info/infoMode.module.scss";
import InfoItem from "../InfoItem";

function Parenting() {
  return (
    <div className={styles.mode}>
      <div className={styles.period}>
        <InfoTitle isAdmin={false}>생후 1개월</InfoTitle>
        <div className={styles.item}>
          <InfoItem title={"제목1"} isAdmin={false}>
            내용1
          </InfoItem>
          <InfoItem title={"제목2"} isAdmin={false}>
            내용2
          </InfoItem>
          <InfoItem title={"제목3"} isAdmin={false}>
            내용3
          </InfoItem>
        </div>
      </div>
      <div className={styles.period}>
        <InfoTitle isAdmin={false}>생후 2~3개월</InfoTitle>
        <div className={styles.item}>
          <InfoItem title={"제목1"} isAdmin={false}>
            내용1
          </InfoItem>
          <InfoItem title={"제목2"} isAdmin={false}>
            내용2
          </InfoItem>
          <InfoItem title={"제목3"} isAdmin={false}>
            내용3
          </InfoItem>
        </div>
      </div>
    </div>
  );
}

export default Parenting;
