import BannerData from "./banner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay, EffectFade } from "swiper";
import styles from "../../styles/components/banner/banner.module.scss";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { style } from "@mui/system";
import Image from "next/image";
const Banner = () => {
  SwiperCore.use([Navigation, Autoplay, EffectFade]);
  return (
    <div className={styles.bannere}>
      <Swiper
        className={styles.bannerswiper}
        slidesPerView="auto"
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {BannerData.banners.map((b, index) => (
          <SwiperSlide className={styles.slider} key={index}>
            <span className={styles.bannerimagespan}>
              <Image
                src={b.img}
                className={styles.bannerimage}
                height={350}
                width={1000}
              />
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default Banner;
