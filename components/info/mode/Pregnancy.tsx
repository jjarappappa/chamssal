import React from "react";
import InfoTitle from "../InfoTitle";
import styles from "../../../styles/components/info/infoMode.module.scss";
import InfoItem from "../InfoItem";

function Pregnancy() {
  return (
    <div className={styles.mode}>
      <div className={styles.period}>
        <InfoTitle>임신 초기</InfoTitle>
        <div className={styles.item}>
          <InfoItem title={"제목1"}>내용1</InfoItem>
          <InfoItem title={"제목2"}>내용2</InfoItem>
          <InfoItem title={"제목3"}>내용3</InfoItem>
        </div>
      </div>
      <div className={styles.period}>
        <InfoTitle>임신 중기</InfoTitle>
        <div className={styles.item}>
          <InfoItem title={"제목1"}>내용1</InfoItem>
          <InfoItem title={"제목2"}>내용2</InfoItem>
          <InfoItem title={"제목3"}>내용3</InfoItem>
        </div>
      </div>
    </div>
  );
}

export default Pregnancy;
