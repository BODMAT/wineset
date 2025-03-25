import { useParams } from "react-router-dom";
import { IProduct, KindOfProduct } from "../../data/OOPStructure/Pruduct";
import { useLayoutEffect, useState } from "react";
import { fetchProductById } from "../../data/DataBase/Firebase/firebaseAPI";
import { PageMessage } from "../PageError/PageError";

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
                    <div className="">{product.name}</div>
                    <div className="">{product.price}</div>
                </section>
            )}
            {!product && <PageMessage message="404 Not Found" />}
        </div>
    );
}
