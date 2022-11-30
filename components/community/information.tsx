import styles from '../../styles/components/community/information.module.scss';
export default function Information(props: {
    day: string,
    title: string,
    name: string
}) {
    return (
        <div className={styles.reviewtit}>
            <div className={styles.reviewinformation}>
                <div className={styles.reviewinfo}>
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