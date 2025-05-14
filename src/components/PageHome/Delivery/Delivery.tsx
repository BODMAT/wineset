import styles from "./Delivery.module.scss"
import { useOpacity } from "../../../hooks/useOpacity"
import { BorderedLink } from "../../BorderedLink/BorderedLink"
import { motion } from "framer-motion"
import { textFromTopAnimation } from "../../../utils/animations"
export function Delivery() {
    const { opacity, blockRef } = useOpacity()
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className={styles.delivery}>
            <div className={styles.delivery__container}>
                <motion.h2 variants={textFromTopAnimation} className={styles.delivery__title}>Delivery</motion.h2>
                <div className={styles.delivery__content}>
                    <div className={styles.delivery__img}>
                        <img src="./HomePage/Delivery/wine-cork.jpg" alt="cork" />
                    </div>
                    <div className={styles.delivery__text}>
                        Wine delivery services provide customers with a convenient way to enjoy their favorite bottles without leaving home. Whether ordering a single bottle or stocking up for an event, stores offer a variety of delivery options to suit different needs. Many shops also provide special packaging to ensure that wines arrive in perfect condition. Some retailers even offer same-day delivery for last-minute plans, adding an extra layer of convenience. Additionally, many services include tracking features, so customers can monitor their order from dispatch to doorstep.
                    </div>
                    <div className={styles.delivery__text_block}>
                        <div className={styles.delivery__text}>
                            In addition to fast delivery, some wine stores offer curated selections tailored to individual tastes. Customers can subscribe to monthly wine boxes or choose from expertly recommended pairings for specific occasions. This combination of quality, convenience, and personalization makes wine delivery an increasingly popular choice.
                        </div>
                        <BorderedLink to="/Delivery">DELIVERY DETAILS</BorderedLink>
                    </div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className={styles.delivery__winespot2}>
                <img src="./WineSpots/wine-spot-2.png" alt="wine-spot-2" />
            </div>
        </motion.section>
    )
}