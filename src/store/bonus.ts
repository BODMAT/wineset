import { create } from "zustand";
import { useCart } from "./cart";
import { isTodayHoliday } from "../utils/utils";
import { setBonus } from "../api/bonus";
import { useAuthStore } from "./auth";
import { IBonus } from "../types/interfaces";
import { getUserBonus } from "../api/bonus";

export const useBonusStore = create<IBonus>((set, get) => ({
    bonusesAlreadyHas: 0,
    bonusesYouWillReceive: 0,
    bonusesYouCanUse: 0,
    useBonuses: true,

    initializeBonus: async () => {
        const { user } = useAuthStore.getState();
        const { totalCartPriceWithoutDiscount } = useCart.getState();
        const { useBonuses } = get();

        let existingBonuses = 0;

        if (user?.uid) {
            existingBonuses = await getUserBonus(user.uid);
            set({ bonusesAlreadyHas: existingBonuses });
        }

        if (!useBonuses) {
            set({ bonusesYouWillReceive: 0, bonusesYouCanUse: 0 });
            return;
        }

        const basePercent = isTodayHoliday() ? 0.1 : 0.05;
        const extraPercent = totalCartPriceWithoutDiscount > 1000 ? 0.05 : 0;
        const totalPercent = basePercent + extraPercent;

        const safePrice = Math.max(0, totalCartPriceWithoutDiscount);
        const calculatedBonus = Math.round(safePrice * totalPercent);

        const maxCanUse = Math.min(existingBonuses, Math.floor(safePrice));

        set({
            bonusesYouWillReceive: calculatedBonus,
            bonusesYouCanUse: maxCanUse,
        });
    },


    setBonusesAlreadyHas: (value: number) => {
        const { totalCartPriceWithoutDiscount } = useCart.getState();
        const maxCanUse = Math.min(value, Math.floor(totalCartPriceWithoutDiscount));
        set({ bonusesAlreadyHas: value, bonusesYouCanUse: maxCanUse });
    },

    clearAllBonuses: () => {
        set({
            bonusesAlreadyHas: 0,
            bonusesYouWillReceive: 0,
            bonusesYouCanUse: 0,
        });
    },

    toggleUseBonuses: async () => {
        const newUseBonuses = !get().useBonuses;
        set({ useBonuses: newUseBonuses });

        if (newUseBonuses) {
            await get().initializeBonus(); // тепер дочекаємося ініціалізації
        } else {
            set({
                bonusesYouCanUse: 0,
            });
        }
    },

    updateBonusesInDBAfterPurchase: async () => {
        const { user } = useAuthStore.getState();
        const {
            bonusesYouCanUse,
            bonusesYouWillReceive,
            useBonuses,
        } = get();

        if (!user) {
            return;
        }

        const currentBonuses = await getUserBonus(user.uid);

        const toSubtract = useBonuses ? bonusesYouCanUse : 0;
        const toAdd = bonusesYouWillReceive;

        const updatedBonuses = Math.max(0, currentBonuses - toSubtract + toAdd);
        await setBonus(updatedBonuses, user);

        set({
            bonusesAlreadyHas: updatedBonuses,
            bonusesYouCanUse: useBonuses
                ? Math.min(updatedBonuses, Math.floor(useCart.getState().totalCartPriceWithoutDiscount))
                : 0,
            bonusesYouWillReceive: 0,
        });
    },



}));

