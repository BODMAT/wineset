import { Link } from "react-router-dom"

import phoneIcon from "../../assets/Footer/Phone.svg";
import mapPinIcon from "../../assets/Footer/MapPin.svg";
import instagramIcon from "../../assets/Footer/instagram.svg";
import telegramIcon from "../../assets/Footer/telegram.svg";
import facebookIcon from "../../assets/Footer/facebook.svg";

export function FixedFooter() {
    return (
        <footer className="p-[50px] flex-[0_1_200px] bg-black [&_*]:font-medium [&_*]:text-white">
            <div className="myContainer flex justify-between gap-2.5 max-md:flex-col max-md:items-center max-md:justify-center max-md:text-center max-md:gap-[30px]">
                <div>
                    <Link to="/">
                        <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" />
                    </Link>
                </div>
                <nav className="flex gap-x-[70px] max-[991.98px]:flex-col max-[991.98px]:gap-y-[25px]">
                    <ul className="flex flex-col gap-[25px]">
                        <li className="hover:underline"><Link to="/Gift-sets">Gift sets</Link></li>
                        <li className="hover:underline"><Link to="/Wine-and-alcohol">Wine and alcohol</Link></li>
                        <li className="hover:underline"><Link to="/Delicacies">Delicacies</Link></li>
                        <li className="hover:underline"><Link to="/Glasses-and-candles">Glasses and candles</Link></li>
                    </ul>
                    <div className="flex flex-col gap-[25px]">
                        <a className="hover:underline" target="_blank" href="https://en.wikipedia.org/wiki/Privacy_policy">Privacy policy</a>
                        <a className="hover:underline" target="_blank" href="https://en.wikipedia.org/wiki/End-user_license_agreement">User agreement</a>
                    </div>
                </nav>
                <div>
                    <div className="flex gap-[15px] justify-center flex-col mb-5">
                        <div className="flex gap-[5px] max-md:justify-center">
                            <img className="pr-[14px]" src={phoneIcon} alt="phone" />
                            <span>1235123123, 15121231231</span>
                        </div>
                        <div className="flex gap-[5px] max-md:justify-center">
                            <img className="pr-[14px]" src={mapPinIcon} alt="map" />
                            <span>Zabuttsia Sahakanskiy, 25, Kyiv</span>
                        </div>
                    </div>
                    <div className="pb-[30px] flex gap-[13px] items-center max-md:justify-self-center">
                        <a className="transitioned hover:scale-110" target="_blank" href="https://www.facebook.com/"><img src={facebookIcon} alt="facebook" /></a>
                        <a className="transitioned hover:scale-110" target="_blank" href="https://web.telegram.org/"><img src={telegramIcon} alt="tg" /></a>
                        <a className="transitioned hover:scale-110" target="_blank" href="https://www.instagram.com/wineshop.kyiv/"><img src={instagramIcon} alt="inst" /></a>
                    </div>
                    <Link to="/Delivery" className="px-[30px] py-[14px] bg-[#7A0000] border-2 border-[#7A0000] transitioned rounded-[3px] hover:bg-transparent">Delivery</Link>
                </div>
            </div>
        </footer>
    )
}
