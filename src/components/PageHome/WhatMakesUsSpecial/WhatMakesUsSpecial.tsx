import { Link } from "react-router-dom"
import { useOpacity } from "../../../hooks/useOpacity";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../../utils/animations";

const labelClasses = "relative opacity-0 invisible -translate-y-[200%] transitioned pt-2.5 text-black font-inter font-medium leading-normal fluid-text [--fmin:18] [--fmax:20] max-md:text-center group-hover:opacity-100 group-hover:visible group-hover:translate-y-0";
const imgWrapClasses = "overflow-hidden rounded-[40px]";
const cardImg = "max-w-full transitioned group-hover:scale-105";
const textClasses = "text-[#121212] font-inter font-normal leading-[22px] mb-[200px] max-[1399.98px]:mb-[100px] max-md:mb-[50px] max-md:text-center";

export function WhatMakesUsSpecial() {
    const { opacity, blockRef } = useOpacity();
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className="py-[100px] relative max-md:py-[50px]">
            <div className="relative z-[2] myContainer">
                <motion.h2 variants={textFromTopAnimation} className="max-w-[419px] text-[#121212] font-cormorant font-bold leading-normal uppercase pb-[40px] fluid-text [--fmin:30] [--fmax:48] max-[1399.98px]:text-center max-[1399.98px]:mx-auto">What makes us special?</motion.h2>
                <div className="flex justify-between items-center gap-[30px] max-[1399.98px]:gap-[50px] max-[1399.98px]:justify-center max-[1399.98px]:flex-wrap">
                    <Link to="/Articles" className="group transitioned max-w-[640px] max-[1399.98px]:order-3">
                        <div className={imgWrapClasses}>
                            <img className={cardImg} src="./HomePage/Special/man1.jpg" alt="man-help" />
                        </div>
                        <h4 className={labelClasses}>Need help picking wine?</h4>
                    </Link>
                    <Link to="/Sommelier" className="group transitioned max-w-[321px] max-[1399.98px]:order-2">
                        <div className={textClasses}>A sommelier is a professional with a deep knowledge of wines and the art of pairing them with food to elevate the dining experience. Their expertise isn't limited to just knowing labels and vintages; it encompasses understanding the nuances of flavor profiles, grape varieties, regions, and even the history and culture behind each bottle.</div>
                        <div className={imgWrapClasses}>
                            <img className={cardImg} src="./HomePage/Special/man2.jpg" alt="man-sommeiler" />
                        </div>
                        <h4 className={labelClasses}>Read about sommelier</h4>
                    </Link>
                    <Link to="/Articles" className="group transitioned -translate-y-[10%] max-w-[321px] max-[1399.98px]:order-1 max-[1399.98px]:translate-y-0">
                        <div className={textClasses}>Wineset is a wine shop that stands out as a haven for wine enthusiasts, offering a carefully curated selection of exceptional wines from around the world. Whether you are a seasoned connoisseur or a curious beginner, Wineset provides a welcoming environment to explore and discover.</div>
                        <div className={imgWrapClasses}>
                            <img className={cardImg} src="./HomePage/Special/store.jpg" alt="store" />
                        </div>
                        <h4 className={labelClasses}>More about the store</h4>
                    </Link>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[360px] h-[380px] bottom-[25%] right-[-4%] max-[1399.98px]:bottom-[35%]">
                <img src="./WineSpots/wine-spot.png" alt="wine-spot" />
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[360px] h-[380px] bottom-[60%] left-[-4%]">
                <img src="./WineSpots/wine-spot-2.png" alt="wine-spot-2" />
            </div>
        </motion.section>
    )
}
