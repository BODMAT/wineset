import { Instagram } from "../PageHome/Instagram/Instagram";
import { Recommended } from "../Recommended/Recommended";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Description } from "./Description";

export function PageWineAndAlco() {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <SpecialOffer imgSrc={`${import.meta.env.BASE_URL}PageWineAlcoAndDelicacies/alco-drinks.webp`}
                supTitle="Special offer"
                title="best wines & alcohols"
                subTitle="ORDER BEST WINES"
                subTitleLink="/Wine-and-alcohol/Wine"
                contentWidth={381} />
            <Description
                title="Our collections"
                text={<>
                    <p className="md:first:indent-5 mb-4">Explore our curated collection of fine wines and premium spirits from around the world. Whether you're searching for a bold red, a crisp white, or a celebratory sparkling wine, we offer a wide variety to satisfy every palate. Each bottle is carefully selected to reflect the character of its region and the craftsmanship of its producer.</p>
                    <p className="md:first:indent-5 mb-16">In addition to wines, our selection includes top-shelf whiskeys, smooth vodkas, aromatic gins, and more. Whether you're planning a special event or simply enjoying a quiet evening, you’ll find the perfect drink to match the moment. Discover new favorites and timeless classics at your fingertips.</p>
                </>}
                link="/Articles"
                imgSrc={`${import.meta.env.BASE_URL}PageWineAlcoAndDelicacies/wine.jpg`}
            />
            <Recommended productFilter="wine" filterByDiscount={false} />
            <SpecialOffer imgSrc="./HomePage/sommelier.jpg"
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