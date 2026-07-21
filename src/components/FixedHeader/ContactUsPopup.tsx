import { LeafletMap } from "../LeafletMap/LeafletMap";
import InstagramIcon from "../../assets/Header/inst.svg";
import TelegramIcon from "../../assets/Header/tg.svg";
import FacebookIcon from "../../assets/Header/facebook.svg";
import crossSVG from "../../assets/cross.svg";
import { Link } from "react-router-dom";
import { ContactUsPopupProps } from "../../types/interfaces";

export function ContactUsPopup({ state, setState }: ContactUsPopupProps) {
    return (
        <div className={"transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] absolute z-10 w-[453px] h-[600px] top-0 right-0 bg-white " + (state.moreInfo ? "visible translate-y-[75px] opacity-100 flex flex-col" : "opacity-0 -translate-y-full invisible")}>
            <div className="p-5 flex items-center justify-between bg-[#121212]">
                <h3 className="text-white font-inter font-medium leading-[1.3] uppercase fluid-text [--fmin:18] [--fmax:21]">Contacts</h3>
                <button onClick={() => setState(prev => ({ ...prev, moreInfo: false }))} className="bg-transparent">
                    <img src={crossSVG} alt="cross" />
                </button>
            </div>
            <div className="py-[25px]">
                <div className="px-[47px] text-[#121212] font-inter font-normal leading-[29px] [&_span]:font-semibold [&>*]:mb-[14px] [&>*:last-of-type]:mb-[37px]">
                    <div><span>Address:</span> Zabuttsia Sahakanskiy, 25, Kyiv</div>
                    <div><span>Phone:</span> 1235123123, 15121231231</div>
                    <div><span>Email:</span> delivery@wineset.ua</div>
                </div>
                <LeafletMap height={"180px"} />
                <div className="pt-[30px] pb-5 flex justify-evenly [&>*]:transitioned [&>*]:hover:scale-110">
                    <a target="_blank" href="https://www.facebook.com/"><img src={FacebookIcon} alt="facebook" /></a>
                    <a target="_blank" href="https://web.telegram.org/"><img src={TelegramIcon} alt="tg" /></a>
                    <a target="_blank" href="https://www.instagram.com/wineshop.kyiv/"><img src={InstagramIcon} alt="inst" /></a>
                </div>
                <Link className="flex justify-center text-center mx-auto max-w-[250px] rounded-[3px] bg-[#7A0000] text-white font-inter font-semibold px-[50px] py-[15px] border-2 border-[#7A0000] transitioned hover:bg-transparent hover:text-[#7A0000]" to="/Delivery">About Delivery</Link>
            </div>
        </div>
    )
}
