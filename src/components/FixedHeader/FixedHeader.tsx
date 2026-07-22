import { Link } from "react-router-dom";
import { useState } from "react";
import { ContactUsPopup } from "./ContactUsPopup";
import { Auth } from "../Auth/Auth";
import { useAuthStore } from "../../store/auth";
import { Search } from "./Search";
import arrToBottom from "../../assets/arr-to-bottom.svg";
import { useHeaderState } from "./useHeaderState";
import { BurgerButton } from "./BurgerButton";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderBuyButtons } from "./HeaderBuyButtons";

const contactBaseCls = "text-center flex justify-center font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-white transitioned relative";

export function FixedHeader() {
    const { state, setState } = useHeaderState();
    const [loginActive, setLoginActive] = useState(false);
    const { user } = useAuthStore();

    return (
        <>
            <header className="relative">
                {/* top bar: logo, search, account and contact */}
                <div className="z-[11] fixed w-full h-[84px] top-0 left-0 bg-[#121212]">
                    <div className="myContainer">
                        <div className="h-[84px] gap-5 md:flex md:items-center md:justify-between max-md:relative max-md:block">
                            <div className="md:flex-[0_1_33.333%] max-md:z-[250] max-md:relative max-md:top-[25px] max-md:max-w-[229px]">
                                <Link to="/">
                                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" />
                                </Link>
                                {!state.isLargeScreen && (
                                    <BurgerButton
                                        isActive={state.isBurgerActive}
                                        onClick={() => setState(prev => ({ ...prev, isBurgerActive: !prev.isBurgerActive }))}
                                    />
                                )}
                            </div>
                            <div className={"md:flex-auto md:flex md:items-center md:justify-between md:gap-5 " + (state.isBurgerActive ? "max-md:flex max-md:absolute max-md:z-[200] max-md:w-full max-md:h-auto max-md:top-0 max-md:left-0 max-md:pt-[25vh] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-5 max-md:text-center" : "max-md:hidden")}>
                                <Search />
                                <div className="flex gap-2.5 items-center max-[991.98px]:gap-[5px]">
                                    <button onClick={() => setLoginActive(true)} className="text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent">
                                        {user ? user.displayName : "Sing in"}
                                    </button>

                                    <div className="relative">
                                        {state.isLargeScreen && (
                                            <button onClick={() => setState(prev => ({ ...prev, moreInfo: !prev.moreInfo }))} className={contactBaseCls + " bg-transparent"}>
                                                Contact us
                                                <img src={arrToBottom} alt="" className={"absolute w-[7px] h-[7px] bottom-[40%] right-[10%] transitioned " + (state.moreInfo ? "rotate-[-90deg]" : "rotate-0")} />
                                            </button>
                                        )}
                                        {!state.isLargeScreen && (
                                            <Link to="/Delivery" className={contactBaseCls + " bg-[#7A0000] border-2 border-[#7A0000] hover:bg-transparent"}>Delivery</Link>
                                        )}
                                        <ContactUsPopup state={state} setState={setState} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom bar on desktop, full screen burger overlay on mobile */}
                <div className={"md:transition-all md:duration-500 md:ease-[cubic-bezier(0.075,0.82,0.165,1)] md:fixed md:z-10 md:w-full md:h-[59px] md:left-0 md:bg-white md:pt-0 " + (state.isScrolledDown ? "md:top-[-59px] " : "md:top-[84px] ") + (state.isBurgerActive ? "max-md:fixed max-md:inset-0 max-md:z-[9] max-md:bg-[rgba(0,0,0,0.91)]" : "max-md:hidden")}>
                    <div className="myContainer">
                        <div className="md:flex md:justify-between md:items-center md:h-[59px] max-md:flex max-md:flex-col max-md:items-center max-md:text-center max-md:gap-y-[25px] max-md:pt-[35vh] max-md:h-full">
                            <HeaderMenu activeLink={state.activeLink} />
                            <HeaderBuyButtons />
                        </div>
                    </div>
                </div>
            </header >
            <Auth loginActive={loginActive} setLoginActive={setLoginActive} />
        </>
    )
}
