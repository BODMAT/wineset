import { createContext, useContext, useMemo } from "react";
import { KindOfProduct } from "../../architecture/Pruduct";
import { GenerateProductSpecialOffer } from "../SpecialOffer/GenerateProductSpecialOffer";
import { ProductDescription } from "./ProductDescription";
import { Recommended } from "../Recommended/Recommended";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Instagram } from "../PageHome/Instagram/Instagram";
import { ProductsByType } from "./ProductsByType";
import { ProductContextType } from "../../types/types";
import { getRandomProduct } from "../../utils/utils";

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProduct must be used within a ProductProvider");
    }
    return context;
};

export function PageProducts({ product }: { product: KindOfProduct }) {
    const randomProduct = useMemo(() => getRandomProduct(product), [product]);
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <ProductContext.Provider value={{ product }}>
                <GenerateProductSpecialOffer />
                <ProductDescription />
                <ProductsByType />
                <Recommended productFilter={randomProduct} />
                <SpecialOffer
                    imgSrc="/HomePage/sommelier.jpg"
                    supTitle="Sommelier Choice"
                    title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                    subTitle="ARTICLES ABOUT WINE"
                    subTitleLink="/Articles"
                    contentWidth={893}
                />
                <Instagram />
            </ProductContext.Provider>
        </div>
    );
}


