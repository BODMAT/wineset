import { useEffect, useState } from "react";
import { IProduct } from "../../architecture/Pruduct";
import ShareSVG from "../../assets/Product/share.svg";
import HeartSVG from "../../assets/Product/heart.svg";
import HeartAddedSVG from "../../assets/Product/heart-added.svg";
import { copyAndGetCurrentUrl } from "../../utils/utils";
import { usePopupStore } from "../../store/popup";
import { useWishlist } from "../../store/wishlist";
import { useAuthStore } from "../../store/auth";

/** Share and wishlist icon buttons shown next to the product title. */
export function ProductActions({ product }: { product: IProduct }) {
    const { addToWishlist, removeFromWishlist, wishlistIds } = useWishlist();
    const { user } = useAuthStore();
    const { open } = usePopupStore();
    const [isInWishlist, setIsInWishlist] = useState(false);
    const [heartImg, setHeartImg] = useState<string>(HeartSVG);

    useEffect(() => {
        const isProductInWishlist = wishlistIds.some(([id]) => id === product.id);
        setIsInWishlist(isProductInWishlist);
        setHeartImg(isProductInWishlist ? HeartAddedSVG : HeartSVG);
    }, [wishlistIds, product.id]);

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
        <div className="flex gap-[25px] items-center">
            <button
                onClick={() => {
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
    );
}
