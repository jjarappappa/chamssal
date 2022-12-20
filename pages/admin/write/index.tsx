import React, {useState} from "react";
import Sidebar from "../../../components/layout/Sidebar";
import Head from "next/head";
import AdminTitle from "../../../components/layout/AdminTitle";
import {useRouter} from "next/router";
import styles from "../../../styles/pages/admin/write.module.scss";
import {createFeed} from "../../../util/api/community";
import {useMutation} from "react-query";
import {writeType} from "../../../types/community/writeType";

function Pregnancy() {

    const router = useRouter();
    const {type}: any = router.query;
    console.log(type)

    const {mutate} = useMutation(createFeed, {
        onSuccess: () => {
            alert('게시글을 업로드 했습니다.')

        }

    })


    const [request, setRequest] = useState<writeType | null>(null)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <>
            <Head>
                <title>게시글 등록</title>
            </Head>
            <Sidebar/>
            <div className="background_admin">
                {
                    type === "EVENT" ?
                        <AdminTitle>이벤트</AdminTitle>
                        : type === "DANGCHEOMER" ?
                            <AdminTitle>당첨자 발표</AdminTitle>
                            :
                            <AdminTitle>자주 묻는 질문</AdminTitle>
                }
                <div className={styles.Write_div}>
                    <div className={styles.Write_tit_div}>
                        <div className={styles.Write_top}>
                            <input placeholder="제목 입력" name="title" value={request?.title} onChange={handleChange}/>
                        </div>
                        <div className={styles.Write_bottom}>
                            <textarea placeholder="내용 입력" name="content" value={request?.content}
                                      onChange={handleChange}/>
                        </div>
                        <div className={styles.Write_button}>
                            <button onClick={(() => mutate({
                                ...request,
                                type: type // type 넘겨줌
                            }))}>
                                작성 완료
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pregnancy;
