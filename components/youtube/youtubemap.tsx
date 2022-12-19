import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/components/youtube/youtubemap.module.scss";
import {YoutubeResponse} from "./YoutubeType";
function Youtubemap(props: YoutubeResponse) {
  return (
    <Link href={props.url}>
      <div className={styles.youtubecomponent}>
        <div className={styles.youtubeimage}>
          <span>
            <Image
              src={props.thumbnailUrl}
              width={500}
              height={300}
              className={styles.thumbnail}
              style={{ borderRadius: 20 }}
            />
          </span>
        </div>
        <div className={styles.youtubetitletit}>
          <span className={styles.youtubetitle}>{props.title}</span>
        </div>
      </div>
    </Link>
  );
}
export default Youtubemap;