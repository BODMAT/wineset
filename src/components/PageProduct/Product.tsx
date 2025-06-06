import { Box, IProduct, IProductWithCartQuantity } from "../../architecture/Pruduct";
import ShareSVG from "../../assets/Product/share.svg";

import HeartSVG from "../../assets/Product/heart.svg";
import HeartAddedSVG from "../../assets/Product/heart-added.svg";

import { copyAndGetCurrentUrl } from "../../utils/utils";
import { useEffect, useState } from "react";
import { useCart } from "../../store/cart";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";
import { blockFromRightAnimation, textFromTopAnimation } from "../../utils/animations";
import { usePopupStore } from "../../store/popup";
import { PhotoByCountries } from "./PhotoByCountries";
import { ProductPhoto } from "../ProductPhoto/ProductPhoto";
import { ProductCharacteristics } from "./ProductCharacteristics";
import { useWishlist } from "../../store/wishlist";
import { useAuthStore } from "../../store/auth";

export function Product({ product }: { product: IProduct }) {
    const [productQuantity, setProductQuantity] = useState(1);
    const { findSameProductInCartById } = useCart();
    const { opacity, blockRef } = useOpacity();
    const { open } = usePopupStore();
    const [buttonText, setButtonText] = useState<string>("To Cart")

    function changeProductQuantity(
        product: IProduct,
        direction: "increase" | "decrease",
        updateQuantity: () => void
    ): void {
        if (!product.id) return;

        const productInCart = findSameProductInCartById(product.id);
        const cartQty = productInCart?.cartQuantity ?? 0;
        const totalQty = cartQty + productQuantity;

        if (direction === "decrease") {
            if (productQuantity > 1) {
                updateQuantity();
                setButtonText("To Cart");
            } else {
                setButtonText("Lack of quantity");
            }
            return;
        }

        // direction === "increase"
        if (totalQty < product.quantity) {
            updateQuantity();
            setButtonText("To Cart");
        } else {
            setButtonText("Max of quantity");
            open("Notification 1", <p className="mb-5">Lack of stock</p>, false);
        }
    }


    function handleAddToCart(product: IProductWithCartQuantity): void {
        if (product.id && product.quantity >= 0) {
            const productInCart: IProductWithCartQuantity | undefined = findSameProductInCartById(product.id);
            if (productInCart && productInCart.cartQuantity && productInCart.cartQuantity + productQuantity <= productInCart.quantity) {
                product.addToCart(productQuantity); setProductQuantity(1);
                open("Cart Updated", <p className="mb-5">{productQuantity} {product.name} added to Cart!</p>, false);
                return
            }
            if (!productInCart && productQuantity < product.quantity) {
                product.addToCart(productQuantity); setProductQuantity(1);
                open("Cart Updated", <p className="mb-5">{productQuantity} {product.name} added to Cart!</p>, false);
                return
            }
            setButtonText("Lack of quantity")
            open("Notification 2", <p className="mb-5">Lack of stock</p>, false);
        }
    }

    const [productRerender, setProductRerender] = useState<IProduct | undefined>(undefined);
    useEffect(() => {
        if (product instanceof Box) {
            product.getAsyncPrice().then(() => setProductRerender(product));
        } else {
            setProductRerender(product);
        }
    }, [product]);

    const { addToWishlist, removeFromWishlist, wishlistIds } = useWishlist();
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [heartImg, setHeartImg] = useState<string>(HeartSVG);

    useEffect(() => {
        const isProductInWishlist = wishlistIds.some(([id]) => id === product.id);
        setIsInWishlist(isProductInWishlist);
        setHeartImg(isProductInWishlist ? HeartAddedSVG : HeartSVG);
    }, [wishlistIds, product.id]);

    const { user } = useAuthStore();
    const handleWishlistToggle = () => {
        if (!user) {
            open("Notification wishlist", <p className="mb-5">Before adding product to wishlist, please Sign In to your account</p>, false);
        } else {
            if (isInWishlist) {
                removeFromWishlist(product);
                setHeartImg(HeartSVG)
            } else {
                addToWishlist(product);
                setHeartImg(HeartAddedSVG)
            }
            setIsInWishlist(!isInWishlist);
        }
    };

    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className="pt-[50px] relative">
            <div className="myContainer relative z-2">
                {/* top */}
                <div className="flex justify-between gap-7 items-center mb-[60px] max-sm:flex-col max-sm:mb-[30px]">
                    <div className="flex flex-col gap-[30px] items-start">
                        <div className="font-medium !text-[14px] tracking-wider uppercase text-[#7a0000] font-[Inter] px-[30px] py-[16px] rounded-[100px] border-2 border-[#7a0000] max-sm:mx-auto">CHOICE OF BUYERS</div>
                        <motion.h1 variants={textFromTopAnimation} className="font-semibold !text-[56px] uppercase text-black font-[Cormorant] max-md:!text-[40px] max-[550px]:!text-[32px] max-sm:text-center">{product.name}</motion.h1>
                    </div>
                    <div className="flex gap-[25px] items-center">
                        <button onClick={() => {
                            open("Notification", <p className="mb-5">Link has been succesfully copied to clipboard.</p>, false); copyAndGetCurrentUrl()
                        }}
                            className="transitioned hover:scale-110">
                            <img src={ShareSVG} alt="share" />
                        </button>
                        <button onClick={handleWishlistToggle}
                            className="transitioned hover:scale-110">
                            <img src={heartImg} alt="wishlist togle" />
                        </button>
                    </div>
                </div>

                {/* bottom */}
                <div className="flex justify-between gap-7 items-start max-xl:flex-col max-xl:justify-center">
                    {/* Product */}
                    <div className="flex gap-[40px] w-full items-center max-md:flex-col max-md:justify-center max-md:text-center">
                        <PhotoByCountries country={product.country} />
                        <ProductPhoto product={product} imageSize={600} />
                        <ProductCharacteristics product={product} />
                    </div>
                    {/* Prices */}
                    <motion.div custom={1} variants={blockFromRightAnimation} className="bg-[rgba(164,164,164,0.25)] py-[40px] px-[60px] min-w-[450px] max-xl:mx-auto max-[500px]:flex max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-[20px] max-[500px]:min-w-full">
                        {productRerender && productRerender.price !== productRerender.getDiscountedPrice() && (
                            <h3 className="font-[Inter] font-semibold !text-[18px] line-through text-[rgba(20,20,20,0.35)]">{(productRerender.price * productQuantity).toFixed(2)} $</h3>
                        )}

                        {productRerender && (
                            <div className="flex gap-[30px] items-center mb-[50px] max-[500px]:mb-0 max-[500px]:flex-col ">
                                <h2 className="font-[Inter] font-semibold !text-[32px] text-[#7a0000] max-md:!text-[26px]">{(productRerender.getDiscountedPrice() * productQuantity).toFixed(2)} $</h2>

                                {productRerender && productRerender.price !== productRerender.getDiscountedPrice() && (
                                    <h3 className="font-[Inter] font-medium !text-[14px] tracking-[0.05em] uppercase text-white px-[20px] py-[14px] bg-[#000] rounded">-{product.discount}%</h3>
                                )}
                            </div>
                        )}

                        <div className="flex gap-[26px] items-center max-[500px]:flex-col">
                            {/* Counter */}
                            <div className="font-[Inter] bg-[#F9F9FC] h-[50px] flex items-center justify-between">
                                <button
                                    className="p-[10px] text-2xl hover:bg-[#9f9f9f] transitioned"
                                    onClick={() =>
                                        changeProductQuantity(product, "decrease", () =>
                                            setProductQuantity(prev => Math.max(prev - 1, 1))
                                        )
                                    }
                                >
                                    -
                                </button>

                                <div className="px-[20px]">{productQuantity}</div>

                                <button
                                    className="p-[10px] text-2xl hover:bg-[#9f9f9f] transitioned"
                                    onClick={() =>
                                        changeProductQuantity(product, "increase", () =>
                                            setProductQuantity(prev => Math.min(prev + 1, product.quantity))
                                        )
                                    }
                                >
                                    +
                                </button>
                            </div>
                            {/* BTN */}
                            <button className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]" onClick={() => { handleAddToCart(product) }}>{buttonText}</button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[702px] h-[509px] bottom-[10%] right-[-10%] rotate-180 max-lg:bottom-[-10%] max-md:right-[-50%] max-md:bottom-[0]">
                <img src={`${import.meta.env.BASE_URL}WineSpots/wine-spot-1.png`} alt="wine-spot-1" />
            </div>
        </motion.section>
    );
}
