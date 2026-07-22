import { usePopupStore } from "../../store/popup";
import { useWishlist } from "../../store/wishlist";
import { useCart } from "../../store/cart";
import { WishlistPopup } from "../PopUps/WishlistPopup";
import { CartPopUp } from "../PopUps/CartPopUp";
import { CartIcon, WishlistIcon } from "./HeaderIcons";

const badgeCls = "flex justify-center items-center text-[14px] absolute w-[17px] h-[17px] bottom-[-5px] right-[-5px] bg-[#7A0000] rounded-full text-white overflow-hidden";
const buttonCls = "relative bg-transparent transitioned hover:scale-110 max-md:[&_svg_path]:stroke-white";

/** Wishlist and cart icon buttons with their item-count badges. */
export function HeaderBuyButtons() {
    const { getWishlistTotal } = useWishlist();
    const { getCartTotal } = useCart();
    const { open } = usePopupStore();

    const wishlistTotal = getWishlistTotal();
    const cartTotal = getCartTotal();

    return (
        <div className="flex items-center gap-5">
            <button
                onClick={() => open("Wishlist", <WishlistPopup />, false)}
                className={buttonCls}
                aria-label="Open wishlist"
            >
                <WishlistIcon />
                {wishlistTotal > 0 && <span className={badgeCls}>{wishlistTotal}</span>}
            </button>
            <button
                onClick={() => open("Cart", <CartPopUp />, false)}
                className={buttonCls}
                aria-label="Open cart"
            >
                <CartIcon />
                {cartTotal > 0 && <span className={badgeCls}>{cartTotal}</span>}
            </button>
        </div>
    );
}
