import styles from "./Recommended.module.scss";
import { CandlesExample } from "../../data/DataBase/Recommended";

import arrRightSvg from '../../assets/arr-right-red.svg';
import arrLeftSvg from '../../assets/arr-left-red.svg';

import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { KindOfProduct, IProduct } from "../../data/OOPStructure/Pruduct";

import descriptionSVG0 from "../../assets/Product/glass.svg";
import descriptionSVG1 from "../../assets/Product/structure.svg";
import { Link } from "react-router-dom";

export function Recommended({ productFilter }: { productFilter: KindOfProduct }) {
    const swiperRef = useRef<any>(null);
    const FilteredProducts = CandlesExample.filter((product: IProduct) => product.kindOfProduct === productFilter);

    return (
        <section className="pt-[50px] pb-[100px] max-md:pt-[10px] max-md:pb-[50px]">
            <div className={styles.container}>
                <div className="flex justify-between gap-1 items-center mb-[50px] max-md:mb-[20px]">
                    <h2 className={styles.title}>Recommended products</h2>
                    <div className="flex gap-[20px] max-[400px]:flex-col">
                        <button
                            className="swiper-button-prev"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className="swiper-button-next"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <img src={arrRightSvg} alt="next" />
                        </button>
                    </div>
                </div>
                <Swiper
                    ref={swiperRef}
                    spaceBetween={20}
                    slidesPerView={4}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: ".swiper-button-prev",
                        nextEl: ".swiper-button-next",
                    }}
                    loop={true}
                    breakpoints={{
                        1280: { slidesPerView: 4 },
                        1024: { slidesPerView: 3 },
                        768: { slidesPerView: 2 },
                        480: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}>
                    {FilteredProducts.map((product: IProduct, index: number) => (
                        <SwiperSlide key={index} className="p-[18px]">
                            {/*!!!id hash tooooo */}
                            <div className="mb-[10px] border-2 border-solid border-gray-300 p-[18px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.5)] transitioned hover:scale-98">
                                <Link to={`/${productFilter.charAt(0).toUpperCase() + productFilter.slice(1)}/${product.id}`}>
                                    <div className="relative flex justify-center mx-auto w-[100%] h-[305px] mb-[33px]">
                                        <img className="absolute w-[182px] h-[305px] object-cover" src={product.imageUrl} alt={product.imageUrl} />
                                        {product.discount !== undefined && product.discount > 0 && (
                                            <div className="absolute z-2 w-[48px] h-[48px] right-0 top-0 rounded-[50%] bg-[#7A0000] text-white flex justify-center items-center">-{product.discount}%</div>
                                        )}
                                        <img src="./Products/Texture.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain"></img>
                                    </div>
                                    <div className="">
                                        <h3 className={styles.label}>{product.name}</h3>
                                        <div className="mt-[16px] mb-[29px] flex flex-col gap-[7px]">
                                            {Array.isArray(product.description) && product.description.map((description: string, index: number) => (
                                                <p className="flex gap-2" key={index}>
                                                    <span>
                                                        <img src={index === 0 ? descriptionSVG0 : descriptionSVG1} alt={`descriptionSVG${index}`} />
                                                    </span>
                                                    <span className={styles.description}>{description}</span>
                                                </p>
                                            ))}
                                            {!Array.isArray(product.description) && <p>{product.description}</p>}
                                        </div>
                                        <div className="flex gap-6 items-center">
                                            <h4 className={styles.price}>{product.getDiscountedPrice()}$</h4>
                                            <h4 className={styles.prev_price}>{product.price}$</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <button className={styles.buttonBuy} onClick={() => { product.addToCart() }}>Add to cart</button>
                        </SwiperSlide >
                    ))
                    }
                </Swiper >
            </div >
        </section >
    )
}