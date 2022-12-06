import React from "react";
import styles from "../../styles/components/layout/AdminTitle.module.scss";

function AdminTitle({ children }: { children: string }) {
  return <h1 className={styles.title}>{children}</h1>;
}

export default AdminTitle;
