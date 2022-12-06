import styles from "../../styles/components/information/community.module.scss";


export default function ApplicantLook(props: {
    createday: string,
    title: string
}) {
    return (
        <div className={styles.comutit}>
            <div className={styles.comuinformation}>
                <div className={styles.comuinfo}>
                    <span className={styles.leftspan}>
                        <span>{props.title}</span>
                    </span>
                    <span className={styles.rightspan}>
                        <span className={styles.day}>{props.createday}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}