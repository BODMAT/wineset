import { Link } from "react-router-dom"
import styles from "./FixedFooter.module.scss"

import phoneIcon from "../../assets/Footer/Phone.svg";
import mapPinIcon from "../../assets/Footer/MapPin.svg";
import instagramIcon from "../../assets/Footer/instagram.svg";
import telegramIcon from "../../assets/Footer/telegram.svg";
import facebookIcon from "../../assets/Footer/facebook.svg";

export function FixedFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__container}>
                <div className={styles.footer__first}>
                    <Link to="/" className={styles.footer__link}>
                        <img src="/logo.svg" alt="logo" />
                    </Link>
                </div>
                <nav className={styles.footer__navigation}>
                    <ul className={styles.footer__menu}>
                        <li className={styles.footer__li}><Link to="/gift">Gift sets</Link></li>
                        <li className={styles.footer__li}><Link to="/wine-alco">Wine and alcohol</Link></li>
                        <li className={styles.footer__li}><Link to="/delicacys">Delicacys</Link></li>
                        <li className={styles.footer__li}><Link to="/glasses-candles">Glasses and candles</Link></li>
                    </ul>
                    <div className={styles.footer__privacy}>
                        <a target="_blank" href="#">Privacy policy</a>
                        <a target="_blank" href="#">User agreement</a>
                    </div>
                </nav>
                <div className={styles.footer__contacts}>
                    <div className={styles.footer__info}>
                        <div className={styles.footer__tel}>
                            <img src={phoneIcon} alt="phone" />
                            <span>1235123123, 15121231231</span>
                        </div>
                        <div className={styles.footer__loc}>
                            <img src={mapPinIcon} alt="map" />
                            <span>Kyiv, Khimikov Avenue, 13</span>
                        </div>
                    </div>
                    <div className={styles.footer__socials}>
                        <a target="_blank" href="https://www.facebook.com/"><img src={facebookIcon} alt="facebook" /></a>
                        <a target="_blank" href="https://web.telegram.org/"><img src={telegramIcon} alt="tg" /></a>
                        <a target="_blank" href="https://www.instagram.com/"><img src={instagramIcon} alt="inst" /></a>
                    </div>
                    <button className={styles.footer__btn}>Contact us</button>
                </div>
            </div>
        </footer>
    )
}