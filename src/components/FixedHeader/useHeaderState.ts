import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IHeaderState } from "../../types/interfaces";

/** Owns the header's scroll / burger / hovered-link state and the effects driving it. */
export function useHeaderState() {
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
            const handleMouseEnter = (event: MouseEvent) => {
                const target = event.target as HTMLElement;
                const link = target.closest('.header__li');
                if (link) {
                    setState((prev) => ({
                        ...prev,
                        activeLink: link.getAttribute('data-key') || null,
                    }));
                }
            };

            const handleMouseLeave = () => {
                setState((prev) => ({ ...prev, activeLink: null }));
            };

            const menu = document.querySelector('.header__ul');
            if (menu) {
                menu.addEventListener('mouseover', handleMouseEnter as EventListener);
                menu.addEventListener('mouseout', handleMouseLeave);
            }

            return () => {
                if (menu) {
                    menu.removeEventListener('mouseover', handleMouseEnter as EventListener);
                    menu.removeEventListener('mouseout', handleMouseLeave);
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

    return { state, setState };
}
