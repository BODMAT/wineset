import { create } from "zustand";
import { fetchAllProductsToSearch } from "../api/product";
import { SearchResult, SearchStore } from "../types/interfaces";
import { pageRoutes } from "../data/Other/Routes";


export const useSearchStore = create<SearchStore>((set, get) => ({
    allProducts: [],
    searchQuery: "",
    matchedResults: [],
    isDropdownOpen: false,

    fetchAndStoreAllProducts: async () => {
        const products = await fetchAllProductsToSearch();
        set({ allProducts: products });
    },

    setSearchQuery: (query) => {
        const trimmed = query.trim().toLowerCase();
        const all = get().allProducts;

        if (trimmed.length < 3) {
            set({ searchQuery: query, matchedResults: [], isDropdownOpen: false });
            return;
        }

        const normalize = (text: string) =>
            text.toLowerCase().split(/\s+/).filter(Boolean);

        const queryWords = trimmed.split(/[\s,]+/).filter(Boolean);

        // Пошук по продуктах
        const productMatches: SearchResult[] = all.map((product) => {
            const productWords = [
                ...normalize(product.name),
                ...normalize(product.kindOfProduct),
                ...(Array.isArray(product.description)
                    ? normalize(product.description.join(" "))
                    : normalize(product.description ?? ""))
            ];

            const score = queryWords.reduce((acc, word) => {
                for (const pWord of productWords) {
                    if (pWord === word) return acc + 3;
                    if (pWord.startsWith(word)) return acc + 2;
                    if (pWord.includes(word)) return acc + 1;
                }
                return acc;
            }, 0);

            return {
                type: "product" as const,
                value: product,
                score,
            };
        }).filter(r => r.score > 0);


        // Пошук по сторінках (тільки якщо повний збіг одного слова з path)
        const pageMatches: SearchResult[] = queryWords.length === 1
            ? pageRoutes
                .filter(route => route.path.toLowerCase().includes(queryWords[0])) // частковий збіг
                .map(route => ({
                    type: "page" as const,
                    value: route,
                    score: 100, // максимальний пріоритет
                }))
            : [];

        const combined = [...pageMatches, ...productMatches]
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);

        set({
            searchQuery: query,
            matchedResults: combined,
            isDropdownOpen: combined.length > 0,
        });
    },

    clearSearch: () => set({ searchQuery: "", matchedResults: [], isDropdownOpen: false }),
}));
