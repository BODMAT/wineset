import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollRestoration() {
    const location = useLocation();

    useLayoutEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual"; // Disable default browser behavior
        }

        const savedScrollPosition = sessionStorage.getItem(location.pathname);

        if (savedScrollPosition) {
            window.scrollTo(0, Number(savedScrollPosition));
        } else {
            window.scrollTo(0, 0);
        }

        // Save position only before leaving current route
        const saveScrollPosition = () => {
            sessionStorage.setItem(location.pathname, window.scrollY.toString());
        };

        // Restore position after full page load (for reboots)
        const handlePageLoad = () => {
            const reloadedScrollPosition = sessionStorage.getItem(location.pathname);
            if (reloadedScrollPosition) {
                window.scrollTo(0, Number(reloadedScrollPosition));
            }
        };

        window.addEventListener("beforeunload", saveScrollPosition);
        window.addEventListener("load", handlePageLoad);

        return () => {
            saveScrollPosition();
            window.removeEventListener("beforeunload", saveScrollPosition);
            window.removeEventListener("load", handlePageLoad);
        };
    }, [location]);

    return null;
}
