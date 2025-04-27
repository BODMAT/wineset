import { useRef } from "react";
import { IProduct } from "../../architecture/Pruduct";
import { useDeleteReview, useReviews } from "../../hooks/useReviews";
import { capitalizeFirstLetter, formatDate, getForcedImageUrl } from "../../utils/utils";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";

import arrLeftSvg from "../../assets/arr-left-red.svg";
import arrRightSvg from "../../assets/arr-right-red.svg";
import { useAuthStore } from "../../store/auth";
import { ReviewForm } from "./ReviewForm";
import { RatingStars } from "./RatingStars";
import { motion } from "framer-motion";
import { textFromTopAnimation } from "../../utils/animations";

export function Reviews({ product }: { product: IProduct }) {
    const productClass: string = capitalizeFirstLetter(product.kindOfProduct);
    const productId: string = product.id ? product.id : "anonymous";

    const { user } = useAuthStore();
    const { data: reviews = [], refetch } = useReviews([productClass, "items", productId]);
    const { mutateAsync: deleteReview } = useDeleteReview([productClass, "items", productId]);
    const swiperRef = useRef<any>(null);

    const handleDelete = async (reviewId: string) => {
        if (confirm("Are you sure you want to delete the review?")) { //!===========
            await deleteReview(reviewId);
            refetch();
        }
    };

    return (
        <motion.section
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            className="myContainer">
            <motion.h2 variants={textFromTopAnimation} className="font-[Cormorant] font-medium !text-[48px] text-[#121212] max-md:!text-[32px] mb-5">All reviews ({reviews.length})</motion.h2>
            <ReviewForm product={product} />
            {reviews.length > 0 && (<div className="flex gap-6 w-full items-center max-sm:flex-col-reverse">
                <Swiper
                    ref={swiperRef}
                    spaceBetween={20}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                        },
                        769: {
                            slidesPerView: 2,
                        },
                    }}
                    className="w-full mx-1 mb-15 max-md:mb-8"
                >
                    {reviews.map((review) => {
                        return (
                            <SwiperSlide key={review.id}>
                                <div key={review.id} className="p-4 border-2 rounded-xl border-[#121212] overflow-hidden">
                                    <div key={review.id} className="flex items-start justify-between gap-1 mb-1">
                                        <div key={review.id} className="flex items-center gap-4 mb-3">
                                            <img
                                                src={getForcedImageUrl(review.userPhotoURL)}
                                                alt={review.userName}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <div>
                                                <p className="font-[Inter] font-medium text-[18px] text-[#7a0000]">{review.userName}</p>
                                                <p className="text-sm text-gray-500">{formatDate(review.createdAt)}</p>
                                            </div>
                                        </div>

                                        {/* del */}
                                        {user?.uid === review.userId && (
                                            <button
                                                className="text-[#000] transitioned text-5xl cursor-pointer hover:scale-110 "
                                                onClick={() => handleDelete(review.id)}
                                            >×</button>
                                        )}
                                    </div>
                                    <RatingStars rating={review.rating} />

                                    <p className="text-[#121212] transitioned scrollable mt-3"
                                        style={{
                                            whiteSpace: 'pre-wrap',
                                        }}>{review.text}
                                    </p>
                                </div>
                            </SwiperSlide>
                        );
                    })}

                </Swiper>
                <div className="flex justify-evenly gap-3 border-0 w-[150px]">
                    <button
                        className={`w-[50px] cursor-pointer swiper-button-prev hover:scale-105 transitioned`}
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
                        <img src={arrLeftSvg} alt="prev" />
                    </button>
                    <button
                        className={`w-[50px] border-0 cursor-pointer swiper-button-next hover:scale-105 transitioned`}
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
                        <img src={arrRightSvg} alt="next" />
                    </button>
                </div>
            </div>)}


        </motion.section>
    )
}