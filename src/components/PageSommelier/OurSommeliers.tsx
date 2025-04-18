import { useOpacity } from "../../hooks/useOpacity";

export function OurSommeliers() {
    const { opacity, blockRef } = useOpacity();
    return (
        <section ref={blockRef} className="py-5 relative">
            <div className="myContainer relative z-2">
                <div className="flex justify-between gap-7 items-center max-lg:flex-col">
                    <h2 className="text-[#121212] not-italic font-[Cormorant] font-bold uppercase !text-[48px] !max-sm:text-[36px] max-sm:text-center">About our Sommeliers</h2>
                    <div className="flex gap-5 max-sm:flex-col">
                        <div className="flex-1 flex flex-col gap-5 max-w-[550px]">
                            <div className="relative max-w-[550px] h-[400px]">
                                <img className="w-full h-full object-cover" src="/SommelierPage/man1.png" alt="man" />
                            </div>
                            <p className="indent-4 font-normal text-[16px] leading-[1.4] text-[#121212]">With a commanding knowledge of terroirs and traditions, our male sommeliers guide guests through the world of wine with confidence and charm. Their expertise transforms each tasting into a journey—one rooted in history, craftsmanship, and an unrelenting dedication to excellence.</p>
                        </div>
                        <div className="flex-1 flex flex-col gap-5 max-w-[550px]">
                            <div className="relative max-w-[550px] h-[400px]">
                                <img className="w-full h-full object-cover" src="/SommelierPage/woman1.png" alt="woman" />
                            </div>
                            <p className="indent-4 font-normal text-[16px] leading-[1.4] text-[#121212]">Graceful, intuitive, and endlessly passionate, our female sommeliers bring a refined elegance to every glass they pour. With an exceptional palate and a deep connection to the artistry of winemaking, they curate experiences that go beyond taste—creating moments that linger like a perfectly aged vintage.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[902px] h-[509px] top-[5%] left-[-5%]">
                <img src="/WineSpots/wine-spot-2.png" alt="wine-spot-2" />
            </div>
        </section>
    )
}