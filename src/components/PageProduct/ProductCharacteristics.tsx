import { IProduct } from "../../architecture/Pruduct";
import { capitalizeFirstLetter, getRating } from "../../utils/utils";
import Sertificate1 from "../../assets/Product/Sertificates/1.svg";
import Sertificate2 from "../../assets/Product/Sertificates/2.svg";
import Sertificate3 from "../../assets/Product/Sertificates/3.svg";
import { RatingStars } from "./RatingStars";
import { useReviews } from "../../hooks/useReviews";

export function ProductCharacteristics({ product }: { product: IProduct }) {
    const productClass: string = capitalizeFirstLetter(product.kindOfProduct);
    const productId: string = product.id ? product.id : "anonymous";
    const { data: reviews = [] } = useReviews([productClass, "items", productId]);

    const rating = getRating(reviews);
    return (
        <div className="flex flex-col gap-[12px] font-medium !text-[18px] text-black !font-[Inter] min-w-[150px] max-w-[420px] max-md:text-center max-md:mx-auto max-md:items-center max-[500px]:mt-[-70px]">
            <div className="">Rating ({reviews.length} votes):</div>
            {reviews.length > 0 ? (<RatingStars rating={rating} />) : <div className="text-black">No reviews yet</div>}
            <div className="flex gap-3 mb-5">
                <img src={Sertificate1} alt="sertificate 1" />
                <img src={Sertificate2} alt="sertificate 2" />
                <img src={Sertificate3} alt="sertificate 3" />
            </div>

            {product.country && (
                <div className="">Country{product.fullDescription?.region ? ", region" : ""}: {product.country}{product.fullDescription?.region ? `, ${product.fullDescription?.region}` : ""}</div>
            )}

            <div className="">Product: {capitalizeFirstLetter(product.kindOfProduct)}</div>

            {product?.fullDescription?.shugarType && (
                <div>{`Shugar: ${product.fullDescription.shugarType}`}</div>
            )}

            {product?.fullDescription?.grape && (
                <div>{`Grapes: ${product.fullDescription.grape}`}</div>
            )}

            {product?.fullDescription?.maker && (
                <div>{`Maker: ${product.fullDescription.maker}`}</div>
            )}

            {product?.fullDescription?.fortress && (
                <div>{`Fortress: ${product.fullDescription.fortress}`}</div>
            )}

            {product?.volume && (
                <div>{`Volume: ${product.volume} l`}</div>
            )}

            {product?.weight && (
                <div>{`Weight: ${product.weight} kg`}</div>
            )}

        </div>
    )
}