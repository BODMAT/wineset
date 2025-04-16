import styles from "./FixedHeader.module.scss";
import { LeafletMap } from "../LeafletMap/LeafletMap";
import InstagramIcon from "../../assets/Header/inst.svg";
import TelegramIcon from "../../assets/Header/tg.svg";
import FacebookIcon from "../../assets/Header/facebook.svg";
import crossSVG from "../../assets/cross.svg";
import { Link } from "react-router-dom";
import { ContactUsPopupProps } from "../../types/interfaces";

export function ContactUsPopup({ state, setState }: ContactUsPopupProps) {
    return (
        <div className={`${styles.header__contactInfo} ${state.moreInfo ? styles.visible : ""}`}>
            <div className={styles.header__contactInfo_top}>
                <h3 className={styles.header__contactInfo_title}>Contacts</h3>
                <button onClick={() => setState(prev => ({ ...prev, moreInfo: false }))} className={styles.header__contactInfo_cross}>
                    <img src={crossSVG} alt="cross" />
                </button>
            </div>
            <div className={styles.header__contactInfo_content}>
                <div className={styles.header__contactInfo_contacts}>
                    <div className={styles.header__contactInfo_adress}><span>Address:</span> Zabuttsia Sahakanskiy, 25, Kyiv</div>
                    <div className={styles.header__contactInfo_phone}><span>Phone:</span>1235123123, 15121231231</div>
                    <div className={styles.header__contactInfo_email}><span>Email:</span>delivery@wineset.ua</div>
                </div>
                <LeafletMap height={"180px"} />
                <div className={styles.header__contactInfo_socials}>
                    <a target="_blank" href="https://www.facebook.com/"><img src={FacebookIcon} alt="facebook" /></a>
                    <a target="_blank" href="https://web.telegram.org/"><img src={TelegramIcon} alt="tg" /></a>
                    <a target="_blank" href="https://www.instagram.com/wineshop.kyiv/"><img src={InstagramIcon} alt="inst" /></a>
                </div>
                <Link className={styles.header__contactInfo_about} to="/about">More information</Link>
            </div>
        </div>
    )
}