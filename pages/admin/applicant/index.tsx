import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import Sidebar from "../../../components/layout/Sidebar";
import AdminTitle from "../../../components/layout/AdminTitle";
// import ApplicantLook from "../../../components/Information/applicantlook";
import ApplicantData from './applicant.json';
const Applicant: NextPage = () => {
    return (
        <>
            <Sidebar />
            <div className="background_admin">
                <AdminTitle>신청자조회</AdminTitle>
                <div>
                    {
                        // ApplicantData.data.map( d => (
                        //     <ApplicantLook
                        //         title = {d.title}
                        //         createday = {d.createdAt}
                        //     />
                        // ))
                    }
                </div>
            </div>
        </>
    )
}
export default Applicant;