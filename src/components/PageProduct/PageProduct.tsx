import { useParams } from "react-router-dom";
import { IProduct, KindOfProduct } from "../../architecture/Pruduct";
import { useLayoutEffect, useState } from "react";
import { fetchProductById } from "../../api/firebaseAPI";
import { PageMessage } from "../PageError/PageError";
import { Product } from "./Product";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Instagram } from "../PageHome/Instagram/Instagram";
import { Recommended } from "../Recommended/Recommended";
import { getRandomProduct } from "../../utils/utils";

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
                    setTimeout(() => {
                        setLoading(false);
                        setProduct(null);
                        console.error(`Product with category "${category}" and ID "${id}" not found`);
                    }, 1500);
                }
            }
        };

        fetchData();
    }, [category, id]);

    if (loading) {
        return <PageMessage message="Loading..." />;
    }

    return (
        <div className="relative pt-[143px] max-md:pt-[84px]">
            {product && (
                <section>
                    <Product product={product} />
                    <Recommended productFilter={getRandomProduct(product.kindOfProduct)} />
                    <SpecialOffer imgSrc="/HomePage/sommelier.jpg"
                        supTitle="Sommelier Choice"
                        title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                        subTitle="ARTICLES ABOUT WINE"
                        subTitleLink="/Articles"
                        contentWidth={893} />
                    <Instagram />
                </section>
            )}
            {!product && <PageMessage message="404 Not Found" />}
        </div>
    );
}
