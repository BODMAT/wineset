import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useAuthStore } from "../../store/auth";
import { IUserWithConfirm, SignUpProps } from "../../types/interfaces";
import { motion } from "framer-motion";
import crossSVG from "../../assets/cross.svg";

export function SingUp({ registerActive, setLoginActive, setRegisterActive, title }: SignUpProps) {
    const [localFirebaseAlert, setLocalFirebaseAlert] = useState<string | null>(null);
    const { handleFirebaseAuth } = useAuthStore();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IUserWithConfirm>();

    const { user, logout, register: authRegister, firebaseAlert, setFirebaseAlert } = useAuthStore();

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

    useEffect(() => {
        if (registerActive) {
            document.body.classList.add("no-scroll-popup");
        } else {
            document.body.classList.remove("no-scroll-popup");
        }

        return () => {
            document.body.classList.remove("no-scroll-popup");
        };
    }, [registerActive]);

    const handleFirebaseRegister = async (data: IUserWithConfirm) => {
        authRegister(data.email, data.password);
        reset();
    };

    const handleFirebaseGoogleRegister = async () => {
        try {
            await handleFirebaseAuth();
            reset();
            setLoginActive(false);
            setRegisterActive(false);
        } catch (error) {
            setFirebaseAlert("Authorization failed. Please try again.");
        };
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-[#0000008e] bg-opacity-50 !z-[99999] flex justify-center items-center`}
        >
            <motion.div
                initial={{ opacity: 0, y: "-50px" }}
                animate={{ opacity: 1, y: "0px" }}
                exit={{ opacity: 0, y: "-50px" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-lg w-[90%] max-w-[700px] shadow-lg relative !z-[99999] max-md:mt-[5vh] overflow-hidden"
            >
                <div className="bg-[#121212] flex justify-between items-center p-4">
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <button onClick={() => setRegisterActive(!registerActive)} className="text-2xl font-bold">
                        <img src={crossSVG} alt="Close" />
                    </button>
                </div>
                <div className={"mt-4 p-4"}>
                    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFirebaseRegister)}>
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
                        <input
                            placeholder='Confirm Password...'
                            type="password"
                            className="border-2 border-[#898989] p-2 rounded-md"

                            {...register("confirmPassword", {
                                required: "Password confirmation is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must have at least 6 characters"
                                },
                                validate: value => value === (document.getElementById('password') as HTMLInputElement)?.value || `The passwords do not match`,
                            })}
                            autoComplete="current-password"
                        />
                        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

                        {localFirebaseAlert && <p>{localFirebaseAlert}</p>}
                        {firebaseAlert && <p>{firebaseAlert}</p>}

                        <div className="flex gap-4 justify-center flex-wrap">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-transparent border-2 border-[#7A0000] font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-[#7A0000] transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-[#7A0000] hover:text-white"
                            >
                                {isSubmitting ? "Loading..." : "Sing up"}
                            </button>

                            <button onClick={() => {
                                setRegisterActive(false);
                                setLoginActive(true);
                            }}
                                type="button"
                                className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]">
                                Log in account
                            </button>

                            <button
                                onClick={() => {
                                    handleFirebaseGoogleRegister();
                                }}
                                type="button"
                                className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]"
                            >
                                Sing in with Google
                            </button>

                            {user && <button
                                onClick={() => {
                                    logout();
                                }
                                }
                                type="button"
                                className="bg-[#000] border-2 border-[#000] font-semibold max-w-[89%] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#000] flex-grow"
                            >
                                Log out
                            </button>}
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.section>
    )
}