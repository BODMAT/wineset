import { create } from "zustand";
import { IProduct } from "../architecture/Pruduct";
import { fetchProductsByNameClass } from "../api/firebaseAPI";
import { IFilterState } from "../types/interfaces";

export const useFilterStore = create<IFilterState>((set) => ({
    productsByType: {},
    filteredProductsByType: {},
    filtersByType: {},
    isLoading: false,

    setFilters: (productType, filters) => {
        set((state) => {
            const products = state.productsByType[productType] || [];
            let filtered = [...products];

            const discountFilterMap: Record<string, () => IProduct[]> = {
                "With discount": () =>
                    filtered.filter(
                        (p) => p.discount !== undefined && p.discount > 0
                    ),
                "Without discount": () =>
                    filtered.filter(
                        (p) => p.discount === undefined || p.discount === 0
                    ),
                "All prices": () => filtered,
            };

            filtered = (discountFilterMap[filters.discount] || (() => filtered))();

            if (filters.country !== "All countries") {
                filtered = filtered.filter((p) => p.country === filters.country);
            }

            return {
                ...state,
                filtersByType: { ...state.filtersByType, [productType]: filters },
                filteredProductsByType: { ...state.filteredProductsByType, [productType]: filtered },
            };
        });
    },

    loadProductsByType: async (productTypes) => {
        set({ isLoading: true });

        try {
            const productsByType: Record<string, IProduct[]> = {};

            for (const type of productTypes) {
                const productTypeToUpper =
                    type.charAt(0).toUpperCase() + type.slice(1);
                const productsData = await fetchProductsByNameClass(productTypeToUpper);
                productsByType[type] = productsData;
            }

            set({
                productsByType,
                filteredProductsByType: productsByType,
                isLoading: false,
            });
        } catch (error) {
            console.error("Product boot error:", error);
            set({ isLoading: false });
        }
    },
}));
