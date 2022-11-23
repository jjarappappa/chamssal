import React from "react";
import styles from "../../styles/components/lecture/lectureLabel.module.scss";

function LectureLabel({ children }: { children: string }) {
  return <span className={styles.name}>{children}</span>;
}

export default LectureLabel;
