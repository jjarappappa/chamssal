import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../../styles/components/lecture/lectureitem.module.scss";

function LectureItem({ data }: { data: any }) {
  return (
    <Link
      href={{
        pathname: `/lecture/[lectureId]`,
        query: { data: JSON.stringify(data) },
      }}
      as={`/lecture/${data.id}`}
    >
      <div className={styles.lecture}>
        <div className={styles.img}>
          <Image
            src={"/images/logo.png"}
            alt="강의 사진"
            sizes="100vw"
            layout="fill"
            // placeholder="blur"
            // blurDataURL="/images/logo.png"
          />
        </div>
        <div className={styles.items}>
          <span className={styles.location}>{data.place}</span>
          <h3 className={styles.title}>{data.title}</h3>
          <div className={styles.bottom}>
            <span className={styles.date}>{data.date}</span>
            <span className={styles.d_day}>D-33</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default LectureItem;
