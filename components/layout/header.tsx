import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/images/logo.png"
          alt="로고"
          width={94.89}
          height={53.46}
          className={styles.logo}
        />
      </Link>
      <ul className={styles.ul}>
        <li>임신육아</li>
        <li>동영상 강좌</li>
        <li>강의 신청</li>
        <li>용품 구매</li>
        <li>커뮤니티</li>
      </ul>
      <button className={styles.login}>
        로그인
      </button>
    </header>
  );
}

export default Header;
