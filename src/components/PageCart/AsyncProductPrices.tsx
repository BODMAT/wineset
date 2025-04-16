import { useEffect, useState } from "react";
import { IProductWithCartQuantity } from "../../architecture/Pruduct"
import styles from "./PageCart.module.scss"
import { useCart } from "../../store/cart";
import { IFullPrice } from "../../types/interfaces";

export function AsyncProductPrices({ cartItem }: { cartItem: IProductWithCartQuantity }) {
    const { cartIds } = useCart();
    const [price, setPrice] = useState<IFullPrice>({
        crossedPrice: null,
        disountedPrice: null,
    });
    useEffect(() => {
        const fetchPrices = async () => {
            try {
                let crossedPrice = await cartItem.getPrice();
                cartItem.cartQuantity ? crossedPrice *= cartItem.cartQuantity : crossedPrice;
                let disountedPrice = cartItem.getDiscountedPrice();
                cartItem.cartQuantity ? disountedPrice *= cartItem.cartQuantity : disountedPrice;

                setPrice({
                    crossedPrice: crossedPrice.toFixed(2),
                    disountedPrice: disountedPrice.toFixed(2),
                });
            } catch (error) {
                console.error("Error getting price:", error);
            }
        };

        fetchPrices();
    }, [cartItem, cartIds]);
    return (
        <>
            {!price && (<div className="flex flex-col gap-[5px] items-end">Loading...</div>)}
            {price && (
                <div className="flex flex-col gap-[5px] items-end">
                    {price.crossedPrice !== price.disountedPrice && (
                        <h5 className={styles.crossedPrice}>{price.crossedPrice}$</h5>
                    )}
                    <h5 className={styles.priceCart}>{price.disountedPrice}$</h5>
                </div>
            )}
        </>
    )
}