import { useEffect } from "react";
import { motion } from "framer-motion";
import crossSVG from "../../assets/cross.svg";

export interface IPopupProps {
    title: string;
    children: React.ReactNode;
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
    withoutPadAndCross?: boolean;
}

export function PopUp({ title, children, active, setActive, withoutPadAndCross }: IPopupProps) {
    useEffect(() => {
        if (active) {
            document.body.classList.add("no-scroll-popup");
        } else {
            document.body.classList.remove("no-scroll-popup");
        }

        return () => {
            document.body.classList.remove("no-scroll-popup");
        };
    }, [active]);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-[#0000008e] bg-opacity-50 !z-[99999] flex justify-center items-center`}
        >
            <motion.div
                initial={{ opacity: 0, y: "-50px" }}
                animate={{ opacity: 1, y: "0px" }}
                exit={{ opacity: 0, y: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-lg w-[90%] max-w-[700px] shadow-lg relative !z-[99999] max-md:mt-[5vh] overflow-hidden"
            >
                <div className="bg-[#121212] flex justify-between items-center p-4">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    {!withoutPadAndCross && (
                        <button onClick={() => setActive(!active)} className="text-2xl font-bold">
                            <img src={crossSVG} alt="Close" />
                        </button>
                    )}
                </div>
                <div className={withoutPadAndCross ? "" : "mt-4 p-4"}>{children}</div>
            </motion.div>
        </motion.section>
    );
}
