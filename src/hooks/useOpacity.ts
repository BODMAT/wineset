import { useEffect, useRef, useState } from "react";

export function useOpacity() {
    //little practice w hooks (opacity for absolute)
    const [opacity, setOpacity] = useState(0);
    const blockRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!blockRef.current) return;

            const { top, height } = blockRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (top + height < 0 || top > windowHeight) {
                setOpacity(0);
            } else {
                const centerOffset = Math.abs(windowHeight / 2 - (top + height / 2));
                const fadeZone = height / 2;

                const newOpacity = 1 - Math.min(centerOffset / fadeZone, 1);
                setOpacity(newOpacity);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return { opacity, blockRef };
}