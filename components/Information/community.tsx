import styles from "../../styles/components/information/community.module.scss";


export default function Information(props: {
    day: string,
    title: string,
    name: string
}) {
    return (
        <div className={styles.comutit}>
            <div className={styles.comuinformation}>
                <div className={styles.comuinfo}>
                    <span className={styles.leftspan}>
                        <span>{props.title}</span>
                    </span>
                    <span className={styles.rightspan}>
                        <span className={styles.name}>{props.name}</span>
                        <span className={styles.day}>{props.day}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}