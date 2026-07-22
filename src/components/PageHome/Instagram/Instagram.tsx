
import { motion } from "framer-motion";
import { useOpacity } from "../../../hooks/useOpacity";
import { textFromTopAnimation } from "../../../utils/animations";

export function Instagram() {
    const { opacity, blockRef } = useOpacity()
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className="relative pt-[149px] pb-[200px] max-[479.98px]:py-[100px]">
            <div className="myContainer relative z-[2]">
                <div className="flex justify-between items-center mb-[42px] gap-5 flex-wrap max-[459.98px]:justify-center">
                    <motion.h2 variants={textFromTopAnimation} className="text-[#121212] font-cormorant font-bold leading-normal uppercase fluid-text [--fmin:30] [--fmax:48]">instagram</motion.h2>
                    <a className="text-[#7a0000] font-inter font-semibold uppercase border-2 border-[#7a0000] rounded-full px-[65px] py-[28px] transitioned hover:bg-[#7a0000] hover:text-white" target="_blank" href="https://www.instagram.com/wineshop.kyiv/">Subscribe</a>
                </div>
                <div className="flex gap-[5px] items-center justify-between flex-wrap">
                    <div className="flex-auto w-[395px] h-[395px] relative max-[768.98px]:w-[295px] max-[768.98px]:h-[295px] max-[479.98px]:w-[195px] max-[479.98px]:h-[195px]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover" src={`${import.meta.env.BASE_URL}Instagram/wine-bottles1.jpeg`} alt="wine1" />
                    </div>
                    <div className="flex-auto w-[395px] h-[395px] relative max-[768.98px]:w-[295px] max-[768.98px]:h-[295px] max-[479.98px]:w-[195px] max-[479.98px]:h-[195px]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover" src={`${import.meta.env.BASE_URL}Instagram/men.jpg`} alt="wine2" />
                    </div>
                    <div className="flex-auto w-[395px] h-[395px] relative max-[768.98px]:w-[295px] max-[768.98px]:h-[295px] max-[479.98px]:w-[195px] max-[479.98px]:h-[195px]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover" src={`${import.meta.env.BASE_URL}Instagram/wine-bottles.jpg`} alt="wine3" />
                    </div>
                    <div className="flex-auto w-[395px] h-[395px] relative max-[768.98px]:w-[295px] max-[768.98px]:h-[295px] max-[479.98px]:w-[195px] max-[479.98px]:h-[195px]">
                        <img className="absolute w-full h-full top-0 left-0 object-cover" src={`${import.meta.env.BASE_URL}HomePage/Delivery/wine-cork.jpg`} alt="wine4" />
                    </div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }} className="absolute w-[902px] h-[509px] top-[10%] left-[30%]">
                <img src={`${import.meta.env.BASE_URL}WineSpots/wine-spot-1.png`} alt="wine-spot-1" />
            </div>
        </motion.section>
    )
}
