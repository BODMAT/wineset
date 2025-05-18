import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";
import {
    signOut,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    signInWithPopup,
} from "firebase/auth";
import { IAuthState } from "../types/interfaces";
import { auth, googleProvider } from "../firebaseConfig";
import { useWishlist } from "./wishlist";

export const useAuthStore = create<IAuthState>()(
    devtools(
        persist(
            (set) => ({
                user: auth.currentUser,
                firebaseAlert: null,
                loading: false,
                setFirebaseAlert: (message) => set({ firebaseAlert: message }),

                logout: async () => {
                    const user = auth.currentUser;
                    set({ loading: true });

                    try {
                        if (user) {
                            const { saveWishlistByUserToDB } = useWishlist.getState();
                            await saveWishlistByUserToDB(user);
                        }

                        await signOut(auth);
                        set({ user: null, firebaseAlert: "User logged out", loading: false });

                        const { clearWishlist } = useWishlist.getState();
                        await clearWishlist();
                    } catch (error: any) {
                        set({ firebaseAlert: `Logout failed: ${error.message}`, loading: false });
                    }
                },

                register: async (email, password) => {
                    const { logout } = useAuthStore.getState();
                    await logout();
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
                    const { logout } = useAuthStore.getState();
                    await logout();
                    set({ loading: true });
                    try {
                        const result = await signInWithPopup(auth, googleProvider);
                        const user = result.user;
                        set({
                            user: user,
                            firebaseAlert: `Google sign-in successful. Welcome, ${user.displayName || user.email}!`,
                            loading: false,
                        });
                    } catch (error: any) {
                        set({
                            firebaseAlert: `Authorization failed: ${error.message}`,
                            loading: false,
                        });
                    }
                },

                login: async (email, password) => {
                    const { logout } = useAuthStore.getState();
                    await logout();
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
