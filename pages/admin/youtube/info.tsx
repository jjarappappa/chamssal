import Head from "next/head";
import React from "react";
import { useQuery } from "react-query";
import AdminTitle from "../../../components/layout/AdminTitle";
import Sidebar from "../../../components/layout/Sidebar";
import { getYoutube } from "../../../util/api/Yotube";
import styles from "../../../styles/pages/youtube.module.scss";
import { YoutubeResponse } from "../../../components/youtube/YoutubeType";
import Youtubemap from "../../../components/youtube/youtubemap";

function Info() {
  const { data } = useQuery("youtube", () => getYoutube());
  console.log(data);
  return (
    <>
      <Head>
        <title>동영상 강좌 정보</title>
      </Head>
      <Sidebar />
      <div className="background_admin">
        <AdminTitle>동영상 강좌 정보</AdminTitle>
        <div className={styles.youtube}>
          {data?.youtubeList?.map((y: YoutubeResponse) => (
            <>
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
      </div>
    </>
  );
}

export default Info;
