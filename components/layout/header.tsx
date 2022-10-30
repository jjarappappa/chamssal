import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "../../styles/header.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import useMedia from "../../hooks/useMedia";
import { useRecoilState } from "recoil";
import { isOpenMenuState } from "../../store/header/isOpenMenuAtom";

function Header() {
  const isMobile = useMedia("(min-width: 1188px)");
  const [isOpenMenu, setIsOpenMenu] = useRecoilState(isOpenMenuState);
  return (
    <div>
      {isMobile ? (
        <header className={styles.header}>
          <Link href="/">
            <span className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="로고"
                width={94.89}
                height={53.46}
              />
            </span>
          </Link>
          <ul className={styles.ul}>
            <li>임신육아</li>
            <li>동영상 강좌</li>
            <li>강의 신청</li>
            <li>용품 구매</li>
            <li>커뮤니티</li>
          </ul>
          <button className={styles.login}>로그인</button>
        </header>
      ) : (
        <header className={styles.mobile_header}>
          <AiOutlineMenu
            size={40}
            className={styles.menu}
            onClick={() => setIsOpenMenu((prev) => !prev)}
          />
          <Link href="/">
            <span className={styles.logo}>
              <Image
                src="/images/logo.png"
                alt="로고"
                width={83.42}
                height={47}
              />
            </span>
          </Link>
        </header>
      )}
      <>
        {!isMobile && isOpenMenu && (
          <>
            <div className={styles.dropdown_item}>임신육아</div>
            <div className={styles.dropdown_item}>동영상 강좌</div>
            <div className={styles.dropdown_item}>강의 신청</div>
            <div className={styles.dropdown_item}>용품 구매</div>
            <div className={styles.dropdown_item}>커뮤니티</div>
            <div className={styles.dropdown_item}>로그인</div>
          </>
        )}
      </>
    </div>
  );
}

export default Header;
