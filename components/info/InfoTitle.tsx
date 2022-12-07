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
      <h1 className={styles.title}>{children}</h1>
      {isAdmin && <></>}
      <hr className={styles.hr} />
    </>
  );
}

export default InfoTitle;
