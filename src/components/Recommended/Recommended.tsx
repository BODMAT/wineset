import styles from "./Recommended.module.scss";
import arrRightSvg from '../../assets/arr-right-red.svg';
import arrLeftSvg from '../../assets/arr-left-red.svg';

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { KindOfProduct, IProduct, fetchProductsByNameClass } from "../../data/OOPStructure/Pruduct";

import descriptionGlassSVG from "../../assets/Product/glass.svg";
import descriptionOthersSVG from "../../assets/Product/structure.svg";
import descriptionFoodSVG from "../../assets/Product/food.svg";
import { Link } from "react-router-dom";
import { ProductPhoto } from "../ProductPhoto/ProductPhoto";

const alcoTypes: KindOfProduct[] = ["wine", "champagne", "whiskey", "vodka", "glass"];
const othersTypes: KindOfProduct[] = ["delicacy", "candle", "box", "cheese", "cookie", "sauce"];


export function Recommended({ productFilter, filterByDiscount = false }: { productFilter: KindOfProduct, filterByDiscount?: boolean }) {
    const swiperRef = useRef<any>(null);
    const FilterProductsUpper = productFilter.charAt(0).toUpperCase() + productFilter.slice(1)
    const [products, setProducts] = useState<IProduct[] | undefined>(undefined);

    useEffect(() => {
        const loadProducts = async () => {
            const productsData = await fetchProductsByNameClass(FilterProductsUpper);
            filterByDiscount ? productsData.filter(el => el.discount > 0) : productsData;
            setProducts(productsData);
        };

        loadProducts();
    }, [productFilter]);

    return (
        <section className="pt-[50px] pb-[100px] max-md:pt-[10px] max-md:pb-[50px]">
            <div className={styles.container}>
                <div className="flex justify-between gap-1 items-center mb-[50px] max-md:mb-[20px]">
                    <h2 className={styles.title}>Recommended products</h2>
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
                </div>
                {!products && <p className={styles.basicTitle}>Loading...</p>}
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
                        loop={true}
                        breakpoints={{
                            1280: { slidesPerView: 4 },
                            1024: { slidesPerView: 3 },
                            608: { slidesPerView: 2 },
                            480: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }}>
                        {products.map((product: IProduct, index: number) => (
                            <SwiperSlide key={index} className="!flex !flex-col !items-stretch !p-[18px] !h-auto">
                                <div className="h-full mb-[10px] border-2 border-solid border-gray-300 p-[18px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.5)] transitioned hover:scale-98">
                                    <Link to={`/${FilterProductsUpper}/${product.id}`}>
                                        <ProductPhoto product={product} />
                                        <div className="!mt-auto grid grid-rows-3 grid-cols-1 gap-[7px]">
                                            <h3 className={styles.label}>{product.name}</h3>
                                            <div className="flex flex-col gap-[7px] flex-1">
                                                <p className="flex gap-2 items-center" key={index + "i"}>
                                                    <span className="w-[17px] h-[17px] flex-[0_0_17px]">
                                                        {alcoTypes.includes(product.kindOfProduct) && <img className="w-full h-full" src={descriptionGlassSVG} alt="descriptionGlassSVG" />}
                                                        {othersTypes.includes(product.kindOfProduct) && <img className="w-full h-full" src={descriptionFoodSVG} alt="descriptionFoodSVG" />}
                                                    </span>
                                                    <span className={styles.description}>{(Array.isArray(product.description)) ? product.description[0] : product.description}</span>
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
                                                <h4 className={styles.price}>{product.getDiscountedPrice()}$</h4>
                                                {(product.discount !== undefined && product.discount > 0) && <h4 className={styles.prev_price}>{product.price}$</h4>}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <button className={styles.buttonBuy} onClick={() => { product.addToCart() }}>Add to cart</button>
                            </SwiperSlide >
                        ))
                        }
                    </Swiper >
                }

            </div >
        </section >
    )
}