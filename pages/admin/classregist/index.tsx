import { NextPage } from "next";
import Sidebar from "../../../components/layout/Sidebar";
import AdminTitle from "../../../components/layout/AdminTitle";
import styles from '../../../styles/pages/admin/classregist.module.scss';
const ClassRegist: NextPage = () => {
    return (
        <>
            <Sidebar />
            <div className="background_admin">
                <AdminTitle>강의 등록</AdminTitle>
                <div className={styles.regist_total}>
                    <p className={styles.regist_minip}>
                        <input placeholder="제목" className={styles.regist_title} />
                    </p>
                    <div className={styles.minititle}>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>일시</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <span className={styles.inputall}>
                                    <input className={styles.widthmini} /><span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini} /><span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini} />
                                </span>
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>장소</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <input className={styles.longinput}/>
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>대상</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <input  className={styles.longinput}/>
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>강사</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <input  className={styles.longinput}/>
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>접수기간</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <span className={styles.inputall}>
                                    <input className={styles.widthmini} /><span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini} /><span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini} />
                                </span>
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>당첨자 발표</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <span className={styles.inputall}>
                                    <input className={styles.widthmini} /><span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini} /><span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.regist_minip}>
                        <button>+ 이미지 추가</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClassRegist;