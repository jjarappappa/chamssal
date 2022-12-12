import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "../../styles/components/layout/header.module.scss";
import { AiOutlineMenu } from "react-icons/ai";
import useMedia from "../../hooks/useMedia";
import { useRecoilState } from "recoil";
import { isOpenMenuState } from "../../store/layout/isOpenMenuAtom";
import { useRouter } from "next/router";
import { ListItem, List, Divider, ListItemText } from "@mui/material";

function Header() {
  const isMobile = useMedia("(min-width: 1200px)");
  const [isOpenMenu, setIsOpenMenu] = useRecoilState(isOpenMenuState);
  const [isOpenCommunityMenu, setIsOpenCommunityMenu] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setIsOpenMenu(false);
    setIsOpenCommunityMenu(false);
    document.body.style.overflow = "unset";
  }, [isMobile, setIsOpenMenu]);



  return (
    <>
      {isMobile === 1 ? (
        <>
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
              <li
                onMouseOver={() => setIsOpenCommunityMenu(true)}
                onMouseLeave={() => setIsOpenCommunityMenu(false)}
                style={{ position: "relative" }}
              >
                커뮤니티
                {isOpenCommunityMenu && (
                  <>
                    <div
                      className={styles.triangle}
                      onMouseOver={() => setIsOpenCommunityMenu(true)}
                      onMouseLeave={() => setIsOpenCommunityMenu(false)}
                    ></div>
                    <List
                      sx={{
                        width: "150px",
                        position: "absolute",
                        left: "50%",
                        transform: "translate(-50%,0)",
                        top: "74.8px",
                        zIndex: "200",
                        backgroundColor: "#F6F7F8",
                        borderRadius: "10px",
                        display: "block",
                      }}
                      onMouseOver={() => setIsOpenCommunityMenu(true)}
                      onMouseLeave={() => setIsOpenCommunityMenu(false)}
                      component="nav"
                      aria-label="mailbox folders"
                    >
                      <Link href='/community/eventtime'>
                        <ListItem button sx={{ textAlign: "center" }}>
                          <ListItemText primary="이벤트" />
                        </ListItem>
                      </Link>
                      <Divider light />

                      <Link href='/community/winner'>
                        <ListItem button sx={{ textAlign: "center" }}>
                          <ListItemText primary="당첨자 발표" />
                        </ListItem>
                      </Link>
                      <Divider light />
                      <Link href='/community/classreview'>
                        <ListItem button sx={{ textAlign: "center" }}>
                          <ListItemText primary="강의 후기" />
                        </ListItem>
                      </Link>
                      <Divider light />
                      <Link href='/community/question'>
                        <ListItem button sx={{ textAlign: "center" }}>
                          <ListItemText primary="자주 묻는 질문" />
                        </ListItem>
                      </Link>
                      <Divider light />
                        <ListItem button sx={{ textAlign: "center" }}>
                          <ListItemText primary="제휴 문의" />
                        </ListItem>
                    </List>
                  </>
                )}
              </li>
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
          <></>
        </>
      ) : isMobile === -1 ? (
        <header className={styles.mobile_header}>
          <AiOutlineMenu
            size={40}
            className={styles.menu}
            onClick={() => {
              setIsOpenMenu((prev) => !prev);
              !isOpenMenu
                ? (document.body.style.overflow = "hidden")
                : (document.body.style.overflow = "unset");
            }}
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
            <div className={styles.dropdown_item}>
              용품 구매
              {isOpenCommunityMenu && (
                <>
                  <div className={styles.dropdown_item_short}>이벤트</div>
                  <div className={styles.dropdown_item_short}>당첨자 발표</div>
                  <div className={styles.dropdown_item_short}>강의 후기</div>
                  <div className={styles.dropdown_item_short}>
                    자주 묻는 질문
                  </div>
                  <div className={styles.dropdown_item_short}>제휴문의</div>
                </>
              )}
            </div>
            <div
              className={styles.dropdown_item}
              onClick={() => setIsOpenCommunityMenu((prev) => !prev)}
            >
              커뮤니티
            </div>
            <Link href="/login">
              <div
                className={styles.dropdown_item}
                style={{ marginTop: isOpenCommunityMenu ? "200px" : "0" }}
              >
                로그인
              </div>
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
    </>
  );
}

export default Header;
