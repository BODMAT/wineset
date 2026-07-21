import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from "swiper/modules";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import 'swiper/css/effect-coverflow';

import arrRightSvg from '../../../assets/arr-right-red.svg';
import arrLeftSvg from '../../../assets/arr-left-red.svg';
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../../utils/animations";

export function ForWhom() {
    const swiperRef = useRef<any>(null);
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="pb-[100px] max-md:pb-[50px]">
            <div className="myContainer">
                <div className="flex items-center justify-between gap-5 mb-[30px]">
                    <motion.h2 variants={textFromTopAnimation} className="max-w-[716px] text-[#121212] font-cormorant font-bold leading-normal uppercase fluid-text [--fmin:30] [--fmax:48]">Corporate clients and partners</motion.h2>
                    <div className="flex gap-5 max-[479.98px]:gap-2.5 max-[479.98px]:flex-col">
                        <button
                            className="bg-transparent swiper-button-prev"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img className="max-[379.98px]:w-10" src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className="bg-transparent swiper-button-next"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <img className="max-[379.98px]:w-10" src={arrRightSvg} alt="next" />
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
                className="relative w-full py-[27px]">

                <SwiperSlide className="transitioned py-5 max-w-[640px] max-md:max-w-[90vw]">
                    <div className="w-[640px] h-[428px] relative max-md:w-[90vw] max-md:h-[60vw]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover rounded-[5px]" src="./HomePage/ForWhom/table-with-glasses.jpg" alt="table-with-glasses" />
                    </div>
                    <h3 className="font-inter font-medium leading-normal pt-2.5 fluid-text [--fmin:16] [--fmax:18]">Wedding agencies</h3>
                </SwiperSlide>
                <SwiperSlide className="transitioned py-5 max-w-[640px] max-md:max-w-[90vw]">
                    <div className="w-[640px] h-[428px] relative max-md:w-[90vw] max-md:h-[60vw]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover rounded-[5px]" src="./HomePage/ForWhom/table-with-flowers.jpg" alt="table-with-flowers" />
                    </div>
                    <h3 className="font-inter font-medium leading-normal pt-2.5 fluid-text [--fmin:16] [--fmax:18]">Flower shops</h3>
                </SwiperSlide>
                <SwiperSlide className="transitioned py-5 max-w-[640px] max-md:max-w-[90vw]">
                    <div className="w-[640px] h-[428px] relative max-md:w-[90vw] max-md:h-[60vw]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover rounded-[5px]" src="./HomePage/ForWhom/glasses-with-wine.jpg" alt="Corporate clients" />
                    </div>
                    <h3 className="font-inter font-medium leading-normal pt-2.5 fluid-text [--fmin:16] [--fmax:18]">Corporate clients</h3>
                </SwiperSlide>
                <SwiperSlide className="transitioned py-5 max-w-[640px] max-md:max-w-[90vw]">
                    <div className="w-[640px] h-[428px] relative max-md:w-[90vw] max-md:h-[60vw]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover rounded-[5px]" src="./HomePage/ForWhom/restaurants.jpg" alt="Restaurants and cafes" />
                    </div>
                    <h3 className="font-inter font-medium leading-normal pt-2.5 fluid-text [--fmin:16] [--fmax:18]">Restaurants and cafes</h3>
                </SwiperSlide>
                <SwiperSlide className="transitioned py-5 max-w-[640px] max-md:max-w-[90vw]">
                    <div className="w-[640px] h-[428px] relative max-md:w-[90vw] max-md:h-[60vw]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover rounded-[5px]" src="./HomePage/ForWhom/tourism.jpg" alt="Tourism Agency" />
                    </div>
                    <h3 className="font-inter font-medium leading-normal pt-2.5 fluid-text [--fmin:16] [--fmax:18]">Tourism Agency</h3>
                </SwiperSlide>
                <SwiperSlide className="transitioned py-5 max-w-[640px] max-md:max-w-[90vw]">
                    <div className="w-[640px] h-[428px] relative max-md:w-[90vw] max-md:h-[60vw]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover rounded-[5px]" src="./HomePage/ForWhom/blog.jpg" alt="Food bloggers and influencers" />
                    </div>
                    <h3 className="font-inter font-medium leading-normal pt-2.5 fluid-text [--fmin:16] [--fmax:18]">Food bloggers and influencers</h3>
                </SwiperSlide>
                <SwiperSlide className="transitioned py-5 max-w-[640px] max-md:max-w-[90vw]">
                    <div className="w-[640px] h-[428px] relative max-md:w-[90vw] max-md:h-[60vw]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover rounded-[5px]" src="./HomePage/ForWhom/hotel.jpg" alt="Hotel networks" />
                    </div>
                    <h3 className="font-inter font-medium leading-normal pt-2.5 fluid-text [--fmin:16] [--fmax:18]">Hotel networks</h3>
                </SwiperSlide>
            </Swiper>
        </motion.section>
    )
}
