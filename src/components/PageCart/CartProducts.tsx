import { IProductWithCartQuantity } from "../../architecture/Pruduct";
import { useCart } from "../../store/cart";
import { useWishlist } from "../../store/wishlist";
import HeartSVG from "../../assets/Product/heart.svg";
import HeartAddedSVG from "../../assets/Product/heart-added.svg";
import { AsyncProductPrices } from "./AsyncProductPrices";
import { usePopupStore } from "../../store/popup";
import { useAuthStore } from "../../store/auth";
import { Link } from "react-router-dom";
import { capitalizeFirstLetter, resolveImageUrl } from "../../utils/utils";
import styles from "./PageCart.module.scss";

export function CartProducts({ changable = true }: { changable?: boolean }) {
    const { cartProducts } = useCart();
    const { addToWishlist, removeFromWishlist, wishlistIds } = useWishlist();
    const { open } = usePopupStore();
    const { user } = useAuthStore();
    return (
        <>
            {
                cartProducts.map((cartItem: IProductWithCartQuantity, index: number) => {
                    const isInWishlist = wishlistIds.some(([id]) => id === cartItem.id);
                    const heartImg = isInWishlist ? HeartAddedSVG : HeartSVG;

                    const handleWishlistToggle = () => {
                        if (!user) {
                            open(
                                "Notification wishlist",
                                <p className="mb-5">Before adding product to wishlist, please Sign In to your account</p>,
                                false
                            );
                        } else {
                            isInWishlist ? removeFromWishlist(cartItem) : addToWishlist(cartItem);
                        }
                    };

                    return (
                        typeof cartItem.getDiscountedPrice === "function" && typeof cartItem.getAsyncPrice === "function" && (
                            <div key={`${cartItem.id}-${index}`} className="flex justify-between gap-10 border-b-1 border-[#000] pt-[20px] pb-[20px] max-[400px]:gap-2 max-[400px]:flex-col-reverse">
                                <div className="flex gap-4 items-center">
                                    <Link to={`/${capitalizeFirstLetter(cartItem.kindOfProduct)}/${cartItem.id}`}>
                                        <div className="relative flex justify-center mx-auto w-[155px] h-[155px] max-[400px]:w-[100px] max-[400px]:h-[100px]">
                                            {cartItem.imageUrl && (
                                                <img className="absolute w-full h-full object-contain" src={resolveImageUrl(cartItem.imageUrl)} alt={cartItem.imageUrl} />
                                            )}
                                        </div>
                                    </Link>

                                    <div className="flex justify-between flex-col">
                                        <div className="flex flex-col">
                                            <h4 className={styles.suptitle}>Type: {cartItem.kindOfProduct}</h4>
                                            <h3 className={styles.title}>{cartItem.name}</h3>
                                            <h4 className={styles.suptitle}>{cartItem.description}</h4>
                                        </div>
                                        {changable && (
                                            <div className="counterFont bg-[#F9F9FC] max-w-[120px] h-[50px] flex items-center justify-between">
                                                <button className="p-[10px] text-2xl hover:bg-[#9f9f9f] transitioned" onClick={() => cartItem.removeFromCart()}>-</button>
                                                {cartItem.cartQuantity}
                                                <button className="p-[10px] text-2xl hover:bg-[#9f9f9f] transitioned" onClick={() => cartItem.addToCart()}>+</button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between items-end max-[400px]:flex-row-reverse">
                                    <div className="flex flex-col gap-3">
                                        {changable && (
                                            <>
                                                <button onClick={() => cartItem.removeFromCart(cartItem.cartQuantity)} className="relative w-[18px] h-[18px] rotate-45 transitioned hover:scale-110">
                                                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black transform -translate-y-1/2 rounded-4xl"></div>
                                                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black transform -translate-x-1/2 rounded-4xl"></div>
                                                </button>
                                                <button onClick={handleWishlistToggle} className="w-[18px] h-[18px] transitioned hover:scale-110">
                                                    <img src={heartImg} alt="wishlist toggle" />
                                                </button>
                                            </>
                                        )}
                                        {!changable && (
                                            <div className="!font-[Inter] font-medium !text-[16px] text-[#7a0000]">
                                                {cartItem.cartQuantity} * {cartItem.getDiscountedPrice()} $
                                            </div>
                                        )}
                                    </div>
                                    <AsyncProductPrices cartItem={cartItem} />
                                </div>
                            </div>
                        )
                    );
                })
            }
        </>
    )
}