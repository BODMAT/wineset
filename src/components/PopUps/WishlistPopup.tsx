import { Link } from "react-router-dom"
import { IProduct } from "../../architecture/Pruduct"
import { useWishlist } from "../../store/wishlist"
import { capitalizeFirstLetter, resolveImageUrl } from "../../utils/utils"
import { AsyncProductPrices } from "../PageCart/AsyncProductPrices"

export function WishlistPopup() {
    const { wishlistProducts, clearWishlist } = useWishlist()
    return (
        <section className="max-h-[70vh] overflow-y-auto overflow-x-hidden w-full pr-2">
            {!!wishlistProducts.length && (
                <button onClick={() => { clearWishlist() }} className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] w-full">Clear all wishlist</button>
            )}
            {wishlistProducts.map((wishItem: IProduct, index: number) => (
                typeof wishItem.getDiscountedPrice === "function" && typeof wishItem.getAsyncPrice === "function" && (
                    <div key={`${wishItem.id}-${index}`} className="flex justify-between gap-10 border-b-1 border-[#000] pt-[20px] pb-[20px] max-[500px]:gap-2 max-[500px]:flex-col">
                        {/* left side */}
                        <div className="flex gap-4 items-center">
                            <Link to={`/${capitalizeFirstLetter(wishItem.kindOfProduct)}/${wishItem.id}`}>
                                <div className="relative flex justify-center mx-auto w-[155px] h-[155px] max-[400px]:w-[100px] max-[400px]:h-[100px]">
                                    {wishItem.imageUrl && (
                                        <img className="absolute w-full h-full object-contain" src={resolveImageUrl(wishItem.imageUrl)} alt={wishItem.imageUrl} />
                                    )}
                                </div>
                            </Link>

                            <div className="flex justify-between flex-col">
                                <div className="flex flex-col">
                                    <h4 className="font-medium text-[14px] leading-[1.4] capitalize text-black/50">Type: {wishItem.kindOfProduct}</h4>
                                    <h3 className="font-medium text-black capitalize leading-[1.3] text-[18px] sm:text-[16px]">{wishItem.name}</h3>
                                    <h4 className="font-medium text-[14px] leading-[1.4] capitalize text-[rgba(0,0,0,0.5)]">{wishItem.description}</h4>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="flex flex-col justify-between items-end">
                            <div className="flex flex-col gap-3">
                                <button onClick={() => wishItem.removeFromWishList()} className="relative w-[18px] h-[18px] rotate-45 transitioned hover:scale-110">
                                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-black transform -translate-y-1/2 rounded-4xl"></div>
                                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black transform -translate-x-1/2 rounded-4xl"></div>
                                </button>
                            </div>
                            <AsyncProductPrices cartItem={wishItem} />
                        </div>
                    </div>

                )

            ))}
            {!wishlistProducts.length && (
                <div className="pt-[20px] pb-[20px] text-[20px] text-center">Nothing in wishlist</div>
            )}
        </section>
    )
}