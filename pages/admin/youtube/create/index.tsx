import {useMutation} from "react-query";
import {ChangeEvent, useState} from "react";
import Head from "next/head";
import {writeType} from "../../../../types/community/writeType";
import Sidebar from "../../../../components/layout/Sidebar";
import AdminTitle from "../../../../components/layout/AdminTitle";
import styles from "../../../../styles/pages/admin/write.module.scss";
import {createYoutube} from "../../../../util/api/Yotube";

function CreateYoutube() {
    const {mutate} = useMutation(createYoutube, {
        onSuccess: () => {
            alert('유튜브 링크를 업로드 했습니다.')
            setRequest(null)
        }
    })


    const [request, setRequest] = useState<writeType | null>(null)


    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value,
        })
    }


    return (
        <>
            <Head>
                <title>유튜브 등록</title>
            </Head>
            <Sidebar/>
            <div className="background_admin">
                <AdminTitle>유튜브 등록</AdminTitle>
                <div className={styles.Write_div}>
                    <div className={styles.Write_tit_div}>
                        <div className={styles.Write_top}>
                            <input placeholder="제목 입력" name="title" value={request?.title} onChange={handleChange}/>
                        </div>
                        <div className={styles.Write_top}>
                            <input placeholder="링크 입력" name="url" value={request?.content}
                                   onChange={handleChange}/>
                        </div>
                        <div className={styles.Write_button}>
                            <button onClick={(() => mutate(request))}>
                                등록
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateYoutube;
