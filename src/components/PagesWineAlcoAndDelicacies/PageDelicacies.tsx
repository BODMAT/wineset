import { Instagram } from "../PageHome/Instagram/Instagram";
import { Recommended } from "../Recommended/Recommended";
import { SpecialOffer } from "../SpecialOffer/SpecialOffer";
import { Description } from "./Description";

export function PageDelicacies() {
    return (
        <div className='relative pt-[143px] max-md:pt-[84px]'>
            <SpecialOffer imgSrc={`${import.meta.env.BASE_URL}PageWineAlcoAndDelicacies/bg-delicacy.webp`}
                supTitle="Special offer"
                title="gourmet delicacies"
                subTitle="EXPLORE OUR DELICACIES"
                subTitleLink="/Delicacies/Delicacies"
                contentWidth={381} />
            <Description
                title="Delicacies for Connoisseurs"
                text={
                    <>
                        <p className="md:first:indent-5 mb-4">
                            Pair your wine with exquisite delicacies that elevate every tasting experience. Our collection features gourmet cheeses, artisanal cookies, savory sauces, and other refined treats sourced from trusted producers across Europe.
                        </p>
                        <p className="md:first:indent-5 mb-16">
                            Whether you’re assembling a gift box, planning a wine and food pairing, or indulging in a moment of personal luxury — our delicacies are the perfect complement. Taste tradition, innovation, and craftsmanship in every bite.
                        </p>
                    </>
                }
                link="/Delicacies/Delicacies"
                imgSrc={`${import.meta.env.BASE_URL}PageWineAlcoAndDelicacies/delicacy.jpeg`}
            />

            <Recommended productFilter="delicacy" filterByDiscount={false} />
            <SpecialOffer imgSrc="./HomePage/sommelier.jpg"
                supTitle="Sommelier Choice"
                title="NOT SURE WHICH TO CHOOSE? WE ARE READY TO HELP!"
                subTitle="ARTICLES ABOUT WINE"
                subTitleLink="/Articles"
                contentWidth={893} />
            <Recommended productFilter="cheese" filterByDiscount={false} />
            <Instagram />
        </div>
    )
}