import {NextPage} from "next";
import Sidebar from "../../../components/layout/Sidebar";
import AdminTitle from "../../../components/layout/AdminTitle";
import styles from '../../../styles/pages/admin/classregist.module.scss';
import React, {ChangeEvent, useState} from 'react';
import {MdDelete} from "react-icons/md";
import {CreateLectureRequestTemp} from "../../../types/lecture/CreateLectureRequest";
import {useMutation} from "react-query";
import {createLecture} from "../../../util/api/lecture";

const ClassRegist: NextPage = () => {
    const [request, setRequest] = useState<CreateLectureRequestTemp | null>(null)
    const [fileImage, setFileImage] = useState("");
    const saveFileImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @ts-ignore
        setFileImage(URL.createObjectURL(event.target.files[0]));
    };
    const deleteFileImage = () => {
        URL.revokeObjectURL(fileImage);
        setFileImage("");
    };

    const {mutate} = useMutation(createLecture, {
        onSuccess: () => {
            alert('성공')
            setRequest(null)
        }
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <>
            <Sidebar/>
            <div className="background_admin">
                <AdminTitle>강의 등록</AdminTitle>
                <div className={styles.regist_total}>
                    <p className={styles.regist_minip}>
                        <input placeholder="제목" className={styles.regist_title}
                               value={request?.title} onChange={handleChange} name="title"/>
                    </p>
                    <div className={styles.minititle_one}>
                        <div className={styles.minititle_name}>
                            <span>내용</span>
                        </div>
                        <div className={styles.minititle_input}>
                            <input className={styles.longinput}
                                   value={request?.content} onChange={handleChange} name="content"
                            />
                        </div>
                    </div>
                    <div className={styles.minititle}>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>일시</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <span className={styles.inputall}>
                                    <input className={styles.widthmini}
                                           value={request?.dateYear} onChange={handleChange} name="dateYear"
                                    />
                                    <span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini}
                                           value={request?.dateMonth} onChange={handleChange} name="dateMonth"
                                    />
                                    <span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini}
                                           value={request?.dateDay} onChange={handleChange} name="dateDay"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>장소</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <input className={styles.longinput}
                                       value={request?.place} onChange={handleChange} name="place"
                                />
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>대상</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <input className={styles.longinput}
                                       value={request?.target} onChange={handleChange} name="target"
                                />
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>강사</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <input className={styles.longinput}
                                       value={request?.teacher} onChange={handleChange} name="teacher"
                                />
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>접수기간</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <span className={styles.inputall}>
                                    <input className={styles.widthmini}
                                           value={request?.periodYear} onChange={handleChange} name="periodYear"
                                    />
                                    <span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini}
                                           value={request?.periodMonth} onChange={handleChange} name="periodMonth"
                                    />
                                    <span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini}
                                           value={request?.periodDay} onChange={handleChange} name="periodDay"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className={styles.minititle_one}>
                            <div className={styles.minititle_name}>
                                <span>당첨자 발표</span>
                            </div>
                            <div className={styles.minititle_input}>
                                <span className={styles.inputall}>
                                    <input className={styles.widthmini}
                                           value={request?.luckyDateYear} onChange={handleChange} name="luckyDateYear"
                                    /><span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini}
                                           value={request?.luckyDateMonth} onChange={handleChange} name="luckyDateMonth"
                                    />
                                    <span className={styles.mulgyel}>~</span>
                                    <input className={styles.widthmini}
                                           value={request?.luckyDateDay} onChange={handleChange} name="luckyDateDay"
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.regist_minip}>
                        <input
                            className={styles.regist_mini_input}
                            name="imggeUpload"
                            type="file"
                            accept="image/*"
                            onChange={saveFileImage}
                        />
                        <div>
                            {fileImage && (<img alt="sample" src={fileImage}
                                                style={{margin: "auto"}}/>)}
                        </div>

                        <div className={styles.minidelete}>
                            <button onClick={() => deleteFileImage()} className={styles.deletebutton_mini}><MdDelete/>
                            </button>
                        </div>
                    </div>
                    <div className={styles.register_button}>
                        <button
                            onClick={() => mutate({
                                ...request,
                                date: request?.dateYear + '-' + request?.dateMonth + '-' + request?.dateDay,
                                luckyDate: request?.luckyDateYear + '-' + request?.luckyDateMonth + '-' + request?.luckyDateDay,
                                period: request?.periodYear + '-' + request?.periodMonth + '-' + request?.periodDay
                            })}
                        >강의 등록 하기
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClassRegist;
