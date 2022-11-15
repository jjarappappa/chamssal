import BannerData from './banner.json';
import {Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation,Autoplay } from "swiper";
import styles from '../../styles/components/banner/banner.module.scss';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { style } from '@mui/system';
const Banner = () => {
    SwiperCore.use([Navigation, Autoplay]);
    return(
        <div className={styles.bannere}>
            
        <Swiper     
        className={styles.bannerswiper}
        effect={"fade"}
        slidesPerView='auto'
        autoplay={{delay: 2000}}
        
        >
            {BannerData.banners.map(b => (
                <SwiperSlide className={styles.slider}>
                    <img src={b.img} className={styles.bannerimage}/>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    )
}
export default Banner;