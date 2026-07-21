import arrRightSvg from '../../../assets/arr-right-red.svg';
import arrLeftSvg from '../../../assets/arr-left-red.svg';
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { Box } from "../../../architecture/Pruduct";
import { fetchProductsByNameClass } from "../../../api/product";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../../utils/animations";


export function GiftBackets() {
    const swiperRef = useRef<any>(null);
    const FilterProductsUpper = "Box";
    const [products, setProducts] = useState<any[] | undefined>(undefined);
    const [productsInfo, setProductsInfo] = useState<any[] | undefined>(undefined);

    useEffect(() => {
        const loadProducts = async () => {
            const productsData = await fetchProductsByNameClass(FilterProductsUpper);
            setProducts(productsData);

            const productsInfoData = await Promise.all(
                productsData.map(async (product) => {
                    const productInfo = await product.fetchProductInfo();
                    return productInfo;
                })
            );
            setProductsInfo(productsInfoData);
        };

        loadProducts();
    }, []);

    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="pt-[100px] pb-[90px]">
            <div className="myContainer">
                <div className="flex justify-between items-center mb-[47px]">
                    <motion.h2 variants={textFromTopAnimation} className="text-[#121212] font-cormorant font-bold uppercase fluid-text [--fmin:30] [--fmax:48]">Gift baskets</motion.h2>
                    <div className="flex gap-5 max-[379.98px]:gap-2.5">
                        <button
                            className="bg-transparent swiper-button-prev"
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className="bg-transparent swiper-button-next"
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <img src={arrRightSvg} alt="next" />
                        </button>
                    </div>
                </div>
                {!products && <p>Loading...</p>}
                {products && (
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={50}
                        slidesPerView={2}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: ".swiper-button-prev",
                            nextEl: ".swiper-button-next",
                        }}
                        loop={true}
                        breakpoints={{
                            970: { slidesPerView: 2 },
                            480: { slidesPerView: 1 },
                            0: { slidesPerView: 1 },
                        }} className="h-full mb-[30px] min-h-full [&>*]:h-full [&>*]:flex [&>*]:items-stretch">
                        {products.map((box: Box, index: number) => {
                            const productInfo = productsInfo ? productsInfo[index] : null;

                            return (
                                <SwiperSlide key={index} className="flex! flex-col items-stretch h-auto! grow self-stretch py-[11px] border-[3px] border-[#a4a4a4a0] cursor-pointer transitioned hover:scale-95 hover:shadow-[0_5px_15px_5px_rgba(0,0,0,.3)]">
                                    <Link className="flex flex-col grow h-full" to={`/Box/${box.id}`}>
                                        <div>
                                            <div className="flex-[0_0_377px] h-[377px] w-auto relative">
                                                <img className="absolute w-full h-full top-0 left-0 object-contain" src={box.imageUrl} alt={box.imageUrl} />
                                            </div>
                                            <div className="mb-auto p-[15px] grow flex flex-col">
                                                <h3 className="flex text-black font-inter font-semibold leading-normal mb-[25px] fluid-text [--fmin:18] [--fmax:20]">{box.name}</h3>
                                                <div className="grow flex flex-col text-black font-inter font-normal leading-normal gap-2.5">
                                                    <span className="font-semibold">Composition: </span>
                                                    <ul className="mt-auto pt-[7px] pl-5 flex flex-col gap-[5px]">
                                                        {!productInfo && <p>Loading...</p>}
                                                        {productInfo?.structureInfo?.map((info: any, idx: number) => (
                                                            <li className="list-[circle] font-normal" key={idx}>
                                                                <strong>{info.name}</strong>: {info.description} (Maker: {info.maker}, {info.weightOrVolume})
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
                <Link to="/Gift-sets/Boxes" className="text-[#970000] font-inter font-bold leading-normal hover:underline">View all</Link>
            </div>
        </motion.section>
    );
}
