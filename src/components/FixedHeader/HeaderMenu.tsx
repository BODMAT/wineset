import { Link } from "react-router-dom";
import { Menu } from "../../data/Other/Menu";
import { MenuType } from "../../types/types";
import arrToBottomGray from "../../assets/arr-to-bottom-gray.svg";

const linkCls = "transition-all duration-700 ease-[cubic-bezier(0.075,0.82,0.165,1)] py-5 relative md:pr-[35px] md:pl-[25px] md:text-[#121212] md:group-hover:text-white md:group-hover:bg-[#7a0000bf] max-md:text-[22px] max-md:text-white max-md:pr-0 max-md:pl-0";
const subLinkCls = "text-white font-inter font-normal leading-normal py-3 max-w-full border-b border-white transitioned first:pt-0 first:pb-3 hover:text-[#b9b9b9] active:underline";
const subLinksCls = "flex flex-col p-[22px] transitioned absolute w-full h-auto top-0 left-0 bg-[#500000bf] opacity-0 invisible translate-y-0";

/** Top level nav with the hover-revealed sub link panels.
 *  The header__ul / header__li classes are hooks for the mouseover tracking in useHeaderState. */
export function HeaderMenu({ activeLink }: { activeLink: string | null }) {
    return (
        <nav>
            <ul className="header__ul flex md:gap-0 max-md:mt-5 max-md:flex-col max-md:gap-5">
                {Menu.map(([menuKey, subLinks]: MenuType) => {
                    const isActive = activeLink === menuKey;
                    const to = menuKey.trim().replace(/\s+/g, '-');
                    return (
                        <li key={menuKey} data-key={menuKey} className="header__li group relative">
                            <Link className={linkCls} to={to}>
                                {menuKey}
                                <img
                                    src={arrToBottomGray}
                                    alt=""
                                    className={"absolute w-[7px] h-[7px] bottom-[43%] right-[10px] transition-all duration-700 ease-[cubic-bezier(0.075,0.82,0.165,1)] max-md:hidden " + (isActive ? "opacity-0 rotate-[-90deg]" : "")}
                                />
                            </Link>
                            <div className={subLinksCls + " " + (isActive ? "md:opacity-100 md:visible md:translate-y-[37px]" : "")}>
                                {subLinks.map((subLink: string) => (
                                    <Link className={subLinkCls} to={`${to}/${subLink}`} key={`${menuKey}-${subLink}`}>
                                        {subLink}
                                    </Link>
                                ))}
                            </div>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
