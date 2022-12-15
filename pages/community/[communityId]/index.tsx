import { NextPage } from "next";
import Header from "../../../components/layout/header";
import styles from "../../../styles/pages/detail.module.scss";
import Title from "../../../components/layout/title";
import { useState, useContext, useEffect } from "react";
import { getFeed } from "../../../util/api/community";
import { useQuery, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { IoMdSend } from "react-icons/io";
import Comment from "../../../components/comment";
import { useMutation } from "react-query";
import { useForm } from "react-hook-form";
import { createComments } from "../../../util/api/community";
import { commentType } from "../../../types/community/commentType";
const Detail: NextPage = () => {

  const { data } = useQuery('getFeed', () => getFeed(id));


  const router = useRouter();
  const { id } = router.query;

  console.log(id)

  const {mutate} = useMutation( createComments, {
    onSuccess: () => {
        alert('댓글 작성 완료')
    }
})


const [request, setRequest] = useState<commentType | null> (null)
    

const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
  setRequest({
      ...request,
      [e.target.name]: e.target.value,
  })
}


  return (
    <>
      <Header />
      <div>
        <div className={styles.Detailbody}>
          <div className={styles.Detailtit}>
            <div className={styles.Detaildetail}>
              <div className={styles.Detailtop}>
                {/* <div className={styles.Detailtitle}>{CData.title}</div> */}
                <Title>{data?.title}</Title>
                <div className={styles.Detailright}>
                  <span className={styles.Detailname}>{data?.user?.name}</span>
                  <span className={styles.Detailbirth}>
                    {data?.user?.birthday}
                  </span>
                </div>
              </div>
              <p className={styles.Detailbottom}>
                {data?.content}
              </p>
              <div>
                <div className={styles.commentswrite}>
                  <input placeholder="댓글 작성" name="comment" value={request?.comment} onChange={handleChange}/>
                  <button onClick={(() => mutate({
                    ...request, 
                  }))}><span><IoMdSend /></span></button>
                </div>
                <div className={styles.comments}>
                  {
                    data?.commentList?.commentList?.map((c) => (
                      <Comment
                        comment={c.comment}
                        id={c.id}
                        nickname={c.user.nickname}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Detail;