import { create } from "zustand"
import { persist, devtools } from "zustand/middleware";
import { IAgeState } from "../types/interfaces";

export const useAgeStore = create<IAgeState>()(
    devtools(
        persist(
            (set) => ({
                isFullAgedActive: true,
                setIsFullAgedActive: (value) => set({ isFullAgedActive: value }),
            }),
            { name: "isFullAged" }
        )
    )
);