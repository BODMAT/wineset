import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { ReviewConfig } from "../architecture/Pruduct";

// reviewsRefArr example ["Wine", "items", "wineId"]
export const addReview = async (reviewsRefArr: string[], review: Omit<ReviewConfig, "id" | "createdAt">) => {
    const reviewsRef = collection(db, "Products", ...reviewsRefArr, "fullReviews");
    await addDoc(reviewsRef, {
        ...review,
        createdAt: serverTimestamp(),
    });
};
export const fetchReviews = async (reviewsRefArr: string[]): Promise<ReviewConfig[]> => {
    const reviewsRef = collection(db, "Products", ...reviewsRefArr, "fullReviews");
    const q = query(reviewsRef, orderBy("createdAt", "desc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<ReviewConfig, "id">),
    })) as ReviewConfig[];
};

