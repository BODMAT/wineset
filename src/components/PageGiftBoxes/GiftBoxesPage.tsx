import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { CandleLights } from "./CandleLights";
import { GiftSets } from "./GiftSets";
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
        </div>
    )
}