import { RefObject } from "react";
import { Link } from "react-router-dom";
import { CartProducts } from "../PageCart/CartProducts";
import { useCart } from "../../store/cart";
import { usePopupStore } from "../../store/popup";
import { useBonusStore } from "../../store/bonus";

export function FinalCart({ formRef, isSubmitting }: { formRef: RefObject<HTMLFormElement>, isSubmitting: boolean }) {
    const { totalCartPriceWithDiscount, cartProducts } = useCart()
    const { open } = usePopupStore()
    const { bonusesYouCanUse } = useBonusStore();
    function handleSubmit() {
        if (cartProducts.length > 0) {
            formRef.current && formRef.current.dispatchEvent(new Event("submit", { bubbles: true }));
        } else {
            open("Notification", <p className="pb-5">Firstly add items to Cart</p>)
        }
    }
    return (
        <div className="flex-[0_1_50%] bg-[#F4F4F4] px-[50px] py-[40px]">
            <div className="flex gap-10 justify-between items-center mb-[50px] text-center">
                <h3 className="!font-[Inter] !font-semibold !text-[26px] capitalize text-[#121212]">Your Order</h3>
                <Link className="!font-[Inter] font-medium !text-[18px] decoration-[#7a0000] decoration-[1px] decoration-skip-ink-0 text-[#7a0000] hover:underline" to="/Cart">Edit</Link>
            </div>

            <CartProducts changable={false} />

            <div className="border-b-1 py-5 flex gap-10 justify-between items-center">
                <h3 className="!font-semibold !text-[22px] uppercase text-black">Total with discount and bonuses</h3>
                <h3 className="!font-semibold !text-[22px] uppercase text-black">{Math.max(totalCartPriceWithDiscount - bonusesYouCanUse, 0)}$</h3>
            </div>

            <div className="text-center mt-5">
                <button onClick={() => handleSubmit()} className="rounded px-[100px] py-[24px] bg-gradient-to-r from-[#7A0000] to-[#990000] text-white font-[Inter] font-semibold leading-normal tracking-[2px] uppercase text-[24px] sm:text-[22px] hover:from-[#F4F4F4] hover:to-[#F4F4F4] hover:text-[#7A0000] transitioned border-2 border-[#7A0000]"

                    type='submit' form='order' disabled={isSubmitting}>
                    {isSubmitting ? "Pending..." : "Place your order"}
                </button>
            </div>
        </div>
    )
}