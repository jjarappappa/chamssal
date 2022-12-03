import Head from "next/head";
import React, { useState } from "react";
import Parenting from "../../components/info/mode/Parenting";
import Pregnancy from "../../components/info/mode/Pregnancy";
import Header from "../../components/layout/header";
import Title from "../../components/layout/title";
import styles from "../../styles/pages/info.module.scss";

function Info() {
  const [mode, setMode] = useState(true);
  return (
    <div className="background">
      <Head>
        <title>정보 보기</title>
      </Head>
      <Header />
      <Title>정보 보기</Title>
      <div className={styles.info}>
        <div className={styles.title}>
          <span
            className={mode ? styles.title_selected : styles.title_unselected}
            onClick={() => setMode(true)}
          >
            임신/출산
          </span>
          <span
            className={!mode ? styles.title_selected : styles.title_unselected}
            onClick={() => setMode(false)}
          >
            육아
          </span>
        </div>
        {mode ? <Pregnancy /> : <Parenting />}
      </div>
    </div>
  );
}

export default Info;
