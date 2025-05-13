import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { IWishList } from "../types/interfaces";
import { IProduct, KindOfProduct } from "../architecture/Pruduct";
import { WishListIdsType } from "../types/types";
import { fetchProductById } from "../api/product";
import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const useWishlist = create<IWishList>()(
    devtools((set, get) => ({
        wishlistIds: [],
        wishlistProducts: [],

        //! IMPORTANT TO USE IN USEEFFECT IN ALL CASES OR PARENT COMPONENT TO UPD WISHLIST
        initializeWishlist: async () => {
            const ids = get().wishlistIds;
            const products = await get().loadWishlistProducts(ids);
            set({ wishlistProducts: products });
        },

        loadWishlistProducts: async (ids: WishListIdsType[]) => {
            try {
                const products = await Promise.all(
                    ids.map(async ([id, kind]) => {
                        try {
                            const correctClass = kind.charAt(0).toUpperCase() + kind.slice(1);
                            return await fetchProductById(correctClass, id);
                        } catch (error) {
                            console.error(`Err loading Product for wishlist: ${id}`, error);
                            return null;
                        }
                    })
                );
                return products.filter((p): p is IProduct => p !== null);
            } catch (error) {
                console.error("Error loading wishlist products:", error);
                return [];
            }
        },

        addToWishlist: (product: IProduct) => {
            const { wishlistIds, wishlistProducts } = get();
            const alreadyExists = wishlistIds.some(([id]) => id === product.id);

            if (!alreadyExists) {
                if (product.id) {
                    const updatedIds: WishListIdsType[] = [
                        ...wishlistIds,
                        [product.id, product.kindOfProduct as KindOfProduct],
                    ];
                    set({ wishlistIds: updatedIds, wishlistProducts: [...wishlistProducts, product] });
                } else {
                    console.warn("Product ID is undefined, cannot add to wishlist.");
                }

            }
        },

        removeFromWishlist: (product: IProduct) => {
            const { wishlistIds, wishlistProducts } = get();
            const updatedIds = wishlistIds.filter(([id]) => id !== product.id);
            const updatedProducts = wishlistProducts.filter((p) => p.id !== product.id);
            set({ wishlistIds: updatedIds, wishlistProducts: updatedProducts });
        },

        clearWishlist: () => {
            set({ wishlistIds: [], wishlistProducts: [] });
        },

        findSameProductInCartById: (id: string) => {
            return get().wishlistProducts.find((product) => product.id === id);
        },

        saveWishlistByUserToDB: async (user: User) => {
            const { wishlistIds } = get();
            // Перетворюємо масив у JSON
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
        },

        // При завантаженні перетворюємо JSON назад у масив
        loadWishlistByUserFromDB: async (user: User) => {
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
        },

        getWishlistTotal: (): number => {
            return get().wishlistProducts.length;
        },

        // Функції для оновлення стану
        setWishlistIds: (wishlistIds: WishListIdsType[]) => set({ wishlistIds }), // Оновлення wishlistIds
        setWishlistProducts: (wishlistProducts: IProduct[]) => set({ wishlistProducts }), // Оновлення wishlistProducts

    }))
);