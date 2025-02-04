import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { CandleLights } from "./CandleLights";
import { GiftSets } from "./GiftSets";
import { Recommended } from "../Recommended/Recommended";
import { Instagram } from "../PageHome/Instagram/Instagram";
export function GiftBoxesPage() {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <SpecialOffer imgSrc="/GiftBoxesPage/gifts.jpg"
                supTitle="Special offer"
                title="glasses & сandles"
                subTitle="ORDER GIFT SET"
                subTitleLink="/order"
                contentWidth={381} />
            <GiftSets />
            <CandleLights />
            <Recommended productFilter="glasses" />
            <SpecialOffer imgSrc="/HomePage/sommelier.jpg"
                supTitle="Sommelier Choice"
                title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                subTitle="ORDER CONSULT"
                subTitleLink="/wine"
                contentWidth={893} />
            <Instagram />
        </div>
    )
}