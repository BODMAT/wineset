import { dataWPostfixes } from "../../data/OOPStructure/Pruduct";
import { useProduct } from "../PageProducts/PageProducts";
import { SpecialOffer } from "./SpecialOffer";

export function GenerateProductSpecialOffer() {
    const { product } = useProduct();
    const titlePostfix = dataWPostfixes[product];
    if (!titlePostfix) return null;
    return (
        <SpecialOffer
            imgSrc={`/ProductsPage/GenerateProductSpecialOffer/${product.charAt(0).toUpperCase() + product.slice(1)}.jpg`}
            supTitle="Special offer"
            title={`${titlePostfix.toUpperCase()} FOR BEST PRICE`}
            subTitle={`ORDER DISCOUNTED ${titlePostfix.toUpperCase()}`}
            scrollTo="product"
            contentWidth={381}
        />
    );
}