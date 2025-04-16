import { useForm } from "react-hook-form";
import { PopUp } from "../PopUp/PopUp";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/auth";
import { IUser, SignInProps } from "../../types/interfaces";

export function SignIn({ loginActive, setLoginActive, setRegisterActive, title }: SignInProps) {
    const [localFirebaseAlert, setLocalFirebaseAlert] = useState<string | null>(null);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IUser>();
    const { handleFirebaseAuth, user, logout, login: authLogin, firebaseAlert, setFirebaseAlert } = useAuthStore();

    useEffect(() => {
        if (localFirebaseAlert) {
            const timer = setTimeout(() => setLocalFirebaseAlert(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [localFirebaseAlert]);

    useEffect(() => {
        if (firebaseAlert) {
            const timer = setTimeout(() => setFirebaseAlert(null), 5000);
            return () => clearTimeout(timer);
        }
    }, [firebaseAlert]);

    const handleFirebaseLogin = async (data: IUser) => {
        await authLogin(data.email, data.password);
        reset();
    };

    const handleFirebaseGoogleLogin = async () => {
        try {
            await handleFirebaseAuth();
            reset();
            setLoginActive(false);
            setRegisterActive(false);
        } catch (error) {
            setLocalFirebaseAlert("Authorization failed. Please try again.");
        }
    };

    return (
        <PopUp title={title} active={loginActive} setActive={setLoginActive}>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFirebaseLogin)}>
                <input
                    placeholder='Email...'
                    type="email"
                    id='email'
                    className="border-2 border-[#898989] p-2 rounded-md"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address"
                        },
                    })}
                    autoComplete="email"
                />
                {errors.email && <p>{errors.email.message}</p>}
                <input
                    placeholder='Password...'
                    type="password"
                    id='password'
                    className="border-2 border-[#898989] p-2 rounded-md"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message: "Password must have at least 6 characters"
                        },
                    })}
                    autoComplete="current-password"
                />
                {errors.password && <p>{errors.password.message}</p>}
                {localFirebaseAlert && <p>{localFirebaseAlert}</p>}
                {firebaseAlert && <p>{firebaseAlert}</p>}
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-transparent border-2 border-[#7A0000] font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-[#7A0000] transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-[#7A0000] hover:text-white"
                    >
                        {isSubmitting ? "Loading..." : "Sign in"}
                    </button>

                    <button onClick={() => {
                        setLoginActive(false);
                        setRegisterActive(true);
                    }}
                        type="button"
                        className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]">
                        Register new account
                    </button>

                    <button
                        onClick={handleFirebaseGoogleLogin}
                        type="button"
                        className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]"
                    >
                        Sign in with Google
                    </button>

                    {user && <button
                        onClick={logout}
                        type="button"
                        className="bg-[#000] border-2 border-[#000] font-semibold max-w-[89%] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#000] flex-grow"
                    >
                        Log out
                    </button>}
                </div>
            </form>
        </PopUp>
    );
}
