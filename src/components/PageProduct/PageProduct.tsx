import { useParams } from "react-router-dom";
import { IProduct, KindOfProduct } from "../../architecture/Pruduct";
import { useLayoutEffect, useMemo, useState } from "react";
import { fetchProductById } from "../../api/product";
import { PageMessage } from "../PageError/PageError";
import { Product } from "./Product";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Instagram } from "../PageHome/Instagram/Instagram";
import { Recommended } from "../Recommended/Recommended";
import { getRandomProduct } from "../../utils/utils";
import { Reviews } from "./Reviews";
import { AdditionalInfo } from "./AdditionalInfo";

export function PageProduct() {
    const { category, id } = useParams<{ category: KindOfProduct; id: string }>();
    const [product, setProduct] = useState<IProduct | null>(null);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        const fetchData = async () => {
            if (category && id) {
                const result: IProduct = await fetchProductById(category, id);
                if (result) {
                    setLoading(false);
                    setProduct(result);
                } else {
                    setLoading(false);
                    setProduct(null);
                    console.error(`Product with category "${category}" and ID "${id}" not found`);
                }
            }
        };

        fetchData();
    }, [category, id]);

    const randomProduct = useMemo(
        () => product ? getRandomProduct(product.kindOfProduct) : null,
        [product]
    );

    if (loading) {
        return <PageMessage message="Loading..." />;
    }

    return (
        <div className="relative pt-[143px] max-md:pt-[84px]">
            {product && (
                <section>
                    <Product product={product} />
                    <AdditionalInfo product={product} />
                    <Reviews product={product} />
                    <SpecialOffer imgSrc="/HomePage/sommelier.jpg"
                        supTitle="Sommelier Choice"
                        title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                        subTitle="ARTICLES ABOUT WINE"
                        subTitleLink="/Articles"
                        contentWidth={893} />
                    {product && randomProduct && (
                        <Recommended productFilter={randomProduct} />
                    )}
                    <Instagram />
                </section>
            )}
            {!product && <PageMessage message="404 Not Found" />}
        </div>
    );
}
