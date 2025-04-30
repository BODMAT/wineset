import { create } from "zustand";
import { PopupStateProps } from "../types/interfaces";

export const usePopupStore = create<PopupStateProps>((set) => ({
    active: false,
    title: "",
    children: null,
    withoutPadAndCross: false,
    open: (title, content, withoutPadAndCross = false, active = true) => {
        set({ title, children: content, withoutPadAndCross, active });
    },
    close: () => set({ active: false, title: "", children: null, withoutPadAndCross: false }),
}));
