import { motion } from "framer-motion";
import { resolveImageUrl } from "../../utils/utils";
import { blockFromRightAnimation, textFromTopAnimation } from "../../utils/animations";

export function PageMessage({ message }: { message: string }) {
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }} className="myContainer py-[20px] text-center text-[60px] font-[Cormorant] font-bold flex gap-10 justify-between items-center max-[500px]:flex-col max-[500px]:text-[40px] max-[500px]:pt-[20px]">
            <motion.h3 variants={textFromTopAnimation} className="flex-1/2">{message}</motion.h3>
            <motion.div variants={blockFromRightAnimation} className="flex-1/2">
                <img src={resolveImageUrl("/ErrorPage/cat-w-wine.jpg")} alt="cat" />
            </motion.div>
        </motion.section>
    )
}