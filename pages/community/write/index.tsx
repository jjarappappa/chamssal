import { NextPage } from "next";
import Header from "../../../components/layout/header";
import { useRouter } from "next/router";
import styles from "../../../styles/pages/write.module.scss";
import Title from "../../../components/layout/title";
import { createFeed } from "../../../util/api/community";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRef,useState } from "react";
import { writeType } from "../../../types/community/writeType";

const Write: NextPage = () => {

	const router = useRouter();

    const {mutate} = useMutation( createFeed,{
        onSuccess: () => {
            alert('게시글을 업로드 했습니다.')
            router.push('/community/classreview')
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
            <div className={styles.Write_tit}>
                <Header />
                <div className={styles.Write_div}>
                    <div className={styles.Write_tit_div}>
                        <div className={styles.Write_titletype}>
                            <Title>강의 후기</Title>
                        </div>
                        <div className={styles.Write_top}>
                            <input placeholder="제목 입력" name="title" value={request?.title} onChange={handleChange}/>
                        </div>
                        <div className={styles.Write_bottom}>
                            <textarea placeholder="내용 입력" name="content" value={request?.content} onChange={handleChange} />
                        </div>
                        <div className={styles.Write_button}>
                            <button onClick={(() => mutate({
                                ...request,
                                type: "HUGIER"
                                }))}>
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
