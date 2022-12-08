import { NextPage } from "next";
import Sidebar from "../../../components/layout/Sidebar";
import AdminTitle from "../../../components/layout/AdminTitle";
import styles from '../../../styles/pages/admin/classregist.module.scss';
const ClassRegist: NextPage = () => {
    return(
        <>
            <Sidebar/>
            <div className="background_admin">
                <AdminTitle>강의 등록</AdminTitle>
                <div className={styles.regist_total}>
                    <p className={styles.regist_minip}>
                        <input placeholder="제목" className={styles.regist_title}/>
                        </p>  
                    <p className={styles.regist_minip}>
                        <span className={styles.minititle}>일시</span>
                        <input />
                        <input />
                        <input />
                    </p>
                    <p className={styles.regist_minip}>
                        <span className={styles.minititle}>장소</span>
                        <input className={styles.widthmini}/>
                    </p>
                    <p className={styles.regist_minip}>
                        <span className={styles.minititle}>대상</span>
                        <input className={styles.widthmini}/>
                    </p>
                    <p className={styles.regist_minip}>
                        <span className={styles.minititle}>강사</span>
                        <input className={styles.widthmini}/>
                    </p>
                    <p className={styles.regist_minip}>
                        <span className={styles.minititle}>접수기간</span>
                        <input/>
                        <input/>
                        <input/>
                    </p>
                    <p className={styles.regist_minip}>
                        <span className={styles.minititle}>당첨자 발표</span>
                        <input/>
                        <input/>
                        <input/>
                    </p>
                    <p className={styles.regist_minip}>
                        <button>+ 이미지 추가</button>
                    </p>
                </div>
            </div>
        </>
    )
}
export default ClassRegist;