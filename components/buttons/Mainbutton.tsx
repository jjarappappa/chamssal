import { useRecoilState } from "recoil";
import join from "../../public/images/join.png";
import styles from '../../styles/components/buttons/mainbutton.module.scss';

import Link from "next/link";
function Mainbutton() {
    return (
        <div className={styles.Mainbuttonmain}>
            <Link href="">
                <button className={styles.joinbutton} id={styles.button}>
                    <div>
                        <img src="/images/join.svg" />
                    </div>
                    <span>신청하기</span>
                </button>
            </Link>
            <Link href="">
                <button className={styles.reviewbutton} id={styles.button}>
                    <div>
                        <img src="/images/review.svg" />
                    </div>
                    <span>후기보기</span>
                </button>
            </Link>
            <Link href="">
                <button className={styles.informationbutton} id={styles.button}>
                    <div>
                        <img src="/images/information.svg" />
                    </div>
                    <span>정보보기</span>
                </button>
            </Link>
            <Link href="">
                <button className={styles.eventbutton} id={styles.button}>
                    <div>
                        <img src="/images/event.svg" />
                    </div>
                    <span>이벤트</span>
                </button>
            </Link>
        </div>
    )
}
export default Mainbutton;