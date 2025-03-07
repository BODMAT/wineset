import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
    getAuth,
    onAuthStateChanged,
    getRedirectResult,
    signOut,
    User,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    fetchSignInMethodsForEmail,
    signInWithPopup,
    EmailAuthProvider,
    linkWithCredential
} from "firebase/auth";
import { googleProvider } from "../../data/DataBase/Firebase/firebaseAPI";

interface AuthContextType {
    user: User | null;
    logout: () => Promise<void>;
    register: (email: string, password: string) => Promise<void>;
    login: (email: string, password: string) => Promise<void>;
    firebaseAlert: string | null;
    setFirebaseAlert: (message: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, setUser);

        // Check for redirects after logging in via Google
        getRedirectResult(auth)
            .then((result) => {
                if (result?.user) {
                    setUser(result.user);
                }
            })
            .catch(() => { });

        return () => unsubscribe();
    }, [auth]);

    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setFirebaseAlert("User logged out");
    };

    const register = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            setFirebaseAlert(`User registered: ${userCredential.user.email}`);
        } catch (error: any) {
            if (error.code === "auth/email-already-in-use") {
                setFirebaseAlert("Email already in use. Trying to link password to Google account.");
                const signInMethods = await fetchSignInMethodsForEmail(auth, email);
                if (signInMethods.length === 0) {
                    try {
                        const googleCredential = await signInWithPopup(auth, googleProvider);
                        const user = googleCredential.user;
                        const emailCredential = EmailAuthProvider.credential(email, password);
                        await linkWithCredential(user, emailCredential);
                        setUser(user);
                        setFirebaseAlert("Password linked successfully! You can now log in with email and password.");
                    } catch (googleSignInError) {
                        setFirebaseAlert("Could not sign in via Google. Make sure you have an account with this email.");
                    }
                } else if (signInMethods.includes("google.com")) {
                    try {
                        const googleCredential = await signInWithPopup(auth, googleProvider);
                        const user = googleCredential.user;

                        if (!signInMethods.includes("password")) {
                            const emailCredential = EmailAuthProvider.credential(email, password);
                            await linkWithCredential(user, emailCredential);
                            setUser(user);
                            setFirebaseAlert("Password linked successfully! You can now log in with email and password.");
                        } else {
                            setFirebaseAlert("You can already log in using email and password.");
                        }
                    } catch (linkError) {
                        setFirebaseAlert(`Failed to link password: ${(linkError as Error).message}`);
                    }
                } else {
                    try {
                        const loginCredential = await signInWithEmailAndPassword(auth, email, password);
                        setUser(loginCredential.user);
                        setFirebaseAlert(`User signed in: ${loginCredential.user.email}`);
                    } catch (loginError) {
                        setFirebaseAlert(`Login failed: ${(loginError as Error).message}`);
                    }
                }
            }
        }
    };


    const login = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            setFirebaseAlert(`User signed in: ${userCredential.user.email}`);
        } catch (error: any) {
            const errorMessages: Record<string, string> = {
                "auth/user-not-found": "Error: The specified email does not exist.",
                "auth/wrong-password": "Error: Incorrect password entered.",
                "auth/invalid-credential": "Error: The specified email does not exist or the password is incorrect."
            };

            setFirebaseAlert(errorMessages[error.code] || `Login error: ${error.message}`);
        }
    };

    const [firebaseAlert, setFirebaseAlert] = useState<string | null>(null);
    return <AuthContext.Provider value={{ user, logout, register, login, firebaseAlert, setFirebaseAlert }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
