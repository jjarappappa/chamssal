import React from "react";
import Sidebar from "../../../components/layout/Sidebar";
import AdminTitle from "../../../components/layout/AdminTitle";
import styles from "../../../styles/pages/admin/info.module.scss";
import InfoTitle from "../../../components/info/InfoTitle";

function Pragnancy() {
  return (
    <>
      <Sidebar />
      <div className="background_admin">
        <AdminTitle>임신/출산 정보</AdminTitle>
        <InfoTitle isAdmin>임신 초기</InfoTitle>
      </div>
    </>
  );
}

export default Pragnancy;
