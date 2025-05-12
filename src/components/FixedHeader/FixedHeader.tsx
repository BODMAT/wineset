import { Link, useLocation } from "react-router-dom";
import styles from "./FixedHeader.module.scss";
import searchSVG from "../../assets/search.svg";
import { useEffect, useState } from "react";
import { Menu } from "../../data/Other/Menu";
import { ContactUsPopup } from "./ContactUsPopup";
import { Auth } from "../Auth/Auth";
import { useAuthStore } from "../../store/auth";
import { IHeaderState } from "../../types/interfaces";
import { MenuType } from "../../types/types";
import { useWishlist } from "../../store/wishlist";
import { usePopupStore } from "../../store/popup";
import { WishlistPopup } from "../PopUps/WishlistPopup";
import { CartPopUp } from "../PopUps/CartPopUp";
import { useCart } from "../../store/cart";

export function FixedHeader() {
    const [state, setState] = useState<IHeaderState>({
        isScrolledDown: false,
        lastScrollTop: 0,
        isLargeScreen: window.innerWidth > 767,
        isBurgerActive: false,
        activeLink: null,
        moreInfo: false,
    });

    const location = useLocation();

    //set burger closed
    useEffect(() => setState(prev => ({ ...prev, isBurgerActive: false })), [location]);

    //burger no-scroll
    useEffect(() => {
        const root = document.getElementById('root');
        root?.classList.toggle('no-scroll', state.isBurgerActive && !state.isLargeScreen);
        return () => root?.classList.remove('no-scroll');
    }, [state.isBurgerActive, state.isLargeScreen]);

    //isLargeScreen
    useEffect(() => {
        const handleResize = () => setState(prev => ({ ...prev, isLargeScreen: window.innerWidth > 767 }));
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    //for bottom-header
    useEffect(() => {
        if (!state.isLargeScreen) return;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            setState(prev => ({
                ...prev,
                isScrolledDown: currentScroll > prev.lastScrollTop && currentScroll > 59,
                lastScrollTop: Math.max(currentScroll, 0)
            }));
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [state.lastScrollTop, state.isLargeScreen]);

    //for hovered links
    useEffect(() => {
        if (state.isLargeScreen && !state.isScrolledDown) {
            const handleMouseEnter = (event: React.MouseEvent<HTMLLIElement>) => {
                const target = event.target as HTMLElement;
                const link = target.closest(`.${styles.header__li}`);
                if (link) {
                    setState((prev) => ({ ...prev, activeLink: link.getAttribute('data-key') || null }));
                }
            };

            const handleMouseLeave = () => {
                setState((prev) => ({ ...prev, activeLink: null }));
            };

            const menu = document.querySelector(`.${styles.header__ul}`);
            if (menu) {
                menu.addEventListener('mouseover', handleMouseEnter as unknown as EventListener);
                menu.addEventListener('mouseout', handleMouseLeave as unknown as EventListener);
            }

            return () => {
                if (menu) {
                    menu.removeEventListener('mouseover', handleMouseEnter as unknown as EventListener);
                    menu.removeEventListener('mouseout', handleMouseLeave as unknown as EventListener);
                }
            };
        }
    }, [state.isLargeScreen, state.isScrolledDown]);

    //disable links when bottom-header was hidden
    useEffect(() => {
        if (state.isScrolledDown) setState(prev => ({ ...prev, activeLink: null }));
    }, [state.isScrolledDown]);

    //close more info when change isLargeScreen
    useEffect(() => setState(prev => ({ ...prev, moreInfo: false })), [state.isLargeScreen]);

    const [loginActive, setLoginActive] = useState(false);
    const { user } = useAuthStore();
    const { getWishlistTotal } = useWishlist()
    const { open } = usePopupStore()
    const { getCartTotal } = useCart()
    return (
        <>
            <header className={`${styles.header} ${state.isScrolledDown ? styles.sticky : ""}`}>
                <div className={styles.header__top}>
                    <div className={styles.header__container}>
                        <div className={styles.header__body_top}>
                            <div className={styles.header__logo}>
                                <Link to="/">
                                    <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="logo" />
                                </Link>
                                {!state.isLargeScreen && (
                                    <button
                                        onClick={() => setState(prev => ({ ...prev, isBurgerActive: !prev.isBurgerActive }))}
                                        className={`${styles.burgerIcon} ${state.isBurgerActive ? styles.active : ""}`}
                                    >
                                        <span></span>
                                    </button>
                                )}
                            </div>
                            <div className={`${styles.header__info} ${state.isBurgerActive ? styles.active_burger : ""}`}>
                                <form action="#" className={styles.header__form}>
                                    <input className={styles.header__form_input} type="text" placeholder="Find a drink..." />
                                    <button className={styles.header__form_btn} type="submit">
                                        <img src={searchSVG} alt="search" />
                                    </button>
                                </form>
                                <div className={styles.header__buttons}>
                                    <button onClick={() => setLoginActive(true)} className="text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent">
                                        {user ? user.displayName : "Sing in"}
                                    </button>

                                    <div className={styles.header__contact_wrap}>
                                        {state.isLargeScreen && (
                                            <button onClick={() => setState(prev => ({ ...prev, moreInfo: !prev.moreInfo }))} className={styles.header__contact}>Contact us</button>
                                        )}
                                        {!state.isLargeScreen && (
                                            <Link to="/about" className={styles.header__contact}>Contact us</Link>
                                        )}
                                        <ContactUsPopup state={state} setState={setState} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.header__bottom} ${state.isScrolledDown ? styles.stickyBottom : ""} ${state.isBurgerActive ? styles.active_burger : ""}`}>
                    <div className={styles.header__container}>
                        <div className={`${styles.header__body_bottom} ${state.isBurgerActive ? styles.active_burger : ""}`}>
                            <nav className={styles.header__menu}>
                                <ul className={styles.header__ul}>
                                    {Menu.map(([menuKey, subLinks]: MenuType) => (
                                        <li
                                            key={menuKey}
                                            data-key={menuKey}
                                            className={`${styles.header__li} ${state.activeLink === menuKey ? styles.active : ''}`}
                                        >
                                            <Link className={styles.header__a} to={menuKey.trim().replace(/\s+/g, '-')}>{menuKey}</Link>
                                            <div className={styles.header__subLinks}>
                                                {subLinks.map((subLink: string) => (
                                                    <Link className={styles.header__subLink} to={`${menuKey.trim().replace(/\s+/g, '-')}/${subLink}`} key={`${menuKey}-${subLink}`}>
                                                        {subLink}
                                                    </Link>
                                                ))}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className={styles.header__buy}>
                                <button onClick={() => {
                                    open("Wishlist", <WishlistPopup />, false);
                                }}
                                    className={styles.header__wish}
                                >
                                    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M23.1494 2.85655C22.5629 2.26797 21.8667 1.80107 21.1003 1.48251C20.334 1.16396 19.5126 1 18.6831 1C17.8535 1 17.0321 1.16396 16.2658 1.48251C15.4994 1.80107 14.8032 2.26797 14.2167 2.85655L12.9997 4.07749L11.7826 2.85655C10.5981 1.66822 8.99152 1.00062 7.31633 1.00062C5.64114 1.00062 4.03455 1.66822 2.85001 2.85655C1.66547 4.04489 1 5.65662 1 7.33718C1 9.01774 1.66547 10.6295 2.85001 11.8178L4.06705 13.0387L12.9997 22L21.9323 13.0387L23.1494 11.8178C23.7361 11.2295 24.2015 10.531 24.519 9.76219C24.8366 8.99339 25 8.16936 25 7.33718C25 6.50499 24.8366 5.68096 24.519 4.91216C24.2015 4.14336 23.7361 3.44486 23.1494 2.85655V2.85655Z"
                                            stroke="black"
                                            strokeWidth="1.48837"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {getWishlistTotal() > 0 && (
                                        <span>{getWishlistTotal()}</span>
                                    )}
                                </button>
                                <button onClick={() => {
                                    open("Cart", <CartPopUp />, false);
                                }}
                                    className={styles.header__cart}>
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 28C12.1046 28 13 27.1046 13 26C13 24.8954 12.1046 24 11 24C9.89543 24 9 24.8954 9 26C9 27.1046 9.89543 28 11 28Z"
                                            stroke="black"
                                            strokeWidth="1.48837"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M24 28C25.1046 28 26 27.1046 26 26C26 24.8954 25.1046 24 24 24C22.8954 24 22 24.8954 22 26C22 27.1046 22.8954 28 24 28Z"
                                            stroke="black"
                                            strokeWidth="1.48837"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M1 1H6.09091L9.50182 17.9603C9.6182 18.5434 9.93697 19.0672 10.4023 19.4401C10.8677 19.8129 11.45 20.0109 12.0473 19.9995H24.4182C25.0155 20.0109 25.5978 19.8129 26.0631 19.4401C26.5285 19.0672 26.8473 18.5434 26.9636 17.9603L29 7.33318H7.36364"
                                            stroke="black"
                                            strokeWidth="1.48837"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    {getCartTotal() > 0 && (
                                        <span>{getCartTotal()}</span>
                                    )}
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </header >
            <Auth loginActive={loginActive} setLoginActive={setLoginActive} />
        </>
    )
}