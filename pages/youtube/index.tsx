import React from "react";
import Head from "next/head";
import Header from "../../components/layout/header";
import Youtubemap from "../../components/youtube/youtubemap";
import YoutubeData from "../../components/youtube/youtube.json";
import styles from "../../styles/pages/youtube.module.scss";

function YoutubePage() {
  return (
    <div className="background">
      <Head>
        <title>유튜브 강좌</title>
      </Head>
      <Header />
      {/* <div className={styles.realyoutube}> */}
      <div className={styles.youtube}>
        {YoutubeData.youtubeList.map((y) => (
          <>
            <Youtubemap
              id={y.id}
              thumbnailUrl={y.thumbnailUrl}
              title={y.title}
              url={y.url}
              key={y.id}
            />
            <Youtubemap
              id={y.id}
              thumbnailUrl={y.thumbnailUrl}
              title={y.title}
              url={y.url}
              key={y.id}
            />
          </>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
}

export default YoutubePage;
