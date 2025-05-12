import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/cart";
import styles from "./PageCart.module.scss";

import { useOpacity } from "../../hooks/useOpacity";
import { resolveImageUrl } from "../../utils/utils";
import { motion } from "framer-motion";
import { blockFromRightAnimation, textFromTopAnimation } from "../../utils/animations";
import { CartProducts } from "./CartProducts";
import { usePopupStore } from "../../store/popup";

export function Cart() {
    const { cartProducts, totalCartDiscount, totalCartPriceWithoutDiscount, totalCartPriceWithDiscount } = useCart();
    const { opacity, blockRef } = useOpacity();
    const navigate = useNavigate();
    const { open } = usePopupStore();

    function handleLinkWithCheck(link: string) {
        if (cartProducts.length > 0) {
            navigate(link);
        } else {
            open("Notification", <p className="pb-5">Firstly add items to Cart</p>)
        }
    }

    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2 }}
            ref={blockRef}
            className="relative"
        >
            <div className={styles.container}>
                <div className={"flex justify-between items-center gap-10 relative z-2 max-[1070px]:flex-col pt-10 pb-25"}>
                    <div>
                        <motion.h2 variants={textFromTopAnimation} className={`${styles.cartFont} pb-[50px] border-b-1 border-[#000]`}>
                            Cart ({cartProducts.length})
                        </motion.h2>
                        <CartProducts />
                    </div>
                    <motion.div custom={1} variants={blockFromRightAnimation} className="bg-[rgba(164,164,164,0.45)] px-[60px] py-[40px] flex flex-col lg:min-w-[600px]">
                        <div className="border-b-2 border-[rgb(95,95,95)] py-[25px]">
                            <h3 className={styles.orderTitleFont}>Your Order: </h3>
                            <div className="flex flex-col gap-[20px] mt-[30px]">
                                <div className="flex justify-between gap-3">
                                    <h6 className={styles.title}>Products</h6>
                                    <h6 className={styles.priceOrder}>{totalCartPriceWithoutDiscount}$</h6>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <h6 className={styles.title}>Discount</h6>
                                    <h6 className={styles.orderRedPrice}>-{totalCartDiscount}$</h6>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <h6 className={styles.title}>Bonuses discount</h6>
                                    <h6 className={styles.orderRedPrice}>-0$</h6>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <h6 className={styles.title}>Bonuses recieved</h6>
                                    <h6 className={styles.orderRedPrice}>+0$</h6>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-2 border-[rgb(95,95,95)] py-[25px] flex justify-between gap-3">
                            <h2 className={styles.orderFont}>Total</h2>
                            <h2 className={styles.orderFont}>{totalCartPriceWithDiscount}$</h2>
                        </div>
                        <div className="mt-[80px] flex justify-center">
                            <button onClick={() => handleLinkWithCheck("/Order")}>
                                <div className="text-center text-2xl bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[400px] px-[84px] py-[20px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]">
                                    Place an order
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div style={{ opacity: opacity }} className="absolute w-[902px] h-[509px] top-[60%] right-[-20%] rotate-180 max-[1070px]:top-[90%]">
                <img src={resolveImageUrl("./WineSpots/wine-spot-1.png")} alt="wine-spot-1" />
            </div>

        </motion.section>
    );
}
