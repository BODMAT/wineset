import { FullAgedProps } from "../../types/interfaces";
import { PopUp } from "./PopUp";

export function FullAged({ setActive }: FullAgedProps) {
    return (
        <PopUp
            withoutPadAndCross
            title="Are you 18 or older?"
            active={true}
            setActive={() => {
                setTimeout(() => setActive(), 1000);
                return true;
            }}
        >

            <div className="bg-[url(/18+.png)] bg-right bg-contain bg-no-repeat">
                <p className="text-lg ml-6 pt-8 mb-8 pr-36 max-[375px]:pr-0">
                    The site contains information not recommended for individuals
                    under the age of majority. Information
                    are posted on the site exclusively
                    The information license is intended only for
                    personal use.
                </p>
                <button onClick={setActive} className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] ml-6 mb-8">I was 18</button>
            </div>
        </PopUp>
    )
}