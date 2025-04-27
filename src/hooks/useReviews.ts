import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { doc, deleteDoc } from 'firebase/firestore';
import { ReviewConfig } from "../architecture/Pruduct";
import { db } from "../firebaseConfig";
import { addReview, fetchReviews } from "../api/review";


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

    const deleteReview = async (reviewId: string): Promise<void> => {
        const reviewDocRef = doc(db, "Products", ...reviewsRefArr, "fullReviews", reviewId);
        await deleteDoc(reviewDocRef);
    };

    return useMutation<void, Error, string>({
        mutationFn: deleteReview,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["reviews", reviewsRefArr] });
        },
    });
};
