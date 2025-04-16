import { Link } from "react-router-dom";
import styles from "./SpecialOffer.module.scss";
import { useFilterStore } from "../../store/filterProducts";
import { SpecialOfferPropsType } from "../../types/types";

export function SpecialOffer({
    imgSrc,
    supTitle,
    title,
    subTitle,
    subTitleLink,
    scrollTo,
    contentWidth,
    product
}: SpecialOfferPropsType) {
    const { setFilters } = useFilterStore();

    function scrollAndFilter(sectionClass: string) {
        // Виконуємо фільтрацію
        if (product) {
            setFilters(product, {
                discount: "With discount",
                country: "All countries",
            });

            // Прокручуємо до секції
            const productsSection = document.querySelector(sectionClass);
            if (productsSection) {
                const offset = window.innerWidth < 768 ? 84 : 143;
                const sectionTop = productsSection.getBoundingClientRect().top + window.scrollY;

                window.scrollTo({
                    top: sectionTop - offset,
                    behavior: "smooth",
                });
            } else {
                console.error("Section not found for class:", sectionClass);
            }
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
                    <Link className={styles.special__subtitle} to={subTitleLink}>
                        {subTitle}
                    </Link>
                )}
                {scrollTo && (
                    <button
                        onClick={() => scrollAndFilter(scrollTo)}
                        className={styles.special__subtitle}
                    >
                        {subTitle}
                    </button>
                )}
            </div>
        </section>
    );
}
