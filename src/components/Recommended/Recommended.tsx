import arrRightSvg from '../../assets/arr-right-red.svg';
import arrLeftSvg from '../../assets/arr-left-red.svg';

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { KindOfProduct, IProduct, StructureConfig } from "../../architecture/Pruduct";

import descriptionGlassSVG from "../../assets/Product/glass.svg";
import descriptionOthersSVG from "../../assets/Product/structure.svg";
import descriptionFoodSVG from "../../assets/Product/food.svg";
import { Link } from "react-router-dom";
import { ProductPhoto } from "../ProductPhoto/ProductPhoto";
import { fetchProductById, fetchProductsByNameClass } from "../../api/product";
import { capitalizeFirstLetter, handleAddToCart } from "../../utils/utils";
import { alcoTypes, othersTypes } from "../../data/Other/ReusableProduct";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";
import { usePopupStore } from "../../store/popup";

export function Recommended({
    productFilter,
    filterByDiscount = false,
    structureConfig
}: {
    productFilter: KindOfProduct | "boxStructure",
    filterByDiscount?: boolean,
    structureConfig?: StructureConfig
}) {
    const swiperRef = useRef<any>(null);
    if (productFilter === "boxStructure" && structureConfig) {
        useEffect(() => {

            const loadProducts = async () => {
                for (const [kind, ids] of Object.entries(structureConfig)) {
                    for (const id of ids || []) {
                        const productData = await fetchProductById(capitalizeFirstLetter(kind), id);
                        if (productData) {
                            setProducts((prev) => [...(prev || []), productData]);
                        }
                    }
                }
            };

            loadProducts();

        }, [productFilter, structureConfig]);
    } else {
        const FilterProductsUpper = productFilter.charAt(0).toUpperCase() + productFilter.slice(1)
        useEffect(() => {
            const loadProducts = async () => {
                const productsData = await fetchProductsByNameClass(FilterProductsUpper);
                const filtered = filterByDiscount
                    ? productsData.filter(el => el.discount > 0)
                    : productsData;

                //! async price for box
                if (productFilter === "box") {
                    for (const product of filtered) {
                        await product.getAsyncPrice();
                    }
                }
                setProducts(filtered);
            };

            loadProducts();
        }, [productFilter, filterByDiscount]);
    }
    const [products, setProducts] = useState<IProduct[] | undefined>(undefined);
    const { open } = usePopupStore();
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className={(productFilter === "boxStructure" ? "" : "pt-[50px] pb-[100px] max-md:pt-[10px] max-md:pb-[50px]")}>
            <div className="myContainer">
                <div className="flex justify-between gap-1 items-center mb-[50px] max-md:mb-[20px]">
                    {productFilter !== "boxStructure" && <motion.h2 variants={textFromTopAnimation} className="text-[#121212] font-cormorant font-bold leading-normal uppercase fluid-text [--fmin:30] [--fmax:48]">Recommended products</motion.h2>}
                    {productFilter === "boxStructure" && <motion.h2 variants={textFromTopAnimation} className="text-[#121212] font-cormorant font-bold leading-normal uppercase fluid-text [--fmin:30] [--fmax:48]">Composition of Box</motion.h2>}
                    {!products && <p>Loading...</p>}
                    {products &&
                        <div className="flex gap-[20px] max-[400px]:flex-col">
                            <button
                                className={`swiper-button-prev-${productFilter}`}
                                onClick={() => swiperRef.current.swiper.slidePrev()}
                            >
                                <img src={arrLeftSvg} alt="prev" />
                            </button>
                            <button
                                className={`swiper-button-next-${productFilter}`}
                                onClick={() => swiperRef.current.swiper.slideNext()}
                            >
                                <img src={arrRightSvg} alt="next" />
                            </button>
                        </div>
                    }
                </div>
                {!products && <p>Loading...</p>}
                {products &&
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={20}
                        slidesPerView={4}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: `.swiper-button-prev-${productFilter}`,
                            nextEl: `.swiper-button-next-${productFilter}`,
                        }}
                        loop={productFilter === "boxStructure" ? false : true}
                        breakpoints={{
                            1280: { slidesPerView: 4 },
                            1024: { slidesPerView: 3 },
                            640: { slidesPerView: 2 },
                            480: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}>
                        {products.map((product: IProduct, index: number) => (
                            <SwiperSlide key={index} className="!flex !flex-col !items-stretch !p-[18px] !h-auto">
                                <div className="h-full mb-[10px] border-2 border-solid border-gray-300 p-[18px] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.5)] transitioned hover:scale-98">
                                    <Link to={`/${product.kindOfProduct.charAt(0).toUpperCase() + product.kindOfProduct.slice(1)}/${product.id}`}>
                                        <ProductPhoto product={product} />
                                        <div className="!mt-auto grid grid-rows-3 grid-cols-1 gap-[7px]">
                                            <h3 className="text-black font-inter font-medium leading-[1.2] uppercase fluid-text [--fmin:16] [--fmax:18]">{product.name}</h3>
                                            <div className="flex flex-col gap-[7px] flex-1">
                                                <p className="flex gap-2 items-center" key={index + "i"}>
                                                    <span className="w-[17px] h-[17px] flex-[0_0_17px]">
                                                        {alcoTypes.includes(product.kindOfProduct) && <img className="w-full h-full" src={descriptionGlassSVG} alt="descriptionGlassSVG" />}
                                                        {othersTypes.includes(product.kindOfProduct) && <img className="w-full h-full" src={descriptionFoodSVG} alt="descriptionFoodSVG" />}
                                                    </span>
                                                    <span className="text-black font-inter font-medium leading-[20px] uppercase fluid-text [--fmin:12] [--fmax:14]">{(Array.isArray(product.description)) ? product.description[0] : product.description}</span>
                                                </p>
                                                {Array.isArray(product.description) && (
                                                    <p className="flex gap-2 items-center" key={index + "j"}>
                                                        <span className="w-[17px] h-[17px] flex-[0_0_17px]">
                                                            <img className="w-full h-full" src={descriptionOthersSVG} alt="descriptionOthersSVG" />
                                                        </span>
                                                        <span className="text-black font-inter font-medium leading-[20px] uppercase fluid-text [--fmin:12] [--fmax:14]">{product.description[1]}</span>
                                                    </p>
                                                )}
                                            </div>
                                            <div className="flex gap-6 items-center">
                                                <h4 className="text-[#7a0000] font-inter font-semibold leading-[23px] fluid-text [--fmin:16] [--fmax:18]">{product.getDiscountedPrice()}$</h4>
                                                {(product.discount !== undefined && product.discount > 0) && <h4 className="text-[#00000075] text-[14px] font-inter font-semibold leading-[18px] line-through">{product.price}$</h4>}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                {productFilter !== "boxStructure" && (
                                    <button className="max-w-full text-white text-[16px] font-inter font-semibold leading-normal uppercase rounded-[3px] bg-[#7A0000] px-[64px] py-[15px] border-2 border-[#7A0000] transitioned hover:bg-transparent hover:text-[#7A0000]" onClick={() => { handleAddToCart(product); open("Notification", <p className="pb-5">{product.name} is added to Cart</p>) }}>Add to cart</button>
                                )}
                            </SwiperSlide >
                        ))
                        }
                    </Swiper >
                }

            </div >
        </motion.section >
    )
}