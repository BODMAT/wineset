import { IProduct } from "../../architecture/Pruduct";
import { useOpacity } from "../../hooks/useOpacity";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";
import { PhotoByCountries } from "./PhotoByCountries";
import { ProductPhoto } from "../ProductPhoto/ProductPhoto";
import { ProductCharacteristics } from "./ProductCharacteristics";
import { ProductActions } from "./ProductActions";
import { ProductPurchasePanel } from "./ProductPurchasePanel";

export function Product({ product }: { product: IProduct }) {
    const { opacity, blockRef } = useOpacity();

    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className="pt-[50px] relative">
            <div className="myContainer relative z-2">
                {/* top */}
                <div className="flex justify-between gap-7 items-center mb-[60px] max-sm:flex-col max-sm:mb-[30px]">
                    <div className="flex flex-col gap-[30px] items-start">
                        <div className="font-medium !text-[14px] tracking-wider uppercase text-[#7a0000] font-[Inter] px-[30px] py-[16px] rounded-[100px] border-2 border-[#7a0000] max-sm:mx-auto">CHOICE OF BUYERS</div>
                        <motion.h1 variants={textFromTopAnimation} className="font-semibold !text-[56px] uppercase text-black font-[Cormorant] max-md:!text-[40px] max-[550px]:!text-[32px] max-sm:text-center">{product.name}</motion.h1>
                    </div>
                    <ProductActions product={product} />
                </div>

                {/* bottom */}
                <div className="flex justify-between gap-7 items-start max-xl:flex-col max-xl:justify-center">
                    {/* Product */}
                    <div className="flex gap-[40px] w-full items-center max-md:flex-col max-md:justify-center max-md:text-center">
                        <PhotoByCountries country={product.country} />
                        <ProductPhoto product={product} imageSize={600} />
                        <ProductCharacteristics product={product} />
                    </div>
                    {/* Prices */}
                    <ProductPurchasePanel product={product} />
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[702px] h-[509px] bottom-[10%] right-[-10%] rotate-180 max-lg:bottom-[-10%] max-md:right-[-50%] max-md:bottom-[0]">
                <img src={`${import.meta.env.BASE_URL}WineSpots/wine-spot-1.png`} alt="wine-spot-1" />
            </div>
        </motion.section>
    );
}
