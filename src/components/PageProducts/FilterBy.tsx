import { useProduct } from "./PageProducts";
import { useFilterStore } from "../../store/filterProducts";
import { countryOptions, discountOptions } from "../../data/Other/ReusableProduct";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const triggerCls = "w-full !h-auto rounded-[7px] border border-[#7a0000] bg-[#7a0000] px-[25px] py-[20px] text-base font-medium text-white transition-shadow hover:shadow-[0_0_5px_rgba(122,0,0,1)] data-[popup-open]:bg-transparent data-[popup-open]:text-[#7a0000] data-[popup-open]:shadow-[0_0_5px_rgba(122,0,0,0.5)] [&_svg]:text-white data-[popup-open]:[&_svg]:text-[#7a0000]";
const itemCls = "px-[25px] py-2 text-base data-[highlighted]:bg-[rgba(122,0,0,0.5)] data-[highlighted]:text-white data-[selected]:bg-[rgba(122,0,0,0.8)] data-[selected]:text-white";

export function FilterBy() {
    const { product } = useProduct();
    const { filtersByType, setFilters } = useFilterStore();

    const filters = filtersByType[product] || { discount: "All prices", country: "All countries" };

    return (
        <motion.div initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="flex justify-between items-center gap-x-20 gap-y-4 pb-2 max-md:flex-col max-md:text-center">
            <motion.h3 variants={textFromTopAnimation} className="text-[#121212] font-cormorant font-bold leading-normal uppercase fluid-text [--fmin:36] [--fmax:48]">Add filters to find your best {product}: </motion.h3>
            <div className="flex gap-2 max-[420px]:flex-col">
                <Select
                    value={filters.discount}
                    onValueChange={(value) => setFilters(product, { ...filters, discount: (value as string) || "All prices" })}
                >
                    <SelectTrigger className={triggerCls} aria-label="Filter by discount">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {discountOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value} className={itemCls}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select
                    value={filters.country}
                    onValueChange={(value) => setFilters(product, { ...filters, country: (value as string) || "All countries" })}
                >
                    <SelectTrigger className={triggerCls} aria-label="Filter by country">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        {countryOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value} className={itemCls}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </motion.div>
    );
}
