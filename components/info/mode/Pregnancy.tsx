import React from "react";
import InfoTitle from "../InfoTitle";
import styles from "../../../styles/components/info/infoMode.module.scss";

function Pregnancy() {
  return (
    <div className={styles.mode}>
      <div className={styles.item}>
        <InfoTitle>임신 초기</InfoTitle>
      </div>
    </div>
  );
}

export default Pregnancy;
