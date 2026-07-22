import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, IProduct, IProductWithCartQuantity } from "../../architecture/Pruduct";
import { useCart } from "../../store/cart";
import { usePopupStore } from "../../store/popup";
import { blockFromRightAnimation } from "../../utils/animations";

/** Price block with the quantity counter and the add-to-cart action. */
export function ProductPurchasePanel({ product }: { product: IProduct }) {
    const [productQuantity, setProductQuantity] = useState(1);
    const [buttonText, setButtonText] = useState<string>("To Cart");
    const [productRerender, setProductRerender] = useState<IProduct | undefined>(undefined);
    const { findSameProductInCartById } = useCart();
    const { open } = usePopupStore();

    useEffect(() => {
        if (product instanceof Box) {
            product.getAsyncPrice().then(() => setProductRerender(product));
        } else {
            setProductRerender(product);
        }
    }, [product]);

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

    return (
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
    );
}
