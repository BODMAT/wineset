import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { IProduct } from "../data/OOPStructure/Pruduct";
import { useAuthStore } from "./auth";

interface ICart {
    localStorageCart: IProduct[];
    addToCart: (product: IProduct, quantity?: number) => void;
    removeFromCart: (product: IProduct, quantity?: number) => void;
    addToUserCartBeforeLeaving: () => void;
    clearCart: () => void;
    findSameProductInCartById: (id: string) => IProduct | undefined;
}

export const useCart = create<ICart>()(
    devtools(
        persist(
            (set, get) => ({
                localStorageCart: (() => {
                    const cartData = localStorage.getItem("cart-storage");
                    console.log(cartData ? (JSON.parse(cartData) as IProduct[]) : []);
                    return cartData ? (JSON.parse(cartData) as IProduct[]) : [];
                })(),

                findSameProductInCartById: (id: string) => {
                    const existingProduct = get().localStorageCart.find((item: IProduct) => {
                        return item.id === id;
                    });
                    return existingProduct;
                },

                addToCart: (product: IProduct, quantity: number = 1) => {
                    set((state) => {
                        const existingProduct = state.localStorageCart.find((item: IProduct) => {
                            return item.id === product.id;
                        }
                        );
                        //! Якщо продукт є в корзині то працюю з кількістю
                        if (existingProduct) {
                            const newProductQuantity = existingProduct.quantity - quantity;
                            //Якщо вибрана кількість є в базі
                            if (newProductQuantity <= product.quantity) {
                                existingProduct.quantity = newProductQuantity;
                                return {
                                    localStorageCart: state.localStorageCart.map((item: IProduct) =>
                                        (item.id === product.id) ? existingProduct : item
                                    ),
                                };
                            }
                            //Якщо вибраної кількості немає (нічого не змінюю)
                            else {
                                console.warn("Вибрана кількість продукта є більшою за можливу в базі 1")
                                return {
                                    localStorageCart: state.localStorageCart,
                                };
                            }
                        }
                        //! Якщо продукта немає в корзині
                        else {
                            //Якщо вибрана кількість є в базі
                            if (product.quantity > quantity) {
                                product.quantity -= quantity;
                                return {
                                    localStorageCart: [...state.localStorageCart, product],
                                };
                            }
                            //Якщо вибраної кількості немає (нічого не змінюю)
                            else {
                                console.warn("Вибрана кількість продукта є більшою за можливу в базі 2")
                                return {
                                    localStorageCart: state.localStorageCart,
                                };
                            }
                        }

                    });
                },

                // Метод для удаления товара из корзины
                removeFromCart: (product: IProduct, quantity: number = 1) => {
                    set((state) => {
                        // const existingProduct = state.localStorageCart.find((item) => item.id === id);

                        // if (existingProduct && existingProduct.cartQuantity) {
                        //     const newCartQuantity = existingProduct.cartQuantity - quantity;

                        //     // Если количество <= 0, удаляем продукт из корзины
                        //     if (newCartQuantity <= 0) {
                        //         console.warn(`Removing product "${existingProduct.name}" from the cart.`);
                        //         return {
                        //             localStorageCart: state.localStorageCart.filter((item) => item.id !== id),
                        //         };
                        //     }

                        //     // Обновляем количество
                        //     return {
                        //         localStorageCart: state.localStorageCart.map((item) =>
                        //             item.id === id
                        //                 ? { ...item, cartQuantity: newCartQuantity }
                        //                 : item
                        //         ),
                        //     };
                        // }

                        // console.warn(`Product with ID "${id}" not found in cart.`);
                        return state; // Если продукт не найден, возвращаем текущее состояние
                    });
                },

                addToUserCartBeforeLeaving: () => {
                    const { user } = useAuthStore.getState();
                    if (user) {
                        const cart = get().localStorageCart;
                        //!
                        console.log("Saving cart to user profile before leaving", cart);
                    }
                },
                clearCart: () => {
                    set(() => ({
                        localStorageCart: [],
                    }));
                },



            }),
            {
                name: "cart-storage",
            }
        )
    )
);
