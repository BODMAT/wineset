import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import searchSVG from "../../assets/search.svg";
import { useSearchStore } from "../../store/search";
import { IProduct } from "../../architecture/Pruduct";
import { capitalizeFirstLetter, isPage, isProduct } from "../../utils/utils";
import { PageRoute } from "../../types/interfaces";

export function Search() {
    const {
        fetchAndStoreAllProducts,
        setSearchQuery,
        searchQuery,
        matchedResults,
        isDropdownOpen,
        clearSearch,
    } = useSearchStore();

    const navigate = useNavigate();

    useEffect(() => {
        fetchAndStoreAllProducts();
    }, [fetchAndStoreAllProducts]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    const handleSelectProduct = (product: IProduct) => {
        if (product.id) {
            navigate(`/${capitalizeFirstLetter(product.kindOfProduct)}/${product.id}`);
            clearSearch();
        } else {
            console.error("Product ID is missing.");
        }
    };

    const handleNavigateToPage = (path: string) => {
        navigate(`/${path}`);
        clearSearch();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (matchedResults.length > 0) {
            const firstResult = matchedResults[0].value;

            if (isProduct(firstResult)) {
                // Це продукт
                const product = firstResult;
                navigate(`/${capitalizeFirstLetter(product.kindOfProduct)}/${product.id}`);
            } else if (isPage(firstResult)) {
                // Це сторінка
                const page = firstResult;
                navigate(`/${page.path}`);
            }

            clearSearch();
        }
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="relative z-20 flex items-center border-b-2 focus:outline-none border-b-white py-2 w-[calc(300px+2vw)]"
            autoComplete="off"
        >
            <input
                className="flex-1 py-2 text-white rounded-lg focus:outline-none"
                type="text"
                placeholder="Find a product or page..."
                value={searchQuery}
                onChange={handleInputChange}
            />
            <button className="ml-2 p-2 rounded-lg text-white hover:scale-110 transitioned" type="submit">
                <img src={searchSVG} alt="search" className="w-5 h-5" />
            </button>

            {isDropdownOpen && (
                <ul className="absolute mt-2 w-full top-[100%] bg-white border-2 border-gray-300 rounded-lg shadow-lg">
                    {matchedResults.map((result) => {
                        if (result.type === "product") {
                            const product = result.value as IProduct;
                            return (
                                <li
                                    key={`product-${product.id}`}
                                    onClick={() => handleSelectProduct(product)}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                >
                                    {product.name}
                                </li>
                            );
                        }

                        if (result.type === "page") {
                            const page = result.value as PageRoute;
                            return (
                                <li
                                    key={`page-${page.path}`}
                                    onClick={() => handleNavigateToPage(page.path)}
                                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                >
                                    📄 {page.label}
                                </li>
                            );
                        }

                        return null;
                    })}
                </ul>
            )}
        </form>
    );
}
