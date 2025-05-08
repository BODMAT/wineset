import { motion } from "framer-motion";
import { BorderedLink } from "../BorderedLink/BorderedLink";
import { textFromTopAnimation } from "../../utils/animations";

export function AboutDelivery() {
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="myContainer pt-10 pb-5">
            <div className="flex h-full gap-10 max-lg:flex-col items-center justify-between max-lg:text-center max-lg:gap-15 mb-15">
                <div className="">
                    <motion.h2 variants={textFromTopAnimation} className="text-[#121212] font-[Cormorant] !font-bold uppercase leading-normal !text-[48px] max-md:!text-[40px] max-sm:!text-[30px] mb-3">About Delivery</motion.h2>
                    <p className="text-[#121212] !text-[18px] font-[Inter] font-normal leading-[26px] tracking-[0] not-italic max-sm:!text-[16px] mb-13">
                        At our store, we take pride in offering fast and reliable delivery across Ukraine. Whether you’re indulging in our gourmet delicacies for yourself or sending a thoughtful gift to someone special, we ensure that every order arrives fresh, well-packed, and with the utmost care. Our delivery service is designed to meet your needs, offering convenient shipping options and timely arrivals. With a focus on quality and customer satisfaction, we guarantee that your culinary experience begins the moment your package arrives at your doorstep.
                    </p>
                    <BorderedLink to={"/Cart"} children={"GO TO CART"} />
                </div>
                <div className="max-w-[550px] max-h-[350px]">
                    <img src={`${import.meta.env.BASE_URL}PageDelivery/delivery.webp`} alt="delivery" />
                </div>
            </div>
            <div className="flex gap-20 justify-center items-center flex-wrap">
                <a href="https://novaposhta.ua/" target="_blank">
                    <img className="max-w-[300px]" src={`${import.meta.env.BASE_URL}PageDelivery/Nova_Poshta.svg`} alt="Nova_Poshta" />
                </a>
                <a href="https://www.ukrposhta.ua/ua" target="_blank">
                    <img className="max-w-[300px]" src={`${import.meta.env.BASE_URL}PageDelivery/Ukrposhta-ua.svg`} alt="Ukrposhta-ua" />
                </a>
                <a href="https://ua.meest.com/" target="_blank">
                    <img className="max-w-[300px]" src={`${import.meta.env.BASE_URL}PageDelivery/Meest.svg`} alt="Meest-ua" />
                </a>
            </div>
        </motion.section>
    )
}