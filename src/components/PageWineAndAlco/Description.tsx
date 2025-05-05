import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";
import { BorderedLink } from "../BorderedLink/BorderedLink";

export function Description() {
    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="myContainer pt-10 pb-2 max-[950px]:text-center">
            <motion.h2 variants={textFromTopAnimation} className="text-[#121212] font-[Cormorant] !font-bold uppercase leading-normal !text-[48px] max-md:!text-[40px] max-sm:!text-[30px] mb-3">Our collections</motion.h2>
            <div className="flex items-center justify-between gap-8 max-[950px]:flex-col max-[950px]:gap-16">
                <div className="flex-2/3 text-[#121212] !text-[18px] font-[Inter] font-normal leading-[26px] tracking-[0] not-italic max-sm:!text-[16px]">
                    <p className="md:first:indent-5 mb-4">Explore our curated collection of fine wines and premium spirits from around the world. Whether you're searching for a bold red, a crisp white, or a celebratory sparkling wine, we offer a wide variety to satisfy every palate. Each bottle is carefully selected to reflect the character of its region and the craftsmanship of its producer.</p>
                    <p className="md:first:indent-5 mb-16">In addition to wines, our selection includes top-shelf whiskeys, smooth vodkas, aromatic gins, and more. Whether you're planning a special event or simply enjoying a quiet evening, you’ll find the perfect drink to match the moment. Discover new favorites and timeless classics at your fingertips.</p>
                    <BorderedLink to="/Articles" children={"MOREOVER"} />
                </div>
                <div className="">
                    <img src="/PageWineAndAlco/wine.jpg" alt="wine" />
                </div>
            </div>
        </motion.section>
    )
}