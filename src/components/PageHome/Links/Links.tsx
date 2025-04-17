import styles from "./Links.module.scss";
import { links } from "../../../data/Other/Link";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
// @ts-ignore
import 'swiper/css';
import { ILink } from "../../../types/interfaces";

export function Links() {
    const swiperSettings = {
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 5,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    };

    return (
        <section className={styles.links}>
            <Swiper {...swiperSettings} modules={[Autoplay]}>
                {links.map((link: ILink) => (
                    <SwiperSlide key={link.index}>
                        <div className={styles.links__link} key={link.index}>
                            <div className={styles.links__img}>
                                <img src={link.imgSrc} alt={`img for ${link.label}`} />
                            </div>
                            <Link to={link.link} className={styles.links__label}>
                                {link.label}
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
