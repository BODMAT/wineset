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
        <section className="min-h-[248px] py-[5px]">
            <Swiper {...swiperSettings} modules={[Autoplay]}>
                {links.map((link: ILink) => (
                    <SwiperSlide key={link.index}>
                        <div className="group" key={link.index}>
                            <div className="h-[248px] overflow-hidden">
                                <img className="transitioned object-cover w-full h-full group-hover:scale-105" src={link.imgSrc} alt={`img for ${link.label}`} />
                            </div>
                            <Link to={link.link} className="transitioned bg-[#0000006e] absolute w-full h-full top-0 left-0 p-2.5 text-center flex items-center justify-center uppercase text-white font-inter font-semibold leading-normal tracking-[1px] fluid-text [--fmin:20] [--fmax:26] group-hover:bg-[#000000a5] active:[--fmin:22] active:[--fmax:32]">
                                {link.label}
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
