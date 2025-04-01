import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { KindOfProduct, IProductWithCartQuantity } from "../data/OOPStructure/Pruduct";
import { fetchProductById } from "../data/DataBase/Firebase/firebaseAPI";
import { useAuthStore } from "./auth";

type CartIdsType = [string, KindOfProduct, number]; // [id, KindOfProduct, cartQuantity]

export interface ICart {
    cartIds: CartIdsType[];
    cartProducts: IProductWithCartQuantity[];

    totalCartPriceWithoutDiscount: number;
    totalCartPriceWithDiscount: number;
    totalCartDiscount: number

    updateCartTotals: (products: IProductWithCartQuantity[]) => void;
    initializeCart: () => Promise<void>;
    loadCartProducts: (cartIds: CartIdsType[]) => Promise<IProductWithCartQuantity[]>;

    addToCart: (product: IProductWithCartQuantity, quantity?: number) => void;
    removeFromCart: (product: IProductWithCartQuantity, quantity?: number) => void;
    clearCart: () => void;

    findSameProductInCartById: (id: string) => IProductWithCartQuantity | undefined;
    addToUserCartBeforeLeaving: () => void; // if User auth
}

export const useCart = create<ICart>()(
    devtools(
        persist(
            (set, get) => ({
                cartIds: [],
                cartProducts: [],
                totalCartPriceWithoutDiscount: 0,
                totalCartPriceWithDiscount: 0,
                totalCartDiscount: 0,

                //Asyc initialization of Cart from localStorage
                //! IMPORTANT TO USE IN USEEFFECT IN ALL CASES OR PARENT COMPONENT TO UPD CART
                initializeCart: async () => {
                    const cartData = localStorage.getItem("cart-storage");
                    if (cartData) {
                        try {
                            const parsedCart = JSON.parse(cartData); // Парсимо весь об'єкт

                            // Витягуємо лише cartIds з state
                            const parsedCartIds = parsedCart?.state?.cartIds;

                            if (Array.isArray(parsedCartIds)) {
                                set({ cartIds: parsedCartIds });
                                const products = await get().loadCartProducts(parsedCartIds);
                                set({ cartProducts: products });

                                get().updateCartTotals(products); //!
                            } else {
                                console.error("cartIds не є масивом у parsedCart.state.");
                                set({ cartIds: [] });
                            }
                        } catch (error) {
                            console.error("Помилка парсингу даних з localStorage:", error);
                            set({ cartIds: [] });
                        }
                    } else {
                        set({ cartIds: [] });
                    }
                },

                //Loading of products by identifiers
                loadCartProducts: async (cartIds: CartIdsType[]) => {
                    try {
                        const products = await Promise.all(
                            cartIds.map(async ([id, kind, cartQuantity]) => {
                                try {
                                    const correctClass = kind.charAt(0).toUpperCase() + kind.slice(1);
                                    const product: IProductWithCartQuantity = await fetchProductById(correctClass, id);
                                    //тип прописаний як розширений для додавання поля, але БД повертає IProduct
                                    product.cartQuantity = cartQuantity;
                                    return product;
                                } catch (error) {
                                    console.error(`Err loading Products in Cart: ${id}:`, error);
                                    return null;
                                }
                            })
                        );
                        return products.filter((p): p is IProductWithCartQuantity => p !== null); //Removing null values
                    } catch (error) {
                        console.error("Err loading Products in Cart:", error);
                        return [];
                    }
                },

                findSameProductInCartById: (id: string) => {
                    const { cartProducts } = get();
                    return cartProducts.find((product) => product.id === id);
                },

                addToCart: (product: IProductWithCartQuantity, quantity: number = 1) => {
                    const { cartIds, cartProducts } = get();
                    const existingProductIndex = cartIds.findIndex(([id]) => id === product.id);

                    if (existingProductIndex !== -1) {
                        // Якщо продукт вже є в кошику
                        const [id, kind, currentCartQuantity] = cartIds[existingProductIndex];

                        // Перевіряю, чи кількість, яку ми додаємо, "влазить"
                        if (currentCartQuantity + quantity <= product.quantity) {
                            // Оновлюю cartIds
                            const updatedCartIds: CartIdsType[] = [...cartIds];
                            updatedCartIds[existingProductIndex] = [id, kind, currentCartQuantity + quantity];

                            // Оновлюю cartQuantity у самому об’єкті продукту без втрати прототипу
                            const existingCartProduct = cartProducts.find((p) => p.id === product.id);
                            if (existingCartProduct) {
                                existingCartProduct.cartQuantity = (existingCartProduct.cartQuantity || 0) + quantity;
                            }

                            set({
                                cartIds: updatedCartIds,
                                cartProducts: cartProducts,
                            });

                            get().updateCartTotals(cartProducts); //!
                        } else {
                            console.warn("Кількість, яку ви хочете додати, перевищує доступну.");
                        }
                    } else {
                        // Якщо продукту ще немає в кошику
                        if (quantity <= product.quantity) {
                            // Додаю до cartIds якщо "влазить"
                            const updatedCartIds: CartIdsType[] = [
                                ...cartIds,
                                [product.id, product.kindOfProduct, quantity] as CartIdsType,
                            ];

                            // Додаю до cartProducts
                            product.cartQuantity = quantity;
                            const updatedCartProducts = [...cartProducts, product];

                            set({
                                cartIds: updatedCartIds,
                                cartProducts: updatedCartProducts,
                            });
                            get().updateCartTotals(updatedCartProducts); //!
                        } else {
                            console.warn("Кількість, яку ви хочете додати, перевищує доступну.");
                        }
                    }
                },

                removeFromCart: (product: IProductWithCartQuantity, quantity: number = 1) => {
                    const { cartIds, cartProducts } = get();

                    // Проверяем, есть ли продукт в корзине
                    const existingProductIndex = cartIds.findIndex(([id]) => id === product.id);

                    if (existingProductIndex !== -1) {
                        const [id, kind, currentCartQuantity] = cartIds[existingProductIndex];
                        const updatedCartIds = [...cartIds];
                        const existingCartProduct = cartProducts.find((p) => p.id === product.id);

                        if (existingCartProduct) {
                            const newQuantity = (currentCartQuantity || 0) - quantity;

                            if (newQuantity > 0) {
                                // Если количество больше 0, обновляем cartQuantity
                                updatedCartIds[existingProductIndex] = [id, kind, newQuantity];
                                existingCartProduct.cartQuantity = newQuantity;
                            } else {
                                // Если количество равно 0 или меньше, удаляем продукт из корзины
                                updatedCartIds.splice(existingProductIndex, 1);

                                const updatedCartProducts = cartProducts.filter((p) => p.id !== product.id);

                                set({
                                    cartIds: updatedCartIds,
                                    cartProducts: updatedCartProducts,
                                });
                                get().updateCartTotals(updatedCartProducts); // Пересчет
                                return; // Завершаем выполнение, так как продукт полностью удален
                            }

                            // Обновляем состояние корзины
                            set({
                                cartIds: updatedCartIds,
                                cartProducts: [...cartProducts],
                            });

                            // Пересчитываем итоговые значения
                            get().updateCartTotals(cartProducts);
                        } else {
                            console.warn(`Продукт с ID ${product.id} не найден в cartProducts.`);
                        }
                    } else {
                        console.warn(`Продукт с ID ${product.id} не найден в cartIds.`);
                    }
                },

                updateCartTotals: (products: IProductWithCartQuantity[]) => {
                    const totalCartPriceWithoutDiscount = parseFloat(products.reduce((total, product) => {
                        return total + (product.cartQuantity || 0) * product.price;
                    }, 0).toFixed(2));

                    const totalCartPriceWithDiscount = parseFloat(products.reduce((total, product) => { const productTotal = (product.cartQuantity || 0) * product.getDiscountedPrice(); return total + productTotal; }, 0).toFixed(2));

                    const totalCartDiscount = parseFloat((totalCartPriceWithoutDiscount - totalCartPriceWithDiscount).toFixed(2));
                    set({ totalCartPriceWithoutDiscount, totalCartPriceWithDiscount, totalCartDiscount });
                },

                addToUserCartBeforeLeaving: () => {
                    const { user } = useAuthStore.getState();
                    if (user) {
                        const cart = get().cartIds;
                        //! ...
                        console.log("Saving cart to user profile before leaving", cart);
                    }
                },

                clearCart: () => {
                    set(() => ({
                        cartIds: [],
                        cartProducts: [],
                        totalCartPriceWithoutDiscount: 0,
                        totalCartDiscount: 0,
                    }));
                },
            }),
            {
                name: "cart-storage",
            }
        )
    )
);
