import { Instagram } from "../PageHome/Instagram/Instagram";
import { Recommended } from "../Recommended/Recommended";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { CustomVideoFrame } from "./CustomVideoFrame";
import { OurSommeliers } from "./OurSommeliers";

export function PageSommelier() {
    return (
        <div className="relative pt-[143px] max-md:pt-[84px]">
            <OurSommeliers />
            <Recommended productFilter="wine" />
            <CustomVideoFrame />
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