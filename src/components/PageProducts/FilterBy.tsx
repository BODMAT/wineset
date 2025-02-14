import { Countries } from "../../data/OOPStructure/Pruduct";
import { useProduct } from "./PageProducts";
import styles from "./PageProducts.module.scss";
export function FilterBy({
    filters,
    onChange,
}: {
    filters: { discount: string; country: string };
    onChange: (newFilters: { discount: string; country: string }) => void;
}) {
    const countries: Countries[] = [
        "Australia",
        "Bulgaria",
        "Canada",
        "England",
        "Finland",
        "France",
        "Greece",
        "Ireland",
        "Italy",
        "Japan",
        "Madagascar",
        "Poland",
        "Scotland",
        "Spain",
        "Sweden",
        "Switzerland",
        "Thailand",
        "Ukraine",
        "USA",
    ];
    const { product } = useProduct();
    return (
        <div className="flex justify-between gap-20 pb-2">
            <div className={styles.basicTitle}>Add filters to find your best {product}: </div>
            <div className="flex gap-2">
                <select
                    className="pt-[20px] pb-[20px] pl-[25px] pr-[25px] border border-[#7a0000] rounded-[7px] font-medium text-[#7a0000]"
                    name="discount"
                    id="discount"
                    value={filters.discount}
                    onChange={(e) => onChange({ ...filters, discount: e.target.value })}
                >
                    <option value="All prices">All prices</option>
                    <option value="With discount">With discount</option>
                    <option value="Without discount">Without discount</option>
                </select>

                <select
                    className="pt-[20px] pb-[20px] pl-[25px] pr-[25px] border border-[#7a0000] rounded-[7px] font-medium text-[#7a0000]"
                    name="country"
                    id="country"
                    value={filters.country}
                    onChange={(e) => onChange({ ...filters, country: e.target.value })}
                >
                    <option value="All countries">All countries</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
