import { useEffect } from "react";
import { useCart } from "../../store/cart";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Instagram } from "../PageHome/Instagram/Instagram";
import { Cart } from "./Cart";

export function PageCart() {
    const addToUserCartBeforeLeaving = useCart((state) => state.addToUserCartBeforeLeaving);

    useEffect(() => {
        const handleBeforeUnload = () => {
            addToUserCartBeforeLeaving();
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [addToUserCartBeforeLeaving]);
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <Cart />
            <SpecialOffer imgSrc="/HomePage/sommelier.jpg"
                supTitle="Sommelier Choice"
                title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                subTitle="ARTICLES ABOUT WINE"
                subTitleLink="/Articles"
                contentWidth={893} />
            <Instagram />
        </div>
    )
}