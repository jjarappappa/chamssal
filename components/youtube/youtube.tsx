import styles from "../../styles/components/youtube/youtube.module.scss";
import Youtubemap from "./youtubemap";
import YoutubeData from "./youtube.json";

function Youtube() {
  return (
    <>
      <div className={styles.youtubeall}>
        <div className={styles.youtubement}>
          <span>📺 동영상 강좌를 확인해보세요!</span>
        </div>
        <div className={styles.youtubetit}>
          {YoutubeData.youtubeList.map((y) => (
            <Youtubemap
              id={y.id}
              thumbnailUrl={y.thumbnailUrl}
              title={y.title}
              url={y.url}
              key={y.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Youtube;
