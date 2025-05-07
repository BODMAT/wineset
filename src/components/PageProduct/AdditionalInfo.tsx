import { motion } from "framer-motion";
import { IProduct } from "../../architecture/Pruduct";
import { useOpacity } from "../../hooks/useOpacity";
import { capitalizeFirstLetter } from "../../utils/utils";
import { Recommended } from "../Recommended/Recommended";
import { blockFromRightAnimation, productLineAnimation, textFromTopAnimation } from "../../utils/animations";
export function AdditionalInfo({ product }: { product: IProduct }) {
    const { opacity, blockRef } = useOpacity();
    return (
        <motion.section initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.3 }}
            ref={blockRef}
            className="bg-[rgba(164,164,164,0.15)] py-[80px] max-md:py-[40px] my-10 relative">
            <div className="myContainer relative z-2">
                {product.kindOfProduct !== "box" && (
                    <motion.h2 variants={textFromTopAnimation} className="font-[Cormorant] font-medium !text-[48px] text-[#121212] mb-[45px] max-md:!text-[32px] max-md:text-center">Characteristics</motion.h2>
                )}
                {product.kindOfProduct !== "box" && (
                    <div className="flex justify-between items-center gap-30 font-[Inter] font-medium !text-[14px] tracking-wider uppercase text-[#121212] max-md:flex-col max-md:gap-20">
                        {product?.fullDescription && (
                            <>
                                {(product.fullDescription.prosentShugar != null ||
                                    product.fullDescription.prosentAcid != null ||
                                    product.fullDescription.prosentAroma != null ||
                                    product.fullDescription.prosentTaste != null) && (
                                        <div className="flex flex-col gap-[30px]">
                                            {!isNaN(product.fullDescription?.prosentShugar ?? NaN) && (
                                                <div className="flex items-center justify-between gap-6 max-[420px]:flex-col">
                                                    <h5>Sweetness</h5>
                                                    <span className="rounded-[10px] w-[244px] h-[7px] bg-[rgba(164,164,164,0.55)] relative overflow-hidden">
                                                        <motion.div
                                                            custom={(244 * (product.fullDescription?.prosentShugar ?? 0)) / 100}
                                                            variants={productLineAnimation}
                                                            className="absolute top-0 left-0 h-full rounded-[10px] bg-[linear-gradient(135deg,_#7a0000_0%,_#900_100%)]"
                                                        />
                                                    </span>
                                                </div>
                                            )}

                                            {!isNaN(product.fullDescription?.prosentAcid ?? NaN) && (
                                                <div className="flex items-center justify-between gap-6 max-[420px]:flex-col">
                                                    <h5>Acidity</h5>
                                                    <span className="rounded-[10px] w-[244px] h-[7px] bg-[rgba(164,164,164,0.55)] relative overflow-hidden">
                                                        <motion.div
                                                            custom={(244 * (product.fullDescription?.prosentAcid ?? 0)) / 100}
                                                            variants={productLineAnimation}
                                                            className="absolute top-0 left-0 h-full rounded-[10px] bg-[linear-gradient(135deg,_#7a0000_0%,_#900_100%)]"
                                                        />
                                                    </span>
                                                </div>
                                            )}

                                            {!isNaN(product.fullDescription?.prosentAroma ?? NaN) && (
                                                <div className="flex items-center justify-between gap-6 max-[420px]:flex-col">
                                                    <h5>Aromaticity</h5>
                                                    <span className="rounded-[10px] w-[244px] h-[7px] bg-[rgba(164,164,164,0.55)] relative overflow-hidden">
                                                        <motion.div
                                                            custom={(244 * (product.fullDescription?.prosentAroma ?? 0)) / 100}
                                                            variants={productLineAnimation}
                                                            className="absolute top-0 left-0 h-full rounded-[10px] bg-[linear-gradient(135deg,_#7a0000_0%,_#900_100%)]"
                                                        />
                                                    </span>
                                                </div>
                                            )}

                                            {!isNaN(product.fullDescription?.prosentTaste ?? NaN) && (
                                                <div className="flex items-center justify-between gap-6 max-[420px]:flex-col">
                                                    <h5>Taste</h5>
                                                    <span className="rounded-[10px] w-[244px] h-[7px] bg-[rgba(164,164,164,0.55)] relative overflow-hidden">
                                                        <motion.div
                                                            custom={(244 * (product.fullDescription?.prosentTaste ?? 0)) / 100}
                                                            variants={productLineAnimation}
                                                            className="absolute top-0 left-0 h-full rounded-[10px] bg-[linear-gradient(135deg,_#7a0000_0%,_#900_100%)]"
                                                        />
                                                    </span>
                                                </div>
                                            )}

                                        </div>
                                    )}


                                <div className="flex gap-[40px] flex-wrap max-md:text-center max-md:justify-center">
                                    {product?.fullDescription?.productStyle && (
                                        <motion.div variants={blockFromRightAnimation} className="font-[Inter] font-medium">
                                            <h3 className="!text-[18px] text-[#7a0000] mb-[10px]">{capitalizeFirstLetter(product.kindOfProduct)} style:</h3>
                                            <p className="!text-[16px] text-[#121212] lowercase">{product.fullDescription.productStyle}</p>
                                        </motion.div>
                                    )}
                                    {product?.fullDescription?.tastingCharacteristics && (
                                        <motion.div custom={1} variants={blockFromRightAnimation} className="font-[Inter] font-medium">
                                            <h3 className="!text-[18px] text-[#7a0000] mb-[10px]">Tasting Characteristics:</h3>
                                            <p className="!text-[16px] text-[#121212] lowercase">{product.fullDescription.tastingCharacteristics}</p>
                                        </motion.div>
                                    )}
                                    {product?.fullDescription?.gastronomicCombinations && (
                                        <motion.div custom={2} variants={blockFromRightAnimation} className="font-[Inter] font-medium">
                                            <h3 className="!text-[18px] text-[#7a0000] mb-[10px]">Gastronomic Combinations:</h3>
                                            <p className="!text-[16px] text-[#121212] lowercase">{product.fullDescription.gastronomicCombinations}</p>
                                        </motion.div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                )}
                {product.kindOfProduct === "box" && (
                    <Recommended productFilter="boxStructure" structureConfig={product.structure} />
                )}
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[402px] h-[309px] bottom-[10%] right-[-10%] rotate-180 max-lg:bottom-[-10%] max-md:right-[-50%] max-md:bottom-[0]">
                <img src={`${import.meta.env.BASE_URL}WineSpots/wine-spot-2.png`} alt="wine-spot-2" />
            </div>
        </motion.section >
    )
}