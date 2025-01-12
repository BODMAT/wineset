import { useOpacity } from "../../customHooks/useOpacity";
import styles from "./Instagram.module.scss";

export function Instagram() {
    const { opacity, blockRef } = useOpacity()
    return (
        <section ref={blockRef} className={styles.instagram}>
            <div className={styles.instagram__container}>
                <div className={styles.instagram__top}>
                    <h2 className={styles.instagram__title}>instagram</h2>
                    <a className={styles.instagram__link} target="_blank" href="https://www.instagram.com/wineshop.kyiv/">Subscribe</a>
                </div>
                <div className={styles.instagram__images}>
                    <div className={styles.instagram__img}>
                        <img src="/public/Instagram/wine-bottles1.jpeg" alt="wine1" />
                    </div>
                    <div className={styles.instagram__img}>
                        <img src="/public/Instagram/men.jpg" alt="wine2" />
                    </div>
                    <div className={styles.instagram__img}>
                        <img src="/public/Instagram/wine-bottles.jpg" alt="wine3" />
                    </div>
                    <div className={styles.instagram__img}>
                        <img src="/public/Delivery/wine-cork.jpg" alt="wine4" />
                    </div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }} className={styles.instagram__winespot}>
                <img src="/Delivery/wine-spot-3.png" alt="wine-spot-3" />
            </div>
        </section>
    )
}