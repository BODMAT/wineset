
import { motion } from "framer-motion";
import { useOpacity } from "../../../hooks/useOpacity";
import styles from "./Instagram.module.scss";
import { textFromTopAnimation } from "../../../utils/animations";

export function Instagram() {
    const { opacity, blockRef } = useOpacity()
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className={styles.instagram}>
            <div className={styles.instagram__container}>
                <div className={styles.instagram__top}>
                    <motion.h2 variants={textFromTopAnimation} className={styles.instagram__title}>instagram</motion.h2>
                    <a className={styles.instagram__link} target="_blank" href="https://www.instagram.com/wineshop.kyiv/">Subscribe</a>
                </div>
                <div className={styles.instagram__images}>
                    <div className={styles.instagram__img}>
                        <img src={`${import.meta.env.BASE_URL}Instagram/wine-bottles1.jpeg`} alt="wine1" />
                    </div>
                    <div className={styles.instagram__img}>
                        <img src={`${import.meta.env.BASE_URL}Instagram/men.jpg`} alt="wine2" />
                    </div>
                    <div className={styles.instagram__img}>
                        <img src={`${import.meta.env.BASE_URL}Instagram/wine-bottles.jpg`} alt="wine3" />
                    </div>
                    <div className={styles.instagram__img}>
                        <img src={`${import.meta.env.BASE_URL}HomePage/Delivery/wine-cork.jpg`} alt="wine4" />
                    </div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }} className={styles.instagram__winespot}>
                <img src={`${import.meta.env.BASE_URL}WineSpots/wine-spot-1.png`} alt="wine-spot-1" />
            </div>
        </motion.section>
    )
}