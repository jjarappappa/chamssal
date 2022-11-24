import React from "react";
import styles from "../../styles/components/info/infoTitle.module.scss";

function InfoTitle({ children }: { children: string }) {
  return (
    <>
      <h1 className={styles.title}>{children}</h1>
      <hr className={styles.hr} />
    </>
  );
}

export default InfoTitle;
