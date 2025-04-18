export function CustomVideoFrame() {
    return (
        <section className="myContainer pb-18 max-sm:pb-12">
            <div className="flex gap-10 justify-between items-center max-[920px]:flex-col">
                <div className="flex flex-col gap-4">
                    <h2 className="text-[#121212] not-italic font-[Cormorant] font-bold uppercase !text-[48px] max-[400px]:!text-[36px] max-sm:text-center pl-4">The Art of Wine Presentation</h2>
                    <p className="indent-4 font-normal !text-[20px] leading-[1.4] text-[#121212] text-justify max-[400px]:!text-[16px]">The presentation of wine is an art that elevates the entire tasting experience. From selecting the proper glassware to ensuring the wine is served at the ideal temperature, every detail matters. A graceful pour, the gentle swirl, and the aroma that rises from the glass—all come together to create a moment of elegance and anticipation, setting the stage for the wine to reveal its full character.</p>
                </div>

                <div className="relative w-full min-w-[50%] aspect-video">
                    <iframe src="https://www.youtube.com/embed/iv56O-NGBGg?si=kbbz6CzQpBz5WMqT" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="absolute w-full h-full object-cover"></iframe>
                </div>
            </div>
        </section>
    )
}