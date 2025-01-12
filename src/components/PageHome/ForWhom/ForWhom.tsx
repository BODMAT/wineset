import { useRef } from "react";
import styles from "./ForWhom.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import 'swiper/css/effect-coverflow';

import arrRightSvg from '../../../assets/arr-right-red.svg';
import arrLeftSvg from '../../../assets/arr-left-red.svg';

export function ForWhom() {
    const swiperRef = useRef<any>(null);
    return (
        <section className={styles.for}>
            <div className={styles.for__container}>
                <div className={styles.for__top}>
                    <h2 className={styles.for__title}>Corporate clients and partners</h2>
                    <div className={styles.for__navigation}>
                        <button
                            className={`${styles.for__prev} swiper-button-prev`}
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className={`${styles.for__next} swiper-button-next`}
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <img src={arrRightSvg} alt="next" />
                        </button>
                    </div>
                </div>
            </div>
            <Swiper
                ref={swiperRef}
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                modules={[EffectCoverflow, Navigation]}
                coverflowEffect={{
                    rotate: 20,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                spaceBetween={100}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                loop={true}
                className={styles.for__slider}>

                <SwiperSlide className={styles.for__slide}>
                    <div className={styles.for__slide_img}>
                        <img src="/ForWhom/table-with-glasses.jpg" alt="table-with-glasses" />
                    </div>
                    <h3 className={styles.for__slide_label}>Wedding agencies</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.for__slide}>
                    <div className={styles.for__slide_img}>
                        <img src="/ForWhom/table-with-flowers.jpg" alt="table-with-flowers" />
                    </div>
                    <h3 className={styles.for__slide_label}>Flower shops</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.for__slide}>
                    <div className={styles.for__slide_img}>
                        <img src="/ForWhom/glasses-with-wine.jpg" alt="Corporate clients" />
                    </div>
                    <h3 className={styles.for__slide_label}>Corporate clients</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.for__slide}>
                    <div className={styles.for__slide_img}>
                        <img src="/ForWhom/restaurants.jpg" alt="Restaurants and cafes" />
                    </div>
                    <h3 className={styles.for__slide_label}>Restaurants and cafes</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.for__slide}>
                    <div className={styles.for__slide_img}>
                        <img src="/ForWhom/tourism.jpg" alt="Tourism Agency" />
                    </div>
                    <h3 className={styles.for__slide_label}>Tourism Agency</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.for__slide}>
                    <div className={styles.for__slide_img}>
                        <img src="/ForWhom/blog.jpg" alt="Food bloggers and influencers" />
                    </div>
                    <h3 className={styles.for__slide_label}>Food bloggers and influencers</h3>
                </SwiperSlide>
                <SwiperSlide className={styles.for__slide}>
                    <div className={styles.for__slide_img}>
                        <img src="/ForWhom/hotel.jpg" alt="Hotel networks" />
                    </div>
                    <h3 className={styles.for__slide_label}>Hotel networks</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}