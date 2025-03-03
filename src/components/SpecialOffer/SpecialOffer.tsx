import { Link } from "react-router-dom";
import styles from "./SpecialOffer.module.scss";
import { useFilterContext } from "../PageProducts/FilterProvider";

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
    product?: never;
}

interface IPropsWithScroll extends IPropsBase {
    scrollTo: string;
    product: string;
    subTitleLink?: never;
}

type IProps = IPropsWithLink | IPropsWithScroll;

export function SpecialOffer({ imgSrc, supTitle, title, subTitle, subTitleLink, scrollTo, contentWidth }: IProps) {
    const filterContext = scrollTo ? useFilterContext() : null;

    function scrollAndFilter(sectionClass: string) {
        filterContext?.setFilters((prev: any) => ({
            ...prev,
            discount: "With discount",
        }));

        const productsSection = document.querySelector(sectionClass);
        if (productsSection) {
            const offset = window.innerWidth < 768 ? 84 : 143;
            const sectionTop = productsSection.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top: sectionTop - offset,
                behavior: 'smooth'
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
                {scrollTo && (
                    <button onClick={() => scrollAndFilter(scrollTo)} className={styles.special__subtitle}>
                        {subTitle}
                    </button>
                )}
            </div>
        </section>
    );
}
