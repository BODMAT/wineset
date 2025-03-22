import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    signInWithPopup,
    GoogleAuthProvider,
    EmailAuthProvider,
    linkWithCredential,
    setPersistence,
    browserLocalPersistence
} from "firebase/auth";

interface AuthState {
    user: User | null;
    firebaseAlert: string | null;
    loading: boolean;
    setFirebaseAlert: (message: string | null) => void;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    handleFirebaseAuth: () => Promise<void>;
}

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            (set) => ({
                user: auth.currentUser,
                firebaseAlert: null,
                loading: false,
                setFirebaseAlert: (message) => set({ firebaseAlert: message }),

                logout: async () => {
                    set({ loading: true });
                    try {
                        await signOut(auth);
                        set({ user: null, firebaseAlert: "User logged out", loading: false });
                    } catch (error: any) {
                        set({ firebaseAlert: `Logout failed: ${error.message}`, loading: false });
                    }
                },

                register: async (email, password) => {
                    set({ loading: true });
                    try {
                        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                        set({ user: userCredential.user, firebaseAlert: `User registered: ${userCredential.user.email}`, loading: false });
                    } catch (error: any) {
                        if (error.code === "auth/email-already-in-use") {
                            set({ firebaseAlert: "Email already in use. Attempting Google sign-in...", loading: false });
                            const signInMethods = await fetchSignInMethodsForEmail(auth, email);
                            if (signInMethods.includes("google.com")) {
                                await signInWithPopup(auth, googleProvider);
                            }
                        } else {
                            set({ firebaseAlert: `Registration failed: ${error.message}`, loading: false });
                        }
                    }
                },

                handleFirebaseAuth: async () => {
                    set({ loading: true });
                    try {
                        const result = await signInWithPopup(auth, googleProvider);
                        // Получаем пользователя из результата входа
                        const user = result.user;
                        // Обновляем состояние с данными пользователя и успешным сообщением
                        set({
                            user: user,
                            firebaseAlert: `Google sign-in successful. Welcome, ${user.displayName || user.email}!`,
                            loading: false,
                        });
                    } catch (error: any) {
                        // Обрабатываем ошибку
                        set({
                            firebaseAlert: `Authorization failed: ${error.message}`,
                            loading: false,
                        });
                    }
                },

                login: async (email, password) => {
                    set({ loading: true });
                    try {
                        const userCredential = await signInWithEmailAndPassword(auth, email, password);
                        set({ user: userCredential.user, firebaseAlert: `User signed in: ${userCredential.user.email}`, loading: false });
                    } catch (error: any) {
                        const errorMessages: Record<string, string> = {
                            "auth/user-not-found": "Error: The specified email does not exist.",
                            "auth/wrong-password": "Error: Incorrect password entered.",
                            "auth/invalid-credential": "Error: The specified email does not exist or the password is incorrect."
                        };
                        set({ firebaseAlert: errorMessages[error.code] || `Login error: ${error.message}`, loading: false });
                    }
                }
            }),
            {
                name: "auth-storage",
            }
        )
    )
);
