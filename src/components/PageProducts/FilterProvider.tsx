import { createContext, useContext } from "react";
import { useFilter } from "../../customHooks/useFilter";

type FilterContextType = ReturnType<typeof useFilter>;

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilterContext = () => {
    const context = useContext(FilterContext);
    if (!context) {
        throw new Error("useFilterContext must be used within a FilterProvider");
    }
    return context;
};

export const FilterProvider = ({ productType, children }: { productType: string; children: React.ReactNode }) => {
    const filterData = useFilter(productType);
    return <FilterContext.Provider value={filterData}>{children}</FilterContext.Provider>;
};
