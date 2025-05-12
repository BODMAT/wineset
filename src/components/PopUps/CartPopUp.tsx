import { CartProducts } from "../PageCart/CartProducts";
import { useCart } from "../../store/cart";
import { useNavigate } from "react-router-dom";
import { usePopupStore } from "../../store/popup";
export function CartPopUp() {
    const navigate = useNavigate();
    const { cartProducts, clearCart } = useCart();
    const { close } = usePopupStore();
    function linkWithClosePopUp(link: string) {
        navigate(link);
        close();
    }
    return (
        <section className="max-h-[70vh] overflow-y-auto overflow-x-hidden w-full pr-2">

            <div className="flex gap-10 max-md:flex-col">
                {!!cartProducts.length && (
                    <button onClick={() => { clearCart() }} className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] w-full">Clear all cart items</button>
                )}
                <button className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] w-full" onClick={() => linkWithClosePopUp("/Cart")}>Go to Cart</button>
            </div>

            <CartProducts />
            {!cartProducts.length && (
                <div className="pt-[20px] pb-[20px] text-[20px] text-center">Nothing in cart</div>
            )}
        </section>
    )
}