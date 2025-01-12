import { Link } from "react-router-dom"
import styles from "./WhatMakesUsSpecial.module.scss"
import { useOpacity } from "../../../customHooks/useOpacity";

export function WhatMakesUsSpecial() {
    const { opacity, blockRef } = useOpacity();
    return (
        <section ref={blockRef} className={styles.special}>
            <div className={styles.special__container}>
                <h2 className={styles.special__title}>What makes us special?</h2>
                <div className={styles.special__content}>
                    <Link to="/help" className={styles.special__help}>
                        <div className={styles.special__help_img}>
                            <img src="/Special/man1.jpg" alt="man-help" />
                        </div>
                        <h4 className={styles.special__label}>Need help picking wine?</h4>
                    </Link>
                    <Link to="/sommelier" className={styles.special__sommelier}>
                        <div className={styles.special__text}>A sommelier is a professional with a deep knowledge of wines and the art of pairing them with food to elevate the dining experience. Their expertise isn't limited to just knowing labels and vintages; it encompasses understanding the nuances of flavor profiles, grape varieties, regions, and even the history and culture behind each bottle.</div>
                        <div className={styles.special__sommelier_img}>
                            <img src="/Special/man2.jpg" alt="man-sommeiler" />
                        </div>
                        <h4 className={styles.special__label}>Read about sommelier</h4>
                    </Link>
                    <Link to="/about-store" className={styles.special__store}>
                        <div className={styles.special__text}>Wineset is a wine shop that stands out as a haven for wine enthusiasts, offering a carefully curated selection of exceptional wines from around the world. Whether you are a seasoned connoisseur or a curious beginner, Wineset provides a welcoming environment to explore and discover.</div>
                        <div className={styles.special__store_img}>
                            <img src="/Special/store.jpg" alt="store" />
                        </div>
                        <h4 className={styles.special__label}>More about the store</h4>
                    </Link>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className={styles.special__winespot}>
                <img src="/Special/wine-spot.png" alt="wine-spot" />
            </div>
            <div style={{
                opacity: opacity,
            }}
                className={styles.special__winespot2}>
                <img src="/Special/wine-spot-2.png" alt="wine-spot-2" />
            </div>
        </section>
    )
}