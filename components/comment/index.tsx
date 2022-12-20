import styles from '../../styles/components/comment/comment.module.scss';
function Comment(props: {
    comment:string,
    id:number,
    nickname: string
}){
    return(
        <div className={styles.commenttit}>
            <div className={styles.commenttitdiv}>
                <div className={styles.comment_name}><span>{props.nickname}</span></div>
                <span className={styles.comment_comment}>{props.comment}</span>
            </div>
        </div>
    )
}
export default Comment;