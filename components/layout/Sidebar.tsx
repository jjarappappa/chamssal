import Image from "next/image";
import styles from "../../styles/components/layout/Sidebar.module.scss";
import PersonIcon from "@mui/icons-material/Person";
import React from "react";
import { TriangleIcon } from "../icons/TriangleIcon";
import { FaUser } from "react-icons/fa";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <span>
        <Image alt="로고" width={84.34} height={53.46} src="/images/logo.png" />
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
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>메인 배너 등록</span>
          </div>
        </div>
        <div>
          <span className={styles.item_title}>임신육아</span>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>임신/출산 정보</span>
          </div>
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>육아 정보</span>
          </div>
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
          <div className={styles.item}>
            <TriangleIcon />
            <span className={styles.text}>등록</span>
          </div>
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
