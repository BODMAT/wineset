import styles from "./PageProducts.module.scss";
import { alcoTypes, Box, IProduct, IProductWithCartQuantity, othersTypes } from "../../data/OOPStructure/Pruduct";
import { Link } from "react-router-dom";
import { ProductPhoto } from "../ProductPhoto/ProductPhoto";
import descriptionGlassSVG from "../../assets/Product/glass.svg";
import descriptionOthersSVG from "../../assets/Product/structure.svg";
import descriptionFoodSVG from "../../assets/Product/food.svg";
import { FilterBy } from "./FilterBy";
import { useEffect, useState } from "react";
import { useFilterStore } from "../../store/filterProducts";
import { useProduct } from "./PageProducts";
import { useCart } from "../../store/cart";

export function ProductsByType() {
    const { product } = useProduct();
    const { filteredProductsByType, loadProductsByType, isLoading } = useFilterStore();
    const [productsRerender, setProductsRerender] = useState<IProduct[] | undefined>(undefined);
    const { findSameProductInCartById } = useCart();
    useEffect(() => {
        loadProductsByType([product]);
    }, [product, loadProductsByType]);

    const filteredProducts = filteredProductsByType[product] || [];

    // Update products for rerendering (e.g., price calculation)
    useEffect(() => {
        Promise.all(
            filteredProducts.map(async (p) => {
                if (p instanceof Box) {
                    await p.getPrice();
                }
                return p;
            })
        ).then(setProductsRerender);
    }, [filteredProducts]);

    function capitalizeFirstLetter(str: string): string {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function isButtonToCartPossible(product: IProduct): boolean {
        if (product.id && product.quantity > 0) {
            const productInCart: IProductWithCartQuantity | undefined = findSameProductInCartById(product.id);
            if (productInCart && productInCart.cartQuantity && productInCart.cartQuantity < productInCart.quantity) {
                return true;
            } else if (!productInCart) {
                return true; //ще не доданий
            }
        }
        return false
    }

    return (
        <section className="products mt-14 mb-10 max-lg:mt-7 max-lg:mb-7">
            <div className={styles.container}>
                <FilterBy /> {/* Filter component */}
                <div className="flex gap-[20px] flex-wrap">
                    {isLoading && <p className={styles.basicTitle}>Loading...</p>}
                    {!isLoading && filteredProducts.length === 0 && (
                        <p className={styles.basicTitle}>Nothing found for the selected filters.</p>
                    )}
                    {!isLoading && filteredProducts.length > 0 &&
                        filteredProducts.map((product: IProduct, index: number) => (
                            <div
                                key={index}
                                className="!flex !flex-col !items-stretch !p-[18px] !h-auto flex-[0_1_calc(25%-15px)] max-xl:flex-[0_1_calc(33%-13.33px)] max-lg:flex-[0_1_calc(50%-10px)] max-sm:flex-[1_1_auto]"
                            >
                                <div className="h-full mb-[10px] border-2 border-solid border-gray-300 p-[18px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.5)] transitioned hover:scale-98">
                                    <Link to={`/${capitalizeFirstLetter(product.kindOfProduct)}/${product.id}`}>
                                        <ProductPhoto product={product} />
                                        <div className="!mt-auto grid grid-rows-3 grid-cols-1 gap-[7px]">
                                            <h3 className={styles.label}>{product.name}</h3>
                                            <div className="flex flex-col gap-[7px] flex-1">
                                                <p className="flex gap-2 items-center" key={index + "i"}>
                                                    <span className="w-[17px] h-[17px] flex-[0_0_17px]">
                                                        {alcoTypes.includes(product.kindOfProduct) && (
                                                            <img className="w-full h-full" src={descriptionGlassSVG} alt="descriptionGlassSVG" />
                                                        )}
                                                        {othersTypes.includes(product.kindOfProduct) && (
                                                            <img className="w-full h-full" src={descriptionFoodSVG} alt="descriptionFoodSVG" />
                                                        )}
                                                    </span>
                                                    <span className={styles.description}>
                                                        {Array.isArray(product.description)
                                                            ? product.description[0]
                                                            : product.description}
                                                    </span>
                                                </p>
                                                {Array.isArray(product.description) && (
                                                    <p className="flex gap-2 items-center" key={index + "j"}>
                                                        <span className="w-[17px] h-[17px] flex-[0_0_17px]">
                                                            <img className="w-full h-full" src={descriptionOthersSVG} alt="descriptionOthersSVG" />
                                                        </span>
                                                        <span className={styles.description}>{product.description[1]}</span>
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex gap-6 items-center">
                                                {productsRerender && (
                                                    <>
                                                        <h4 className={styles.price}>
                                                            {product.getDiscountedPrice()}$
                                                        </h4>
                                                        {product.discount !== undefined && product.discount > 0 && (
                                                            <h4 className={styles.prev_price}>
                                                                {product.price}$
                                                            </h4>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {isButtonToCartPossible(product) && (
                                    <button
                                        className={styles.buttonBuy}
                                        onClick={() => product.addToCart()}
                                    >
                                        Add to cart
                                    </button>
                                )}
                                {!isButtonToCartPossible(product) && (
                                    <button
                                        className={styles.buttonBuy}
                                        disabled
                                    >
                                        Lack of quantity
                                    </button>
                                )
                                }
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
