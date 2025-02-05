import styles from "./Recommended.module.scss";
import arrRightSvg from '../../assets/arr-right-red.svg';
import arrLeftSvg from '../../assets/arr-left-red.svg';

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { KindOfProduct, IProduct, Wine, Champagne, Whiskey, Vodka, Delicacies, Glasses, Candles, Cheese, Cookies, Sauce, Box } from "../../data/OOPStructure/Pruduct";

import descriptionSVG0 from "../../assets/Product/glass.svg";
import descriptionSVG1 from "../../assets/Product/structure.svg";
import { Link } from "react-router-dom";

import { db, collection, getDocs } from '../../firebaseConfig';

//to create an instance of a product
const productClassesMap: Record<KindOfProduct, new (data: any) => IProduct> = {
    wine: Wine,
    champagne: Champagne,
    whiskey: Whiskey,
    vodka: Vodka,
    delicacies: Delicacies,
    glasses: Glasses,
    candles: Candles,
    cheese: Cheese,
    cookies: Cookies,
    sauce: Sauce,
    box: Box,
};

function createProductInstance(data: any): IProduct {
    const { kindOfProduct, ...rest } = data as { kindOfProduct: KindOfProduct };

    const ProductClass = productClassesMap[kindOfProduct];

    if (!ProductClass) {
        throw new Error(`Unsupported product type: ${kindOfProduct}`);
    }

    return new ProductClass(rest);
}

export function Recommended({ productFilter }: { productFilter: KindOfProduct }) {
    const swiperRef = useRef<any>(null);
    const FilterProductsUpper = productFilter.charAt(0).toUpperCase() + productFilter.slice(1)

    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, 'Products', FilterProductsUpper, 'items'));
            const productsList: IProduct[] = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                try {
                    const productInstance = createProductInstance(data);
                    if (productInstance.discount !== undefined && productInstance.discount > 0) {
                        productsList.push(productInstance);
                    }
                } catch (error) {
                    console.error(`Error creating product instance`);
                }
            });

            setProducts(productsList);
        };

        fetchProducts();
    }, [productFilter]);

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
                    {products.map((product: IProduct, index: number) => (
                        <SwiperSlide key={index} className="p-[18px]">
                            <div className="mb-[10px] border-2 border-solid border-gray-300 p-[18px] hover:shadow-[0px_15px_40px_rgba(0,0,0,0.5)] transitioned hover:scale-98">
                                <Link to={`/${FilterProductsUpper}/${product.id}`}>
                                    <div className="">
                                        <div className="relative flex justify-center mx-auto w-[100%] h-[305px] mb-[33px]">
                                            <img className="absolute w-[182px] h-[305px] object-cover" src={product.imageUrl} alt={product.imageUrl} />
                                            {product.discount !== undefined && product.discount > 0 && (
                                                <div className="absolute z-2 w-[48px] h-[48px] right-0 top-0 rounded-[50%] bg-[#7A0000] text-white flex justify-center items-center">-{product.discount}%</div>
                                            )}
                                            {product.country === "France" && (<img src="./Products/TextureFrance.png" alt="Texture" className=" absolute w-[100%] h-[100%] object-contain"></img>)}
                                            {product.country === "Italy" && (<img src="./Products/TextureItaly.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain"></img>)}
                                        </div>
                                        <div className="grid grid-rows-3 grid-cols-1 gap-[7px]">
                                            <h3 className={styles.label}>{product.name}</h3>
                                            <div className="flex flex-col gap-[7px] flex-1">
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