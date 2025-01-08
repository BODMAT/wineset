import { ContactUs } from "../ContactUs/ContactUs";
import { Delivery } from "../Delivery/Delivery";
import { ForWhom } from "../ForWhom/ForWhom";
import { LeafletMap } from "../LeafletMap/LeafletMap";
import { Links } from "../Links/Links";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { WhatMakesUsSpecial } from "../WhatMakesUsSpecial/WhatMakesUsSpecial";
import styles from "./HomePage.module.scss";
export function HomePage() {
    return (
        <div className={styles.content}>
            <SpecialOffer imgSrc="/HomePage/table-with-glasses.jpg"
                title="glasses & сandles" subTitle="CREATE YOUR OWN WINE SET" subTitleLink="/wine" />
            <Links />
            <WhatMakesUsSpecial />
            <ForWhom />
            <Delivery />
            <ContactUs />
            <LeafletMap />
        </div>
    )
}