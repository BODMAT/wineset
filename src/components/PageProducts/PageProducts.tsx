import { createContext, useContext } from "react";
import { KindOfProduct } from "../../data/OOPStructure/Pruduct";
import { GenerateProductSpecialOffer } from "../SpecialOffer/GenerateProductSpecialOffer";
import { ProductDescription } from "./ProductDescription";
import { Recommended } from "../Recommended/Recommended";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Instagram } from "../PageHome/Instagram/Instagram";
import { ProductsByType } from "./ProductsByType";

type ProductContextType = {
    product: KindOfProduct;
};
const ProductContext = createContext<ProductContextType | undefined>(undefined);

function getRandomProduct(exclude?: KindOfProduct): KindOfProduct {
    const products: KindOfProduct[] = [
        "wine", "champagne", "whiskey", "vodka",
        "delicacy", "glass", "candle",
        "cheese", "cookie", "sauce"
    ].filter(p => p !== exclude) as KindOfProduct[];

    return products[Math.floor(Math.random() * products.length)];
}

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};

export function PageProducts({ product }: { product: KindOfProduct }) {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <ProductContext.Provider value={{ product }}>
                <GenerateProductSpecialOffer />
                <ProductDescription />
                <ProductsByType />
                <Recommended productFilter={getRandomProduct(product)} />
                <SpecialOffer imgSrc="/HomePage/sommelier.jpg"
                    supTitle="Sommelier Choice"
                    title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                    subTitle="ARTICLES ABOUT WINE"
                    subTitleLink="/Articles"
                    contentWidth={893} />
                <Instagram />
            </ProductContext.Provider>
        </div>
    )
}