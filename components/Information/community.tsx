import styles from "../../styles/components/information/community.module.scss";
import Link from "next/link";

export default function Information(props: {
    day: string,
    title: string,
    name: string,
    id:number
}) {
    return (
        <Link href={{pathname: `/community/[id]`, query: {id : props.id},}}
        as={`/community/[id]`} >
        <div className={styles.comutit}>
            <div className={styles.comuinformation}>
                <div className={styles.comuinfo}>
                    <span className={styles.leftspan}>
                        <span>{props.title}</span>
                    </span>
                    <span className={styles.rightspan}>
                        <span className={styles.name}>{props.name}</span>
                        <span className={styles.day}>{props.day.substring(0,10)}</span>
                    </span>
                </div>
            </div>
        </div>
        </Link>
    )
}