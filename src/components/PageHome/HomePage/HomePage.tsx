import { LeafletMap } from "../../LeafletMap/LeafletMap";
import { SpecialOffer } from "../../SpecialOffer/SpecialOffer";
import { ContactUs } from "../ContactUs/ContactUs";
import { Delivery } from "../Delivery/Delivery";
import { ForWhom } from "../ForWhom/ForWhom";
import { GiftBackets } from "../GiftBaskets/GiftBackets";
import { Instagram } from "../Instagram/Instagram";
import { Links } from "../Links/Links";
import { WhatMakesUsSpecial } from "../WhatMakesUsSpecial/WhatMakesUsSpecial";
import styles from "./HomePage.module.scss";
export function HomePage() {
    return (
        <div className={styles.content}>
            <SpecialOffer imgSrc="/HomePage/table-with-glasses.jpg"
                supTitle="Special offer"
                title="glasses & сandles"
                subTitle="CREATE YOUR OWN WINE SET"
                subTitleLink="/wine"
                contentWidth={381} />
            <Links />
            <WhatMakesUsSpecial />
            <ForWhom />
            <Delivery />
            <ContactUs />
            <LeafletMap />
            <GiftBackets />
            <SpecialOffer imgSrc="/HomePage/sommelier.jpg"
                supTitle="Sommelier Choice"
                title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                subTitle="ARTICLES ABOUT WINE"
                subTitleLink="/Articles"
                contentWidth={893} />
            <Instagram />
        </div>
    )
}