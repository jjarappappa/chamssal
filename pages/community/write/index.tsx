import { NextPage } from "next";
import Header from "../../../components/layout/header";
import { useRouter } from "next/router";
import styles from "../../../styles/pages/write.module.scss";
import Title from "../../../components/layout/title";
const Write: NextPage = () => {
    const router = useRouter();
    const { type } = router.query;

    return (
        <>
            <div className={styles.Write_tit}>
                <Header />
                <div className={styles.Write_div}>
                    <div className={styles.Write_tit_div}>
                        <div className={styles.Write_titletype}>
                            <Title>강의 후기</Title>
                        </div>
                        <div className={styles.Write_top}>
                            <input placeholder="제목 입력" />
                        </div>
                        <div className={styles.Write_bottom}>
                            <textarea placeholder="내용 입력" />
                        </div>
                        <div className={styles.Write_button}>
                            <button>
                                작성 완료
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Write;
