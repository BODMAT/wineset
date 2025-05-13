import { useBonusStore } from "../../store/bonus";

export function BonusPopUp() {
    const { toggleUseBonuses, useBonuses, bonusesYouCanUse, bonusesAlreadyHas } = useBonusStore();
    return (
        <div className="text-center">
            <p className="mb-3 font-[Inter] text-left">The bonus system on the site charges bonuses depending on the order value and current promotions. The basic percentage of bonuses is 5%, but it increases to 10% on holidays defined in the system. In addition, for orders exceeding the amount of 1000$ (without other discounts), an additional bonus percentage of 5% is added. The total amount of bonuses is calculated based on the order value, and the maximum number of bonuses that can be used is limited to the available user bonuses and the order amount.</p>
            <p className="mb-3 font-bold font-[Inter] text-left text-[20px]">Bonuses in your account: {bonusesAlreadyHas}</p>
            <p className="mb-3 font-bold font-[Inter] text-left text-[20px]">Bonuses that you use in your Cart: {bonusesYouCanUse}</p>
            <button className="text-center text-xl bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[400px] px-[84px] py-[20px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]" onClick={() => { toggleUseBonuses() }}>{useBonuses ? "Bonuses are used" : "Bonuses aren't used"}</button>
        </div>
    )
}
