import { Instagram } from "../PageHome/Instagram/Instagram";
import { Recommended } from "../Recommended/Recommended";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Description } from "./Description";

export function PageWineAndAlco() {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <SpecialOffer imgSrc="/PageWineAndAlco/alco-drinks.webp"
                supTitle="Special offer"
                title="best wines & alcohols"
                subTitle="ORDER BEST WINES"
                subTitleLink="/Wine-and-alcohol/Wine"
                contentWidth={381} />
            <Description />
            <Recommended productFilter="wine" filterByDiscount={false} />
            <SpecialOffer imgSrc="/HomePage/sommelier.jpg"
                supTitle="Sommelier Choice"
                title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                subTitle="ARTICLES ABOUT WINE"
                subTitleLink="/Articles"
                contentWidth={893} />
            <Recommended productFilter="whiskey" filterByDiscount={false} />
            <Instagram />
        </div>
    )
}