import { NextPage } from "next";
import Sidebar from "../../../components/layout/Sidebar";
import AdminTitle from "../../../components/layout/AdminTitle";
const ClassRegist: NextPage = () => {
    return(
        <>
            <Sidebar/>
            <div>
                <AdminTitle>강의 등록</AdminTitle>
            </div>
        </>
    )
}
export default ClassRegist;