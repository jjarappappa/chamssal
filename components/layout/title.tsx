import React from "react";
import styles from "../../styles/components/layout/title.module.scss";

function Title({ children }: { children: string }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default Title;
