import Image from "next/image";
import React from "react";
import styles from "../../styles/components/lecture/lectureitem.module.scss";

function LectureItem({ data }: { data: any }) {
  return (
    <div className={styles.lecture}>
      <div className={styles.img}>
        <Image
          src={"/images/logo.png"}
          alt="강의 사진"
          sizes="100vw"
          layout="fill"
        />
      </div>
      <div className={styles.items}>
        <span>지역</span>
        <h3>제목</h3>
        <div>
          <span>0000-00-00</span>
          <span>D-33</span>
        </div>
      </div>
    </div>
  );
}

export default LectureItem;
