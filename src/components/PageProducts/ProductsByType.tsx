import { Button } from "@/components/ui/button";
import { Box, IProduct, IProductWithCartQuantity } from "../../architecture/Pruduct";
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
import { capitalizeFirstLetter } from "../../utils/utils";
import { alcoTypes, othersTypes } from "../../data/Other/ReusableProduct";
import { usePopupStore } from "../../store/popup";

const basicTitleCls = "text-[#121212] font-cormorant font-bold leading-normal uppercase fluid-text [--fmin:36] [--fmax:48]";
const labelCls = "text-black font-inter font-medium leading-[1.2] uppercase fluid-text [--fmin:16] [--fmax:18]";
const descriptionCls = "text-black font-inter font-medium leading-[20px] uppercase fluid-text [--fmin:12] [--fmax:14]";
const priceCls = "text-[#7a0000] font-inter font-semibold leading-[23px] fluid-text [--fmin:16] [--fmax:18]";
const prevPriceCls = "text-[#00000075] text-[14px] font-inter font-semibold leading-[18px] line-through";
const buyBtnCls = "max-w-full text-[16px] font-inter font-semibold leading-normal uppercase px-[64px] py-[15px] duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)]";

export function ProductsByType() {
    const { open } = usePopupStore()
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
                    await p.getAsyncPrice();
                }
                return p;
            })
        ).then(setProductsRerender);
    }, [filteredProducts]);

    function isToCartPossible(product: IProduct): boolean {
        if (product.id && product.quantity > 0) {
            const productInCart: IProductWithCartQuantity | undefined = findSameProductInCartById(product.id);
            if (productInCart && productInCart.cartQuantity && productInCart.cartQuantity < productInCart.quantity) {
                return true;
            } else if (!productInCart) {
                return true;
            }
        }
        return false
    }

    return (
        <section className="products mt-14 mb-10 max-lg:mt-7 max-lg:mb-7">
            <div className="myContainer">
                <FilterBy /> {/* Filter component */}
                <div className="flex gap-[20px] flex-wrap">
                    {isLoading && <p className={basicTitleCls}>Loading...</p>}
                    {!isLoading && filteredProducts.length === 0 && (
                        <p className={basicTitleCls}>Nothing found for the selected filters.</p>
                    )}
                    {!isLoading && filteredProducts.length > 0 &&
                        filteredProducts.map((product: IProduct, index: number) => (
                            <div
                                key={index}
                                className="!flex !flex-col !items-stretch !p-[18px] !h-auto flex-[0_1_calc(25%-15px)] max-xl:flex-[0_1_calc(33%-13.33px)] max-lg:flex-[0_1_calc(50%-10px)] max-sm:flex-[1_1_auto]"
                            >
                                <div className={"h-full mb-[10px] border-2 border-solid border-gray-300 p-[18px] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.5)] transitioned hover:scale-98" + " " + `${isToCartPossible(product) ? "" : "bg-gray-200"}`}>
                                    <Link to={`/${capitalizeFirstLetter(product.kindOfProduct)}/${product.id}`}>
                                        <ProductPhoto product={product} />
                                        <div className="!mt-auto grid grid-rows-3 grid-cols-1 gap-[7px]">
                                            <h3 className={labelCls}>{product.name}</h3>
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
                                                    <span className={descriptionCls}>
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
                                                        <span className={descriptionCls}>{product.description[1]}</span>
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex gap-6 items-center">
                                                {productsRerender && (
                                                    <>
                                                        <h4 className={priceCls}>
                                                            {product.getDiscountedPrice()}$
                                                        </h4>
                                                        {product.discount !== undefined && product.discount > 0 && (
                                                            <h4 className={prevPriceCls}>
                                                                {product.price}$
                                                            </h4>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {isToCartPossible(product) && (
                                    <Button
                                        variant="wine"
                                        size="free"
                                        className={buyBtnCls}
                                        onClick={() => { product.addToCart(); open("Notification", <p className="pb-5">{product.name} is added to Cart</p>) }}
                                    >
                                        Add to cart
                                    </Button>
                                )}
                                {!isToCartPossible(product) && (
                                    <Button
                                        variant="wine"
                                        size="free"
                                        className={buyBtnCls + " !bg-gray-200 !border-black !text-black"}
                                        disabled
                                    >
                                        Lack of quantity
                                    </Button>
                                )
                                }
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
