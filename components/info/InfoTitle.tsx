import React from "react";
import styles from "../../styles/components/info/infoTitle.module.scss";
import { BsTrashFill, BsPencil } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function InfoTitle({
  children,
  isAdmin,
}: {
  children: string;
  isAdmin: boolean;
}) {
  return (
    <>
      <div className={styles.infoTitle}>
        <h1 className={styles.title}>{children}</h1>
        {isAdmin && (
          <div className={styles.icons}>
            <AiOutlinePlus size={30} color="#73726F" className={styles.icon} />
            <BsPencil size={30} color="#73726F" className={styles.icon} />
            <BsTrashFill size={30} color="#73726F" className={styles.icon} />
          </div>
        )}
      </div>
      <hr className={styles.hr} />
    </>
  );
}

export default InfoTitle;
