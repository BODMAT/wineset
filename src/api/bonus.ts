import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Функція для отримання бонусів користувача з БД
export const getUserBonus = async (userUid: string) => {
    const userDocRef = doc(db, 'bonus', userUid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
        return 0;
    }

    const userData = userDoc.data();
    return userData?.bonusesAlreadyHas || 0;
};

// Основна функція для встановлення бонусів
export const setBonus = async (bonusAmount: number, user: { uid: string }) => {
    if (!user || !user.uid) {
        throw new Error('User not authenticated');
    }
    if (bonusAmount < 0) {
        throw new Error('Bonus amount must be greater than or equal to 0');
    }

    const userDocRef = doc(db, 'bonus', user.uid);
    await setDoc(userDocRef, { bonusesAlreadyHas: bonusAmount }, { merge: true });

    return {
        message: 'Bonus set successfully',
        userId: user.uid,
        bonusAmount,
    };
};

