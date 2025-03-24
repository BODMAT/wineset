import Select from "react-select";
import { Countries } from "../../data/OOPStructure/Pruduct";
import { useProduct } from "./PageProducts";
import styles from "./PageProducts.module.scss";
import { useFilterStore } from "../../store/filterProducts";
import { CSSObjectWithLabel, GroupBase, StylesConfig } from "react-select";

export function FilterBy() {
    const countries: Countries[] = [
        "Australia", "Bulgaria", "Canada", "England", "Finland", "France", "Greece", "Ireland", "Italy", "Japan", "Madagascar", "Poland", "Scotland", "Spain", "Sweden", "Switzerland", "Thailand", "Ukraine", "USA",
    ];

    const discountOptions = [
        { value: "All prices", label: "All prices" },
        { value: "With discount", label: "With discount" },
        { value: "Without discount", label: "Without discount" },
    ];

    const countryOptions = [
        { value: "All countries", label: "All countries" },
        ...countries.map((country) => ({ value: country, label: country })),
    ];

    const { product } = useProduct();
    const { filtersByType, setFilters } = useFilterStore();

    const filters = filtersByType[product] || { discount: "All prices", country: "All countries" };

    return (
        <div className="flex justify-between items-center gap-x-20 gap-y-4 pb-2 max-md:flex-col max-md:text-center">
            <h3 className={styles.basicTitle}>Add filters to find your best {product}: </h3>
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
        </div>
    );
}

interface CustomSelectStyles {
    control: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    singleValue: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    placeholder: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    dropdownIndicator: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    option: (base: CSSObjectWithLabel, state: any) => CSSObjectWithLabel;
    menu: (base: CSSObjectWithLabel) => CSSObjectWithLabel;
}

const customSelectStyles: StylesConfig<any, false, GroupBase<any>> & CustomSelectStyles = {
    control: (base, state) => ({
        ...base,
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "25px",
        paddingRight: "25px",
        borderRadius: "7px",
        fontWeight: "500",
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        borderColor: "#7a0000",
        boxShadow: state.selectProps.menuIsOpen ? "0 0 5px rgba(122, 0, 0, 0.5)" : "none",
        backgroundColor: state.selectProps.menuIsOpen ? "transparent" : "#7a0000",
        '&:hover': {
            boxShadow: "0 0 5px rgba(122, 0, 0, 1)",
        },
    }),
    singleValue: (base, state) => ({
        ...base,
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        whiteSpace: 'nowrap',
        overflow: 'visible',
        textOverflow: 'clip',
    }),
    placeholder: (base, state) => ({
        ...base,
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
    }),
    dropdownIndicator: (base, state) => ({
        ...base,
        color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        '&:hover': {
            color: state.selectProps.menuIsOpen ? "#7a0000" : "#fff",
        },
    }),
    option: (base, state) => ({
        ...base,
        zIndex: 6,
        color: state.isSelected ? "#fff" : "#000",
        backgroundColor: state.isSelected ? "rgba(122, 0, 0, 0.8)" : "transparent",
        '&:hover': {
            backgroundColor: state.isSelected ? "rgba(122, 0, 0, 0.8)" : "rgba(122, 0, 0, 0.5)",
            color: "#fff",
        },
    }),
    menu: (base) => ({
        ...base,
        zIndex: 6,
        '@media (max-width: 420px)': {
            position: 'relative',
        },
    }),
};
