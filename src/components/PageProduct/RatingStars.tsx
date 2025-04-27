import StarSVG from "../../assets/Product/star.svg";
import EmptyStarSVG from "../../assets/Product/EmptyStar.svg";

export function RatingStars({ rating }: { rating: number }) {
    return (
        <div className="w-[155px] flex gap-3 justify-between items-center" style={{ userSelect: "none" }}>
            <span style={{ userSelect: "none" }}>{rating.toFixed(1)}</span>
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => {
                    const ratingFraction = rating - Math.floor(rating);

                    if (index < Math.floor(rating)) {
                        // full star
                        return <img style={{ userSelect: "none", pointerEvents: "none" }} key={index} className="w-5" src={StarSVG} alt="star" />;
                    } else if (index < Math.floor(rating) + ratingFraction) {
                        // half star
                        return (
                            <div key={index} className="relative w-5">
                                <img style={{ userSelect: "none", pointerEvents: "none" }} className="absolute inset-0 w-full" src={EmptyStarSVG} alt="half star" />
                                <img
                                    className="absolute inset-0 w-full"
                                    src={StarSVG}
                                    alt="empty star"
                                    style={{
                                        clipPath: `inset(0 ${100 - ratingFraction * 100}% 0 0)`,
                                        userSelect: "none",
                                        pointerEvents: "none"
                                    }}
                                />
                            </div>
                        );
                    } else {
                        // empty star
                        return <img style={{ userSelect: "none", pointerEvents: "none" }} key={index} className="w-5" src={EmptyStarSVG} alt="empty star" />;
                    }
                })}
            </div>
        </div >
    )
}