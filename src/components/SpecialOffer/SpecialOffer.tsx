import { Link } from "react-router-dom";
import styles from "./SpecialOffer.module.scss"
interface IProps {
    imgSrc: string;
    supTitle: string;
    title: string;
    subTitle: string;
    subTitleLink: string;
    contentWidth: number;
}

export function SpecialOffer({ imgSrc, supTitle, title, subTitle, subTitleLink, contentWidth }: IProps) {
    return (
        <section className={styles.special}>
            <div className={styles.special__img}>
                <img src={imgSrc} alt="special-offer-img" />
            </div>
            <div className={styles.special__content}>
                <h3 className={styles.special__suptitle}>{supTitle}</h3>
                <h2
                    style={{
                        maxWidth: `${contentWidth}px`,
                    }}
                    className={styles.special__title}
                >
                    {title}
                </h2>
                <Link className={styles.special__subtitle} to={subTitleLink}>{subTitle}</Link>
            </div>
        </section >
    )
}