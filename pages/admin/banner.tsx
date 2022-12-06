import React from "react";
import Sidebar from "../../components/layout/Sidebar";
import AdminTitle from "../../components/layout/AdminTitle";
import { FaPlus } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import styles from "../../styles/pages/admin/home.module.scss";

function Banner() {
  return (
    <>
      <Sidebar />
      <div className="background_admin">
        <AdminTitle>메인 배너 등록</AdminTitle>
        <div className={styles.banners}>
          <div className={styles.banner}>
            <FaPlus size={40} color="#73726F" className={styles.plus} />
          </div>
          <div className={styles.banner}>
            <FiPlus size={24} color="#A3A29E" className={styles.delete} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
