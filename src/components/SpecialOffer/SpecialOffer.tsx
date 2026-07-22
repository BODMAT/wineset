import { Link } from "react-router-dom";
import { useFilterStore } from "../../store/filterProducts";
import { SpecialOfferPropsType } from "../../types/types";
import { motion } from "framer-motion";
import { blockFromRightAnimation } from "../../utils/animations";

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
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2 }}
            className="group h-[424px] w-full relative transitioned">
            <div className="w-full h-full overflow-hidden relative">
                <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full object-cover" src={imgSrc} alt="special-offer-img" />
            </div>
            <motion.div variants={blockFromRightAnimation} className="transition-all duration-500 ease-[cubic-bezier(0.075,0.82,0.165,1)] absolute z-[5] w-auto h-full top-0 right-[-5vw] bg-gradient-to-l from-[#780A2B] to-[#4e061c] [clip-path:polygon(150px_0,100%_0,100%_100%,0_100%)] shadow-[-10px_5px_30px_rgba(0,0,0,0.9)] flex flex-col justify-center items-center py-5 px-[13vw] text-center min-[850px]:group-hover:py-0 min-[850px]:group-hover:px-[20vw] max-md:from-[#780a2b66] max-md:to-[#4e061c72] max-md:[clip-path:none] max-md:shadow-none max-md:w-full max-md:right-0">
                <h3 className="text-[#ffffffa0] font-alexbrush font-normal mb-2.5 fluid-text [--fmin:25] [--fmax:53]">{supTitle}</h3>
                <h2
                    style={{
                        maxWidth: `${contentWidth}px`,
                    }}
                    className="text-white font-inter font-medium mb-[50px] leading-[1.5] uppercase fluid-text [--fmin:35] [--fmax:50]"
                >
                    {title}
                </h2>
                {subTitleLink && (
                    <Link className="text-white font-inter font-semibold leading-normal tracking-[4px] fluid-text [--fmin:12] [--fmax:14] hover:underline" to={subTitleLink}>
                        {subTitle}
                    </Link>
                )}
                {scrollTo && (
                    <button
                        onClick={() => scrollAndFilter(scrollTo)}
                        className="text-white font-inter font-semibold leading-normal tracking-[4px] fluid-text [--fmin:12] [--fmax:14] hover:underline"
                    >
                        {subTitle}
                    </button>
                )}
            </motion.div>
        </motion.section>
    );
}
