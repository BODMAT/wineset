import { Link } from "react-router-dom"
import styles from "./Delivery.module.scss"
import { useOpacity } from "../../../customHooks/useOpacity"
export function Delivery() {
    const { opacity, blockRef } = useOpacity()
    return (
        <section ref={blockRef} className={styles.delivery}>
            <div className={styles.delivery__container}>
                <h2 className={styles.delivery__title}>Delivery</h2>
                <div className={styles.delivery__content}>
                    <div className={styles.delivery__img}>
                        <img src="/public/Delivery/wine-cork.jpg" alt="cork" />
                    </div>
                    <div className={styles.delivery__text}>
                        Wine delivery services provide customers with a convenient way to enjoy their favorite bottles without leaving home. Whether ordering a single bottle or stocking up for an event, stores offer a variety of delivery options to suit different needs. Many shops also provide special packaging to ensure that wines arrive in perfect condition. Some retailers even offer same-day delivery for last-minute plans, adding an extra layer of convenience. Additionally, many services include tracking features, so customers can monitor their order from dispatch to doorstep.
                    </div>
                    <div className={styles.delivery__text_block}>
                        <div className={styles.delivery__text}>
                            In addition to fast delivery, some wine stores offer curated selections tailored to individual tastes. Customers can subscribe to monthly wine boxes or choose from expertly recommended pairings for specific occasions. This combination of quality, convenience, and personalization makes wine delivery an increasingly popular choice.
                        </div>
                        <Link className={styles.delivery__btn} to="/delivery">DELIVERY DETAILS</Link>
                    </div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className={styles.delivery__winespot2}>
                <img src="/Delivery/wine-spot-3.png" alt="wine-spot-3" />
            </div>
        </section>
    )
}