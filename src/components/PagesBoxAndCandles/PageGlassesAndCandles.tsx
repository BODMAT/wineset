import { Instagram } from "../PageHome/Instagram/Instagram";
import { Recommended } from "../Recommended/Recommended";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { CandleLights } from "./CandleLights";
import { GiftSets } from "./GiftSets";

export function PageGlassesAndCandles() {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <SpecialOffer imgSrc="./GiftBoxesPage/CandleLights/background.webp"
                supTitle="Special offer"
                title="glasses & сandles"
                subTitle="ORDER BEST CANDLES"
                subTitleLink="/Glasses-and-candles/Candles"
                contentWidth={381} />
            <CandleLights />
            <GiftSets />
            <Recommended productFilter="glass" filterByDiscount={true} />

            <SpecialOffer imgSrc="./HomePage/sommelier.jpg"
                supTitle="Sommelier Choice"
                title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                subTitle="ARTICLES ABOUT WINE"
                subTitleLink="/Articles"
                contentWidth={893} />
            <Instagram />
        </div>
    )
}