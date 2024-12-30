import { Links } from "../Links/Links";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import styles from "./HomePage.module.scss";
export function HomePage() {
    return (
        <div className={styles.content}>
            <SpecialOffer imgSrc="./public/HomePage/table-with-glasses.jpg"
                title="glasses & сandles" subTitle="CREATE YOUR OWN WINE SET" subTitleLink="/wine" />
            <Links />
        </div>
    )
}