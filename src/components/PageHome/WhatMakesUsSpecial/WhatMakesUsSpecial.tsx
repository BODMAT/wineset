import { Link } from "react-router-dom"
import styles from "./WhatMakesUsSpecial.module.scss"
import { useOpacity } from "../../../hooks/useOpacity";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../../utils/animations";

export function WhatMakesUsSpecial() {
    const { opacity, blockRef } = useOpacity();
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className={styles.special}>
            <div className={styles.special__container}>
                <motion.h2 variants={textFromTopAnimation} className={styles.special__title}>What makes us special?</motion.h2>
                <div className={styles.special__content}>
                    <Link to="/Articles" className={styles.special__help}>
                        <div className={styles.special__help_img}>
                            <img src="./HomePage/Special/man1.jpg" alt="man-help" />
                        </div>
                        <h4 className={styles.special__label}>Need help picking wine?</h4>
                    </Link>
                    <Link to="/Sommelier" className={styles.special__sommelier}>
                        <div className={styles.special__text}>A sommelier is a professional with a deep knowledge of wines and the art of pairing them with food to elevate the dining experience. Their expertise isn't limited to just knowing labels and vintages; it encompasses understanding the nuances of flavor profiles, grape varieties, regions, and even the history and culture behind each bottle.</div>
                        <div className={styles.special__sommelier_img}>
                            <img src="./HomePage/Special/man2.jpg" alt="man-sommeiler" />
                        </div>
                        <h4 className={styles.special__label}>Read about sommelier</h4>
                    </Link>
                    <Link to="/Articles" className={styles.special__store}>
                        <div className={styles.special__text}>Wineset is a wine shop that stands out as a haven for wine enthusiasts, offering a carefully curated selection of exceptional wines from around the world. Whether you are a seasoned connoisseur or a curious beginner, Wineset provides a welcoming environment to explore and discover.</div>
                        <div className={styles.special__store_img}>
                            <img src="./HomePage/Special/store.jpg" alt="store" />
                        </div>
                        <h4 className={styles.special__label}>More about the store</h4>
                    </Link>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className={styles.special__winespot}>
                <img src="./WineSpots/wine-spot.png" alt="wine-spot" />
            </div>
            <div style={{
                opacity: opacity,
            }}
                className={styles.special__winespot2}>
                <img src="./WineSpots/wine-spot-2.png" alt="wine-spot-2" />
            </div>
        </motion.section>
    )
}