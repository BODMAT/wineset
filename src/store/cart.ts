import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import { IProductWithCartQuantity } from "../architecture/Pruduct";
import { fetchProductById } from "../api/product";
import { CartIdsType } from "../types/types";
import { ICart } from "../types/interfaces";

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

                updateCartTotals: async (products: IProductWithCartQuantity[]) => {
                    let totalCartPriceWithoutDiscount = 0;
                    let totalCartPriceWithDiscount = 0;

                    for (const product of products) {
                        const quantity = product.cartQuantity || 0;
                        const price = await product.getAsyncPrice();
                        const discountedPrice = await product.getDiscountedPrice();

                        totalCartPriceWithoutDiscount += quantity * price;
                        totalCartPriceWithDiscount += quantity * discountedPrice;
                    }

                    totalCartPriceWithoutDiscount = parseFloat(totalCartPriceWithoutDiscount.toFixed(2));
                    totalCartPriceWithDiscount = parseFloat(totalCartPriceWithDiscount.toFixed(2));

                    const totalCartDiscount = parseFloat((totalCartPriceWithoutDiscount - totalCartPriceWithDiscount).toFixed(2));

                    set({ totalCartPriceWithoutDiscount, totalCartPriceWithDiscount, totalCartDiscount });
                },

                clearCart: () => {
                    set(() => ({
                        cartIds: [],
                        cartProducts: [],
                        totalCartPriceWithoutDiscount: 0,
                        totalCartPriceWithDiscount: 0,
                        totalCartDiscount: 0,
                    }));
                },

                getCartTotal: (): number => {
                    return get().cartProducts.length;
                }
            }),
            {
                name: "cart-storage",
            }
        )
    )
);
