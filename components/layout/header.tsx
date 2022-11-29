import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/components/layout/header.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import useMedia from "../../hooks/useMedia";
import { useRecoilState } from "recoil";
import { isOpenMenuState } from "../../store/layout/isOpenMenuAtom";
import { useRouter } from "next/router";

function Header() {
  const isMobile = useMedia("(min-width: 1188px)");
  const [isOpenMenu, setIsOpenMenu] = useRecoilState(isOpenMenuState);
  const router = useRouter();
  useEffect(() => {
    setIsOpenMenu(false);
  }, [isMobile, setIsOpenMenu]);
  return (
    <div>
      {isMobile === 1 ? (
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
            <Link href="/info">
              <li>임신육아</li>
            </Link>
            <Link href="/youtube">
              <li>동영상 강좌</li>
            </Link>
            <Link href="/lecture">
              <li>강의 신청</li>
            </Link>
            <li>용품 구매</li>
            <li>커뮤니티</li>
          </ul>
          {router.pathname === "/login" ? (
            <Link href="/signup">
              <button className={styles.login}>회원가입</button>
            </Link>
          ) : (
            <Link href="/login">
              <button className={styles.login}>로그인</button>
            </Link>
          )}
        </header>
      ) : isMobile === -1 ? (
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
      ) : (
        <header />
      )}
      <>
        {isMobile === -1 && isOpenMenu && (
          <div className={styles.dropdown}>
            <Link href="/info">
              <div className={styles.dropdown_item}>임신육아</div>
            </Link>
            <Link href="/youtube">
              <div className={styles.dropdown_item}>동영상 강좌</div>
            </Link>
            <Link href="/lecture">
              <div className={styles.dropdown_item}>강의 신청</div>
            </Link>
            <div className={styles.dropdown_item}>용품 구매</div>
            <div className={styles.dropdown_item}>커뮤니티</div>
            <Link href="/login">
              <div className={styles.dropdown_item}>로그인</div>
            </Link>
          </div>
        )}
      </>
      {isMobile === -1 && isOpenMenu && (
        <div
          className={styles.root_open}
          onClick={() => setIsOpenMenu(false)}
        ></div>
      )}
    </div>
  );
}

export default Header;
