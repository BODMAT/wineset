import { useState } from "react";
import { useAuthStore } from "../../store/auth";
import { RatingStars } from "./RatingStars";
import { Controller, useForm } from "react-hook-form";
import { useAddReview } from "../../hooks/useReviews";
import { IProduct } from "../../architecture/Pruduct";
import { capitalizeFirstLetter } from "../../utils/utils";
import { PopUp } from "../PopUp/PopUp";

export function ReviewForm({ product }: { product: IProduct }) {
    const productClass: string = capitalizeFirstLetter(product.kindOfProduct);
    const productId: string = product.id ? product.id : "anonymous";
    const { mutateAsync: addReview } = useAddReview([productClass, "items", productId]);

    const [reviewData, setReviewData] = useState({
        text: "",
        rating: 4.5,
    });
    const { user } = useAuthStore();
    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            rating: reviewData.rating,
            text: reviewData.text,
        },
    });

    const [popUpActive, setPopUpActive] = useState(false);
    const [popUpMessage, setPopUpMessage] = useState("");

    const onSubmit = async () => {
        if (!user) {
            setPopUpMessage("Only an authorized user can write a review");
            setPopUpActive(true);
            return;
        }

        if (!reviewData.text.trim()) {
            setPopUpMessage("Feedback cannot be empty!");
            setPopUpActive(true);
            return;
        }

        const formattedText = reviewData.text.replace(/\n/g, '\n');
        await addReview({
            text: formattedText,
            userId: user.uid,
            userName: user.displayName || "Anonymous",
            userPhotoURL: user.photoURL || "",
            rating: reviewData.rating,
        });

        setReviewData({ text: "", rating: 4.5 });
        reset({
            text: "",
            rating: 4.5,
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
            <div className="flex gap-6 items-center mb-4">
                <h6 className="font-[Cormorant] font-medium !text-[22px] text-[#121212] max-md:!text-[20px]">
                    Rate this {product.kindOfProduct} to make customers choose the best:
                </h6>
                <div className="relative">
                    <input
                        type="range"
                        min={0}
                        max={5}
                        value={reviewData.rating}
                        step={0.1}
                        className="range-slider rounded text-center bg-[rgba(164,164,164,0.15)] text-[#000] placeholder:text-[#000000a2] !text-[18px] opacity-0 cursor-pointer !h-12 absolute z-2 bottom-[-65%] left-9 w-[125px]"
                        onChange={(e) =>
                            setReviewData((prev) => ({ ...prev, rating: Number(e.target.value) }))
                        }
                    />
                    <RatingStars rating={reviewData.rating} />
                </div>
            </div>

            <div className="flex items-center gap-4 max-sm:gap-2 mb-2">
                <Controller
                    name="text"
                    control={control}
                    render={({ field }) => (
                        <textarea
                            {...field}
                            placeholder="Write your review..."
                            className="bg-[rgba(164,164,164,0.15)] resize-none rounded w-full p-4 max-sm:h-[100px] max-h-[70px] scrollable text-[#000] placeholder:text-[#000000a2] !text-[18px]"
                            onChange={(e) => {
                                setReviewData((prev) => ({ ...prev, text: e.target.value }));
                                field.onChange(e);
                            }}
                        />
                    )}
                />
                <button
                    type="submit"
                    className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]"
                >
                    Send
                </button>
            </div>

            {popUpActive && (
                <PopUp
                    title="Notification"
                    active={popUpActive}
                    setActive={setPopUpActive}
                >
                    <p>{popUpMessage}</p>
                </PopUp>
            )}
        </form>
    );
}
