import { Link } from "react-router-dom";
import styles from "./SpecialOffer.module.scss"
interface IPropsBase {
    imgSrc: string;
    supTitle: string;
    title: string;
    subTitle: string;
    contentWidth: number;
}

interface IPropsWithLink extends IPropsBase {
    subTitleLink: string;
    scrollTo?: never;
}

interface IPropsWithScroll extends IPropsBase {
    scrollTo: string;
    subTitleLink?: never;
}

type IProps = IPropsWithLink | IPropsWithScroll;

export function SpecialOffer({ imgSrc, supTitle, title, subTitle, subTitleLink, scrollTo, contentWidth }: IProps) {
    function scrollAndFilter(sectionClass: string) {
        //! need update
        console.log("FILTER WILL BE ADDED IN FUTURE");
        const productsSection = document.querySelector(sectionClass);
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

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
                {subTitleLink && (
                    <Link className={styles.special__subtitle} to={subTitleLink}>{subTitle}</Link>
                )}
                {scrollTo && (<button onClick={() => scrollAndFilter(scrollTo)} className={styles.special__subtitle}>{subTitle}</button>)}
            </div>
        </section >
    )
}