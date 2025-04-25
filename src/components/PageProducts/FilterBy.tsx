import Select from "react-select";
import { useProduct } from "./PageProducts";
import styles from "./PageProducts.module.scss";
import { useFilterStore } from "../../store/filterProducts";
import { customSelectStyles } from "../../data/Other/FilterCustomSelect";
import { countryOptions, discountOptions } from "../../data/Other/ReusableProduct";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";


export function FilterBy() {
    const { product } = useProduct();
    const { filtersByType, setFilters } = useFilterStore();

    const filters = filtersByType[product] || { discount: "All prices", country: "All countries" };

    return (
        <motion.div initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-between items-center gap-x-20 gap-y-4 pb-2 max-md:flex-col max-md:text-center">
            <motion.h3 variants={textFromTopAnimation} className={styles.basicTitle}>Add filters to find your best {product}: </motion.h3>
            <div className="flex gap-2 max-[420px]:flex-col">
                <Select
                    options={discountOptions}
                    value={discountOptions.find(option => option.value === filters.discount)}
                    onChange={(selected) => setFilters(product, { ...filters, discount: selected?.value || "All prices" })}
                    classNames={{
                        indicatorSeparator: () => "hidden",
                        container: () => "relative z-5 w-full",
                    }}
                    styles={customSelectStyles}
                />
                <Select
                    options={countryOptions}
                    value={countryOptions.find(option => option.value === filters.country)}
                    onChange={(selected) => setFilters(product, { ...filters, country: selected?.value || "All countries" })}
                    classNames={{
                        indicatorSeparator: () => "hidden",
                        container: () => "relative z-5 w-full",
                    }}
                    styles={customSelectStyles}
                />
            </div>
        </motion.div>
    );
}

