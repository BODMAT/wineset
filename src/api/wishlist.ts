import { doc, getDoc, setDoc } from "firebase/firestore";
import { WishListIdsType } from "../types/types";
import { db } from "../firebaseConfig";
import { User } from "firebase/auth";
import { useWishlist } from "../store/wishlist"

export async function addWishList(wishlistIds: WishListIdsType[], user: User) {
    const wishlistJson = JSON.stringify(wishlistIds);

    try {
        await setDoc(doc(db, "wishlists", user.uid), {
            wishlist: wishlistJson,
        });
    } catch (error) {
        console.error("Error saving wishlist to DB:", error);
    }
}

export async function loadWishList(user: User) {
    const { setWishlistIds, setWishlistProducts, loadWishlistProducts } = useWishlist.getState();
    try {
        const docSnap = await getDoc(doc(db, "wishlists", user.uid));
        if (docSnap.exists()) {
            const wishlistJson = docSnap.data().wishlist;
            const wishlist: WishListIdsType[] = JSON.parse(wishlistJson);
            setWishlistIds(wishlist);
            const products = await loadWishlistProducts(wishlist);
            setWishlistProducts(products);
        }
    } catch (error) {
        console.error("Error loading wishlist from DB:", error);
    }
}


