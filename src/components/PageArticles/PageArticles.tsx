
import { Instagram } from "../PageHome/Instagram/Instagram";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Articles } from "./Articles";
import { IntroArticles } from "./IntroArticles";

export function PageArticles() {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <IntroArticles />
            <Articles />
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