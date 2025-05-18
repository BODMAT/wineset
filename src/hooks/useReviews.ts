import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { ReviewConfig } from "../architecture/Pruduct";
import { addReview, deleteReview, fetchReviews } from "../api/review";

// reviewsRefArr example ["Wine", "items", "wineId"]
export const useReviews = (reviewsRefArr: string[]) => {
    return useQuery<ReviewConfig[]>({
        queryKey: ["reviews", reviewsRefArr],
        queryFn: () => fetchReviews(reviewsRefArr),
    });
};

export const useAddReview = (reviewsRefArr: string[]) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (review: Omit<ReviewConfig, "id" | "createdAt">) => addReview(reviewsRefArr, review),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews", reviewsRefArr] });
        },
    });
};

export const useDeleteReview = (reviewsRefArr: string[]) => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: (reviewId: string) => deleteReview(reviewsRefArr, reviewId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews", reviewsRefArr] });
        },
    });
};
