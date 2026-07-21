import { useNavigate } from "react-router-dom";
import { useCart } from "../../store/cart";

import { useOpacity } from "../../hooks/useOpacity";
import { resolveImageUrl } from "../../utils/utils";
import { motion } from "framer-motion";
import { blockFromRightAnimation, textFromTopAnimation } from "../../utils/animations";
import { CartProducts } from "./CartProducts";
import { usePopupStore } from "../../store/popup";
import { useBonusStore } from "../../store/bonus";
import { BonusPopUp } from "../PopUps/BonusPopUp";
import { Button } from "@/components/ui/button";

const titleCls = "font-inter font-medium leading-[1.3] capitalize text-black fluid-text [--fmin:16] [--fmax:18]";
const orderRedPriceCls = "font-inter font-semibold leading-[1.3] capitalize text-center text-[#7a0000] fluid-text [--fmin:16] [--fmax:18]";
const orderFontCls = "font-inter font-semibold uppercase text-black fluid-text [--fmin:26] [--fmax:32]";
const priceOrderCls = "font-inter font-semibold leading-[1.3] capitalize text-center text-[#121212] fluid-text [--fmin:16] [--fmax:18]";

export function Cart() {
    const { cartProducts, totalCartDiscount, totalCartPriceWithoutDiscount, totalCartPriceWithDiscount } = useCart();
    const { bonusesYouCanUse, bonusesYouWillReceive } = useBonusStore();
    const { opacity, blockRef } = useOpacity();
    const navigate = useNavigate();
    const { open } = usePopupStore();

    function handleLinkWithCheck(link: string) {
        if (cartProducts.length > 0) {
            navigate(link);
        } else {
            open("Notification", <p className="pb-5">Firstly add items to Cart</p>);
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
            <div className="myContainer">
                <div className={"flex justify-between items-center gap-10 relative z-2 max-[1070px]:flex-col pt-10 pb-25"}>
                    <div>
                        <motion.h2 variants={textFromTopAnimation} className="font-cormorant font-bold uppercase text-[#121212] tracking-[0.05em] fluid-text [--fmin:40] [--fmax:48] pb-[50px] border-b-1 border-[#000]">
                            Cart ({cartProducts.length})
                        </motion.h2>
                        <CartProducts />
                    </div>
                    <motion.div custom={1} variants={blockFromRightAnimation} className="bg-[rgba(164,164,164,0.45)] px-[60px] py-[40px] flex flex-col lg:min-w-[600px]">
                        <div className="border-b-2 border-[rgb(95,95,95)] py-[25px]">
                            <h3 className="font-inter font-semibold capitalize text-[#121212] fluid-text [--fmin:22] [--fmax:26]">Your Order: </h3>
                            <div className="flex flex-col gap-[20px] mt-[30px]">
                                <div className="flex justify-between gap-3">
                                    <h6 className={titleCls}>Products</h6>
                                    <h6 className={priceOrderCls}>{totalCartPriceWithoutDiscount}$</h6>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <h6 className={titleCls}>Discount</h6>
                                    <h6 className={orderRedPriceCls}>-{totalCartDiscount}$</h6>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <button
                                        onClick={() => { open("About Bonus System", <BonusPopUp />) }}
                                        className={`${titleCls} transitioned !text-[#7a0000] hover:underline cursor-pointer text-left`}>Bonuses discount available</button>
                                    <h6 className={orderRedPriceCls}>-{bonusesYouCanUse}$</h6>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <h6 className={titleCls}>Bonuses recieved</h6>
                                    <h6 className={orderRedPriceCls}>+{bonusesYouWillReceive}$</h6>
                                </div>
                            </div>
                        </div>
                        <div className="border-b-2 border-[rgb(95,95,95)] py-[25px] flex justify-between gap-3">
                            <h2 className={orderFontCls}>Total</h2>
                            <h2 className={orderFontCls}>{(Math.max(totalCartPriceWithDiscount - bonusesYouCanUse, 0).toFixed(2))}$</h2>
                        </div>
                        <div className="mt-[80px] flex justify-center">
                            <Button variant="wine" size="free" onClick={() => handleLinkWithCheck("/Order")} className="text-center text-2xl font-semibold max-w-[400px] px-[84px] py-[20px] duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)]">
                                Place an order
                            </Button>
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
