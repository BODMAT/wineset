import { useEffect, useState } from "react";
import { PopUp } from "./PopUp";
import React from "react";

export function Info({ infoTitle, setDisabled, infoText }: { infoTitle: string; setDisabled: () => void; infoText: string | JSX.Element | Promise<string>; }) {
    const [active, setActive] = useState(true);
    const [resolvedText, setResolvedText] = useState<string | JSX.Element>("");

    useEffect(() => {
        if (typeof infoText === "string" || React.isValidElement(infoText)) {
            setResolvedText(infoText);
        } else if (infoText instanceof Promise) {
            infoText
                .then((resolved) => setResolvedText(resolved))
                .catch((err) => {
                    setResolvedText("Error loading text");
                    console.error(err);
                });
        }
    }, [infoText]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setActive(false);
            setDisabled();
        }, 1200);

        return () => clearTimeout(timeout);
    }, [setDisabled]);

    return (
        <PopUp
            withoutPadAndCross
            title={infoTitle}
            active={active}
            setActive={setActive}
        >
            <div className="flex p-4">{resolvedText}</div>
        </PopUp>
    );
}
