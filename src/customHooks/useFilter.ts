import { useEffect, useState } from "react";
import { IProduct } from "../data/OOPStructure/Pruduct";
import { fetchProductsByNameClass } from "../data/DataBase/Firebase/firebaseAPI";

export function useFilter(productType: string) {
    const [products, setProducts] = useState<IProduct[] | undefined>(undefined);
    const [filteredProducts, setFilteredProducts] = useState<IProduct[] | undefined>(undefined);
    const [filters, setFilters] = useState({
        discount: "All prices",
        country: "All countries",
    });
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!productType) return;
        const loadProducts = async () => {
            try {
                setIsLoading(true);
                const productTypeToUpper = productType.charAt(0).toUpperCase() + productType.slice(1)
                const productsData = await fetchProductsByNameClass(productTypeToUpper);
                setProducts(productsData);
                setFilteredProducts(productsData);
            } catch (error) {
                console.error("Product boot error:", error);
            } finally {
                setIsLoading(false);
            }
        };
        loadProducts();
    }, [productType]);


    useEffect(() => {
        if (!products) return;
        let filtered = [...products];

        const discountFilterMap: Record<string, () => IProduct[]> = {
            "With discount": () => filtered.filter((p) => p.discount !== undefined && p.discount > 0),
            "Without discount": () => filtered.filter((p) => p.discount === undefined || p.discount === 0),
            "All prices": () => filtered,
        };

        filtered = (discountFilterMap[filters.discount] || (() => filtered))();

        if (filters.country !== "All countries") {
            filtered = filtered.filter((p) => p.country === filters.country);
        }
        setFilteredProducts(filtered);
    }, [filters, products]);

    return { filteredProducts: filteredProducts || [], filters, setFilters, isLoading };
}