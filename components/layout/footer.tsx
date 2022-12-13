import styles from '../../styles/components/layout/footer.module.scss';
function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.footer_tit}>
                <div className={styles.footer_top}>
                    <span>(주)아이맘케어 아이맘케어교육원</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer;