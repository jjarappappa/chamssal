import Image from "next/image";
import React from "react";
import styles from "../../styles/header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Image src="/images/logo.png" alt="로고" width={94.89} height={53.46} />
    </header>
  );
}

export default Header;
