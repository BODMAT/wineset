import { create } from "zustand"
import { persist, devtools } from "zustand/middleware";

interface AgeAtate {
    isFullAgedActive: boolean;
    setIsFullAgedActive: (value: boolean) => void;
};

export const useAgeStore = create<AgeAtate>()(
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