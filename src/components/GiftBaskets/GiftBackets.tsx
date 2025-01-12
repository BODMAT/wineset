import styles from "./GiftBackets.module.scss"
import arrRightSvg from '../../assets/arr-right-red.svg';
import arrLeftSvg from '../../assets/arr-left-red.svg';
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { boxes } from "./DBExample";
import { Box, ProductConfig } from "../../data/OOPStructure/Pruduct";
import { Link } from "react-router-dom";

export function GiftBackets() {
    const swiperRef = useRef<any>(null);
    return (
        <section className={styles.gift}>
            <div className={styles.gift__container}>
                <div className={styles.gift__top}>
                    <h2 className={styles.gift__title}>Gift baskets</h2>
                    <div className={styles.gift__buttons}>
                        <button
                            className={`${styles.gift__prev} swiper-button-prev`}
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className={`${styles.gift__next} swiper-button-next`}
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <img src={arrRightSvg} alt="next" />
                        </button>
                    </div>
                </div>
            </div>
            <Swiper
                ref={swiperRef}
                centeredSlides={true}
                slidesPerView={"auto"}
                modules={[Navigation]}
                navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                }}
                loop={true}
                className={styles.gift__slider}>

                {boxes.map((box: Box, index: number) => (
                    <SwiperSlide key={`${box.name}-${index}`} className={styles.gift__slide}>
                        <Link to={box.name.trim().replace(/\s+/g, '-')}>
                            <div className={styles.gift__slide_img}>
                                <img src={box.imageUrl} alt={box.imageUrl} />
                            </div>
                            <div className={styles.gift__slide_content}>
                                <h3 className={styles.gift__slide_name}>{box.name}</h3>
                                <div className={styles.gift__slide_structure}>
                                    <span>Composition: </span>
                                    <ul className={styles.gift__slide_list}>
                                        {box.structure.map((item: ProductConfig) => (
                                            <li className={styles.gift__slide_li}
                                                key={box.name + "-" + item.name}>
                                                {item.name}, {item.description}, {item.weight ? `${item.weight} g` : `${item.volume} l`}.
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={styles.gift__container}>
                <Link to="/boxes" className={styles.gift__link}>View all</Link>
            </div>
        </section >
    )
}