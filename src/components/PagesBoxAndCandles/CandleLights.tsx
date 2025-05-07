import styles from "./PageGiftBoxesPage.module.scss"
import { BorderedLink } from "../BorderedLink/BorderedLink"
import { motion } from "framer-motion"
import { textFromTopAnimation } from "../../utils/animations"
export function CandleLights() {
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="mt-[70px] mb-[70px] max-md:mb-[50px] max-md:mt-[50px]">
            <div className={styles.container}>
                <motion.h2 variants={textFromTopAnimation} className={styles.basicTitle}>Candles</motion.h2>
                <div className="flex justify-between gap-[30px] mt-[50px] max-xl:flex-wrap max-xl:justify-evenly max-md:mt-[30px]">
                    <div className="w-[640px] max-xl:flex-[1_1_100%]">
                        <img className="relative w-[100%] h-[429px] left-0 top-0 object-cover" src="./GiftBoxesPage/CandleLights/candles.png" alt="candles" />
                    </div>
                    <div className={styles.basicText}>
                        Candles are not just a source of light but a true symbol of comfort and tranquility. They fill the space with gentle warmth and a subtle fragrance, creating an atmosphere of harmony and relaxation. Natural wax candles burn longer and have a pleasant honey scent, while scented varieties can evoke memories or set a special mood for the evening. They are used for meditation, romantic gatherings, or simply for a cozy retreat after a long day.
                    </div>
                    <div className="flex flex-col gap-22 max-xl:gap-[30px]">
                        <div className={styles.basicText}>A wine shop is a place where every bottle holds a story, offering a journey through flavors, aromas, and traditions.</div>
                        <div className="flex justify-center items-center">
                            <BorderedLink to="/Glasses-and-candles/Candles">Order candles</BorderedLink>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}