import { Link } from "react-router-dom";
import { IProductWithCartQuantity } from "../../architecture/Pruduct"
import { useCart } from "../../store/cart"
import styles from "./PageCart.module.scss"
import wishSVG from "../../assets/wish.svg"
import { AsyncProductPrices } from "./AsyncProductPrices";
import { useOpacity } from "../../hooks/useOpacity";
import { capitalizeFirstLetter } from "../../utils/utils";
import { motion } from "framer-motion";
import { blockFromRightAnimation, textFromTopAnimation } from "../../utils/animations";
export function Cart() {
    const { cartProducts, totalCartDiscount, totalCartPriceWithoutDiscount, totalCartPriceWithDiscount } = useCart();
    const { opacity, blockRef } = useOpacity()

    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.2 }}
            ref={blockRef}
            className="relative">
            <div className={styles.container}>
                <div className="pt-10 pb-25 flex justify-between items-center gap-10 relative z-2 max-[1070px]:flex-col">
                    {/* changable cart */}
                    <div className="">
                        <motion.h2 variants={textFromTopAnimation} className={`${styles.cartFont} pb-[50px] border-b-1 border-[#000]`}>Cart ({cartProducts.length})</motion.h2>
                        {/* items */}
                        {cartProducts.map((cartItem: IProductWithCartQuantity, index: number) => (
                            typeof cartItem.getDiscountedPrice === "function" && typeof cartItem.getPrice === "function" && (

                                <div key={`${cartItem.id}-${index}`} className="flex justify-between gap-10 border-b-1 border-[#000] pt-[20px] pb-[20px] max-[400px]:gap-2">
                                    {/* left side */}
                                    <div className="flex gap-4 items-center">
                                        <Link to={`/${capitalizeFirstLetter(cartItem.kindOfProduct)}/${cartItem.id}`}>
                                            <div className="relative flex justify-center mx-auto w-[155px] h-[155px] max-[400px]:w-[100px] max-[400px]:h-[100px]">
                                                <img className="absolute w-full h-full object-contain" src={cartItem.imageUrl} alt={cartItem.imageUrl} />
                                            </div>
                                        </Link>

                                        <div className="flex justify-between flex-col">
                                            <div className="flex flex-col">
                                                <h4 className={styles.suptitle}>Type: {cartItem.kindOfProduct}</h4>
                                                <h3 className={styles.title}>{cartItem.name}</h3>
                                                <h4 className={styles.suptitle}>{cartItem.description}</h4>
                                            </div>
                                            {/* Counter */}
                                            <div className="counterFont bg-[#F9F9FC] max-w-[120px] h-[50px] flex items-center justify-between">
                                                <button className="p-[10px] text-2xl hover:bg-[#9f9f9f] transitioned" onClick={() => cartItem.removeFromCart()}>-</button>
                                                {cartItem.cartQuantity}
                                                <button className="p-[10px] text-2xl hover:bg-[#9f9f9f] transitioned" onClick={() => cartItem.addToCart()}>+</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* right side */}
                                    <div className="flex flex-col justify-between items-end">
                                        <div className="flex flex-col gap-3">
                                            <button onClick={() => cartItem.removeFromCart(cartItem.cartQuantity)} className="relative w-[18px] h-[18px] rotate-45 transitioned hover:scale-110">
                                                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black transform -translate-y-1/2 rounded-4xl"></div>
                                                <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black transform -translate-x-1/2 rounded-4xl"></div>
                                            </button>
                                            {/* //!in future Wishlist */}
                                            <button className="w-[18px] h-[18px] transitioned hover:scale-110">
                                                <img src={wishSVG} alt="wish" />
                                            </button>
                                        </div>
                                        <AsyncProductPrices cartItem={cartItem} />
                                    </div>
                                </div>

                            )

                        ))}


                    </div>
                    {/* order + sale + bonuses */}
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
                                {/* Bonuses in future */}
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
                            <Link to="/Order">
                                <div className="text-center text-2xl bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[400px] px-[84px] py-[20px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]">
                                    Place an order</div>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[902px] h-[509px] top-[60%] right-[-20%] rotate-180 max-[1070px]:top-[90%]">
                <img src="/WineSpots/wine-spot-1.png" alt="wine-spot-1" />
            </div>
        </motion.section >
    )
}