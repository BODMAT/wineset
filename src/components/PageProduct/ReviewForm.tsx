import { useState } from "react";
import { useAuthStore } from "../../store/auth";
import { RatingStars } from "./RatingStars";
import { Controller, useForm } from "react-hook-form";
import { useAddReview } from "../../hooks/useReviews";
import { IProduct } from "../../architecture/Pruduct";
import { capitalizeFirstLetter } from "../../utils/utils";
import { usePopupStore } from "../../store/popup";

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

    const { open } = usePopupStore();

    const onSubmit = async () => {
        if (!user) {
            open("Notification", <p className="mb-5">Only an authorized user can write a review</p>, false);
            return;
        }

        if (!reviewData.text.trim()) {
            open("Notification", <p className="mb-5">Feedback cannot be empty!</p>, false);
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
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5 bg-[rgba(164,164,164,0.15)] p-4">
            <div className="flex justify-between items-center gap-6 max-[400px]:flex-col max-[400px]:gap-2">
                <div className="w-full">
                    <div className="flex gap-6 items-center mb-4 max-md:flex-col max-md:items-start max-md:gap-2">
                        <h6 className="font-[Inter] font-medium !text-[18px] text-[#000000d3] max-md:!text-[16px]">
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
                                    className="resize-none rounded w-full max-sm:h-[100px] max-h-[70px] scrollable text-[#000] placeholder:text-[#000000a2] !text-[18px] p-2 border-2 border-[#00000084]"
                                    onChange={(e) => {
                                        setReviewData((prev) => ({ ...prev, text: e.target.value }));
                                        field.onChange(e);
                                    }}
                                />
                            )}
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] max-h-[50px]"
                >
                    Send
                </button>
            </div>
        </form>
    );
}
