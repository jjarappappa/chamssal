import Image from "next/image";
import styles from "../../styles/components/layout/Sidebar.module.scss";
import React from "react";
import { TriangleIcon } from "../icons/TriangleIcon";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
  const router = useRouter();
  console.log(router);
  return (
    <div className={styles.sidebar}>
      <span className={styles.logo}>
        <Link href="/">
          <Image
            alt="로고"
            width={84.34}
            height={53.46}
            src="/images/logo.png"
          />
        </Link>
      </span>
      <span className={styles.admin}>admin</span>
      <div className={styles.nickname}>
        <div className={styles.item}>
          <FaUser color="#73726F" size={16} />
          <span className={styles.text}>박라희 님</span>
        </div>
      </div>
      <div className={styles.items}>
        <div>
          <span className={styles.item_title}>기본</span>
          <Link href="/admin/banner">
            <div
              className={styles.item}
              style={{
                backgroundColor:
                  router.pathname === "/admin/banner" ? "#F1F1F1" : "#FFF",
              }}
            >
              <TriangleIcon />
              <span className={styles.text}>메인 배너 등록</span>
            </div>
          </Link>
        </div>
        <div>
          <span className={styles.item_title}>임신육아</span>
          <Link href="/admin/info/pregnancy">
            <div
              className={styles.item}
              style={{
                backgroundColor:
                  router.pathname === "/admin/info/pregnancy" ? "#F1F1F1" : "#FFF",
              }}
            >
              <TriangleIcon />
              <span className={styles.text}>임신/출산 정보</span>
            </div>
          </Link>
          <Link href="/admin/info/parenting">
            <div
              className={styles.item}
              style={{
                backgroundColor:
                  router.pathname === "/admin/info/parenting" ? "#F1F1F1" : "#FFF",
              }}
            >
              <TriangleIcon />
              <span className={styles.text}>육아 정보</span>
            </div>
          </Link>
        </div>
        <div>
          <span className={styles.item_title}>동영상 강좌</span>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>등록</span>
          </div>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>동영상 강좌 정보</span>
          </div>
        </div>
        <div>
          <span className={styles.item_title}>강의</span>
          <Link href = "/admin/classregist">
            <div className={styles.item}
              style={{
                backgroundColor:
                  router.pathname === "/admin/classregist" ? "#F1F1F1" : "#FFF",
              }}
            >
              <TriangleIcon />
              <span className={styles.text}>등록</span>
            </div>
          </Link>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>신청자 정보</span>
          </div>
        </div>
        <div>
          <span className={styles.item_title}>커뮤니티</span>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>이벤트</span>
          </div>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>당첨자 발표</span>
          </div>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>자주 묻는 질문</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
