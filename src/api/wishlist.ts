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
        // console.log("Wishlist saved for user:", user.uid);
        // console.log(wishlistJson);
    } catch (error) {
        console.error("Error saving wishlist to DB:", error);
    }
}

export async function loadWishlList(user: User) {
    const { wishlistIds, loadWishlistProducts } = useWishlist()
    try {
        const docSnap = await getDoc(doc(db, "wishlists", user.uid));
        if (docSnap.exists()) {
            const wishlistJson = docSnap.data().wishlist;
            const wishlist = JSON.parse(wishlistJson); // Перетворюємо JSON назад у масив
            set({ wishlistIds: wishlist });
            const products = await get().loadWishlistProducts(wishlist);
            set({ wishlistProducts: products });
        }
    } catch (error) {
        console.error("Error loading wishlist from DB:", error);
    }
}