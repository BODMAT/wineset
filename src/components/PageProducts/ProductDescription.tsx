import { useProduct } from "./PageProducts";
import { BorderedLink } from "../BorderedLink/BorderedLink";
import styles from "./PageProducts.module.scss"
import { dataWPostfixes } from "../../data/Other/ReusableProduct";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";

export function ProductDescription() {
    const { product } = useProduct();
    const titlePostfix = dataWPostfixes[product];
    if (!titlePostfix) return null;
    return (
        <motion.section initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className={styles.container}>
            <div className="flex justify-between items-center gap-15 pt-[80px] pb-[20px] max-lg:flex-col max-sm:pt-[40px]">
                <div className="flex flex-col gap-[45px] items-center">
                    <motion.h2 variants={textFromTopAnimation} className={styles.basicTitle}>{titlePostfix.toUpperCase()}</motion.h2>
                    <BorderedLink to="/Gift-sets">GIFT-WRAPPED {titlePostfix.toUpperCase()}</BorderedLink>
                </div>
                <div className="max-w-[1000px] flex gap-15 max-sm:flex-col">
                    <p className={styles.basicText}>{titlePostfix.charAt(0).toUpperCase() + titlePostfix.slice(1)} are truly exceptional in both taste and quality. Carefully crafted using the finest ingredients, {titlePostfix} offer a rich and satisfying experience. Whether enjoyed on their own or paired with a meal, {titlePostfix} bring out the best flavors in every bite or sip. Their unique textures and aromas make them a favorite among connoisseurs and casual consumers alike. With a well-balanced profile, {titlePostfix} provide a perfect harmony of taste that lingers pleasantly. Many have praised their ability to elevate any occasion, turning simple moments into extraordinary ones. If you’re looking for a gourmet experience that never disappoints, {titlePostfix} are the perfect choice.</p>
                    <p className={styles.basicText}>When it comes to indulgence and refinement, {titlePostfix} stand in a league of their own. Their versatility allows them to complement a variety of dishes, making them ideal for both everyday enjoyment and special celebrations. {titlePostfix} are crafted with time-honored techniques that ensure authenticity and depth of flavor. Whether savored slowly or shared with friends, {titlePostfix} create unforgettable experiences. The exceptional quality of {titlePostfix} speaks for itself, making them a must-have for anyone who appreciates fine food and drink. Once you’ve tried {titlePostfix}, you’ll always come back for more.</p>
                </div>
            </div>
        </motion.section>
    )
}