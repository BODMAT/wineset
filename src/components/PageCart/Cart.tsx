import { Link } from "react-router-dom";
import { IProductWithCartQuantity } from "../../data/OOPStructure/Pruduct"
import { useCart } from "../../store/cart"
import styles from "./PageCart.module.scss"
import wishSVG from "../../assets/wish.svg"
export function Cart() {
    const { cartProducts } = useCart();
    function capitalizeFirstLetter(str: string): string {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <section className={styles.container}>
            <div className="pt-10 pb-25 flex justify-between gap-7">
                {/* changable cart */}
                <div className="">
                    <h2 className={`${styles.cartFont} pb-[50px] border-b-1 border-[#000]`}>Cart ({cartProducts.length})</h2>
                    {/* items */}
                    {cartProducts.map((cartItem: IProductWithCartQuantity, index: number) => (
                        typeof cartItem.getDiscountedPrice === "function" && typeof cartItem.getPrice === "function" && (

                            <div key={`${cartItem.id}-${index}`} className="flex justify-between gap-10 border-b-1 border-[#000] pt-[20px] pb-[20px]">
                                {/* left side */}
                                <div className="flex gap-4">
                                    <Link to={`/${capitalizeFirstLetter(cartItem.kindOfProduct)}/${cartItem.id}`}>
                                        <div className="relative flex justify-center mx-auto w-[155px] h-[155px]">
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
                                <div className="flex flex-col justify-between">
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
                                    <div className="flex flex-col gap-[5px]">
                                        <h5 className={styles.crossedPrice}>{cartItem.getPrice()}</h5>
                                        {/* переробить під асинхронний  */}
                                        <h5 className={styles.priceCart}>{cartItem.getDiscountedPrice()}</h5>
                                        {/* переробить під асинхронний  */}
                                    </div>
                                </div>
                            </div>

                        )

                    ))}


                </div>
                {/* order + sale + bonuses */}
                <div className="" > order</div>
            </div>
        </section >
    )
}