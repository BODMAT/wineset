import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";
import { BorderedLink } from "../BorderedLink/BorderedLink";

export function Description({ title, text, link, imgSrc }: { title: string, text: string | JSX.Element, link: string, imgSrc: string }) {
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="myContainer pt-10 pb-2 max-[950px]:text-center">
            <motion.h2 variants={textFromTopAnimation} className="text-[#121212] font-[Cormorant] !font-bold uppercase leading-normal !text-[48px] max-md:!text-[40px] max-sm:!text-[30px] mb-3">{title}</motion.h2>
            <div className="flex items-center justify-between gap-8 max-[950px]:flex-col max-[950px]:gap-16">
                <div className="flex-2/3 text-[#121212] !text-[18px] font-[Inter] font-normal leading-[26px] tracking-[0] not-italic max-sm:!text-[16px]">
                    {text}
                    <BorderedLink to={link} children={"MOREOVER"} />
                </div>
                <div className="max-w-[550px] max-h-[350px]">
                    <img src={imgSrc} alt={imgSrc} />
                </div>
            </div>
        </motion.section>
    )
}