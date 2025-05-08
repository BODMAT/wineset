import { useEffect, useState } from "react";
import { SignIn } from "./SingIn";
import { SingUp } from "./SingUp";
import { useAuthStore } from "../../store/auth";
import { AuthProps } from "../../types/interfaces";
import { onAuthStateChanged, User } from "firebase/auth";
import { useWishlist } from "../../store/wishlist";
import { auth } from "../../firebaseConfig";

export function Auth({ loginActive, setLoginActive }: AuthProps) {
    const [registerActive, setRegisterActive] = useState(false);
    const { user } = useAuthStore();

    const singInTitle = user ? "Sign in another account" : "Sign in your account";
    const singUpTitle = user ? "Sign up another account" : "Sign up new account";

    const { loadWishlistByUserFromDB, saveWishlistByUserToDB, wishlistIds } = useWishlist();
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    // Загрузка wishlist при входе
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                loadWishlistByUserFromDB(user);
            }
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    // Сохранение wishlist при скрытии вкладки
    useEffect(() => {
        if (!currentUser) return;

        const handleVisibilityChange = () => {
            if (document.visibilityState === "hidden") {
                saveWishlistByUserToDB(currentUser);
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);
        return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
    }, [currentUser, wishlistIds]);

    return (
        <div>
            {loginActive && (
                <SignIn
                    title={singInTitle}
                    loginActive={loginActive}
                    setLoginActive={setLoginActive}
                    setRegisterActive={setRegisterActive}
                />
            )}
            {registerActive && (
                <SingUp
                    title={singUpTitle}
                    registerActive={registerActive}
                    setLoginActive={setLoginActive}
                    setRegisterActive={setRegisterActive}
                />
            )}
        </div>
    );
}
