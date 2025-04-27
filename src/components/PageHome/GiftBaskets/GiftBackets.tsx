import styles from "./GiftBackets.module.scss";
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
            className={styles.gift}>
            <div className={styles.gift__container}>
                <div className={styles.gift__top}>
                    <motion.h2 variants={textFromTopAnimation} className={styles.gift__title}>Gift baskets</motion.h2>
                    <div className={styles.gift__buttons}>
                        <button
                            className={`${styles.gift__prev} swiper-button-prev`}
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <img src={arrLeftSvg} alt="prev" />
                        </button>
                        <button
                            className={`${styles.gift__next} swiper-button-next`}
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
                        }} className={styles.gift__slider}>
                        {products.map((box: Box, index: number) => {
                            const productInfo = productsInfo ? productsInfo[index] : null;

                            return (
                                <SwiperSlide key={index} className={styles.gift__slide}>
                                    <Link className={styles.gift__slide_wrap} to={`/Box/${box.id}`}>
                                        <div className="">
                                            <div className={styles.gift__slide_img}>
                                                <img src={box.imageUrl} alt={box.imageUrl} />
                                            </div>
                                            <div className={styles.gift__slide_content}>
                                                <h3 className={styles.gift__slide_name}>{box.name}</h3>
                                                <div className={styles.gift__slide_structure}>
                                                    <span>Composition: </span>
                                                    <ul className={styles.gift__slide_list}>
                                                        {!productInfo && <p>Loading...</p>}
                                                        {productInfo?.structureInfo?.map((info: any, idx: number) => (
                                                            <li className={styles.gift__slide_li} key={idx}>
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
                <Link to="/Gift-sets/Boxes" className={styles.gift__link}>View all</Link>
            </div>
        </motion.section>
    );
}
