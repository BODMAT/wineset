import { IProduct } from "../../data/OOPStructure/Pruduct"
export function ProductPhoto({ product, imageHeight = 305 }: { product: IProduct, imageHeight?: number }) {
    const height: string = imageHeight + "px";
    return (
        <div className="relative flex justify-center mx-auto w-full mb-[33px]" style={{ height }}>
            <img className="absolute z-2 w-[182px] h-[305px] object-contain" style={{ height }} src={product.imageUrl} alt={product.imageUrl} />
            {product.discount !== undefined && product.discount > 0 && (
                <div className="absolute z-3 w-[48px] h-[48px] right-0 top-0 rounded-[50%] bg-[#7A0000] text-white flex justify-center items-center">-{product.discount}%</div>
            )}
            {/* Textures */}
            {product.country === "France" && (
                <img src="/Products/France.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Italy" && (
                <img src="/Products/Italy.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Bulgaria" && (
                <img src="/Products/Bulgaria.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Canada" && (
                <img src="/Products/Canada.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Finland" && (
                <img src="/Products/Finland.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Greece" && (
                <img src="/Products/Greece.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Ireland" && (
                <img src="/Products/Ireland.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Japan" && (
                <img src="/Products/Japan.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Madagascar" && (
                <img src="/Products/Madagascar.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Poland" && (
                <img src="/Products/Poland.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Scotland" && (
                <img src="/Products/Scotland.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Spain" && (
                <img src="/Products/Spain.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Sweden" && (
                <img src="/Products/Sweden.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Switzerland" && (
                <img src="/Products/Switzerland.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Thailand" && (
                <img src="/Products/Thailand.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "Ukraine" && (
                <img src="/Products/Ukraine.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "USA" && (
                <img src="/Products/USA.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
            {product.country === "England" && (
                <img src="/Products/England.png" alt="Texture" className="absolute w-[100%] h-[100%] object-contain" />
            )}
        </div>
    )
}