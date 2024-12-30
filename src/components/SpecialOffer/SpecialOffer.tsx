import { Link } from "react-router-dom";
import styles from "./SpecialOffer.module.scss"
interface IProps {
    imgSrc: string;
    title: string;
    subTitle: string;
    subTitleLink: string;
}

export function SpecialOffer({ imgSrc, title, subTitle, subTitleLink }: IProps) {
    return (
        <section className={styles.special}>
            <div className={styles.special__img}>
                <img src={imgSrc} alt="special-offer-img" />
            </div>
            <div className={styles.special__content}>
                <h3 className={styles.special__suptitle}>Special offer</h3>
                <h2 className={styles.special__title}>{title}</h2>
                <Link className={styles.special__subtitle} to={subTitleLink}>{subTitle}</Link>
            </div>
        </section>
    )
}