import { IProduct } from "../../data/OOPStructure/Pruduct"
import { useCart } from "../../store/cart"
import styles from "./PageCart.module.scss"
export function Cart() {
    const { localStorageCart } = useCart()
    return (
        <section className={styles.container}>
            <div className="pt-25 pb-25 flex justify-between gap-7">
                {/* changable cart */}
                <div className="">
                    <h2 className={`${styles.cartFont} pb-[50px] border-b-1 border-[#000]`}>Cart ({localStorageCart.length})</h2>
                    {/* items */}
                    {localStorageCart.map((cartItem: IProduct, index: number) => (
                        <div key={`${cartItem.id}-${index}`} className="flex justify-between gap-10 border-b-1 border-[#000]">
                            {/* left side */}
                            <div className="flex gap-2">
                                <div className="max-w-[70px]">
                                    <img src={cartItem.imageUrl} alt={cartItem.imageUrl} />
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-col">
                                        <h4 className={styles.suptitle}>Type: {cartItem.kindOfProduct}</h4>
                                        <h3 className={styles.title}>{cartItem.name}</h3>
                                        <h4 className={styles.suptitle}>{cartItem.description}</h4>
                                    </div>
                                    {/* Counter */}
                                    <div className=""></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* right side */}
                    <div className="" ></div>

                </div>
                {/* order + sale + bonuses */}
                <div className="" > order</div>
            </div>
        </section >
    )
}