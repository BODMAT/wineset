import styles from "./Links.module.scss";
import { ILink, links } from "./Link";
import { Link } from "react-router-dom";
export function Links() {
    return (
        <section className={styles.links}>
            <ul className={styles.links__ul}>
                {links.map((link: ILink) => (
                    <li className={styles.links__li} key={link.label}>
                        <div className={styles.links__img}>
                            <img src={link.imgSrc} alt="img" />

                        </div>
                        <Link to={link.link} className={styles.links__label}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}