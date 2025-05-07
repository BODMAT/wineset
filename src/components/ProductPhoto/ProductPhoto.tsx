import { IProduct } from "../../architecture/Pruduct"
import { resolveImageUrl } from "../../utils/utils";
export function ProductPhoto({ product, imageSize = 305 }: { product: IProduct, imageSize?: number }) {
    const height: string = imageSize + "px";
    return (
        <div className="relative flex justify-center mx-auto w-full mb-[33px]" style={{ height }}>
            {product.imageUrl && (
                <img className="absolute z-2 w-[70%] h-[70%] object-contain" style={{ height }} src={resolveImageUrl(product.imageUrl)} alt={product.imageUrl} />
            )}
            {product.discount !== undefined && product.discount > 0 && (
                <div className="absolute z-3 w-[48px] h-[48px] right-0 top-0 rounded-[50%] bg-[#7A0000] text-white flex justify-center items-center">-{product.discount}%</div>
            )}
            {/* Textures */}
            {product.country === "France" && (
                <img src={`${import.meta.env.BASE_URL}Products/France.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Italy" && (
                <img src={`${import.meta.env.BASE_URL}Products/Italy.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Bulgaria" && (
                <img src={`${import.meta.env.BASE_URL}Products/Bulgaria.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Canada" && (
                <img src={`${import.meta.env.BASE_URL}Products/Canada.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Finland" && (
                <img src={`${import.meta.env.BASE_URL}Products/Finland.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Greece" && (
                <img src={`${import.meta.env.BASE_URL}Products/Greece.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Ireland" && (
                <img src={`${import.meta.env.BASE_URL}Products/Ireland.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Japan" && (
                <img src={`${import.meta.env.BASE_URL}Products/Japan.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Madagascar" && (
                <img src={`${import.meta.env.BASE_URL}Products/Madagascar.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Poland" && (
                <img src={`${import.meta.env.BASE_URL}Products/Poland.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Scotland" && (
                <img src={`${import.meta.env.BASE_URL}Products/Scotland.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Spain" && (
                <img src={`${import.meta.env.BASE_URL}Products/Spain.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Sweden" && (
                <img src={`${import.meta.env.BASE_URL}Products/Sweden.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Switzerland" && (
                <img src={`${import.meta.env.BASE_URL}Products/Switzerland.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Thailand" && (
                <img src={`${import.meta.env.BASE_URL}Products/Thailand.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Ukraine" && (
                <img src={`${import.meta.env.BASE_URL}Products/Ukraine.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "USA" && (
                <img src={`${import.meta.env.BASE_URL}Products/USA.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "England" && (
                <img src={`${import.meta.env.BASE_URL}Products/England.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Australia" && (
                <img src={`${import.meta.env.BASE_URL}Products/Australia.png`} alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
        </div>
    )
}