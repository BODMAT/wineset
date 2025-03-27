import { useEffect } from "react";
import { useCart } from "../../store/cart";

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
        <div>Cart in the future</div>
    )
}