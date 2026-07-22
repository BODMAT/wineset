import { useOpacity } from "../../../hooks/useOpacity"
import { BorderedLink } from "../../BorderedLink/BorderedLink"
import { motion } from "framer-motion"
import { textFromTopAnimation } from "../../../utils/animations"
export function Delivery() {
    const { opacity, blockRef } = useOpacity()
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            ref={blockRef}
            className="relative pb-[140px]">
            <div className="relative z-[2] myContainer">
                <motion.h2 variants={textFromTopAnimation} className="text-[#121212] text-[48px] font-cormorant font-bold leading-normal uppercase mb-[50px] max-md:text-center max-md:mb-[25px]">Delivery</motion.h2>
                <div className="flex justify-between gap-[60px] max-[1279.98px]:justify-center max-[1279.98px]:flex-wrap max-md:gap-[30px]">
                    <div className="max-w-[640px] max-[1279.98px]:order-3">
                        <img className="w-full" src="./HomePage/Delivery/wine-cork.jpg" alt="cork" />
                    </div>
                    <div className="max-w-[320px] text-[#121212] font-inter font-normal leading-[22px] max-md:text-center">
                        Wine delivery services provide customers with a convenient way to enjoy their favorite bottles without leaving home. Whether ordering a single bottle or stocking up for an event, stores offer a variety of delivery options to suit different needs. Many shops also provide special packaging to ensure that wines arrive in perfect condition. Some retailers even offer same-day delivery for last-minute plans, adding an extra layer of convenience. Additionally, many services include tracking features, so customers can monitor their order from dispatch to doorstep.
                    </div>
                    <div className="flex flex-col justify-between gap-2.5 max-[1279.98px]:order-1">
                        <div className="max-w-[320px] text-[#121212] font-inter font-normal leading-[22px] max-md:text-center">
                            In addition to fast delivery, some wine stores offer curated selections tailored to individual tastes. Customers can subscribe to monthly wine boxes or choose from expertly recommended pairings for specific occasions. This combination of quality, convenience, and personalization makes wine delivery an increasingly popular choice.
                        </div>
                        <BorderedLink to="/Delivery">DELIVERY DETAILS</BorderedLink>
                    </div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[360px] h-[380px] top-[40%] left-[-10%]">
                <img src="./WineSpots/wine-spot-2.png" alt="wine-spot-2" />
            </div>
        </motion.section>
    )
}
