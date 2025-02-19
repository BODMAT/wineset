import { Instagram } from "../PageHome/Instagram/Instagram";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { PersonalDataForm } from "./PersonalDataFrom";

export function PageOrder() {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <PersonalDataForm />
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