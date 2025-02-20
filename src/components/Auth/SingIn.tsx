import { useForm } from "react-hook-form";
import { PopUp } from "../PopUp/PopUp";
interface IData {
    email: string;
    password: string;
}

interface IProps {
    loginActive: boolean;
    setLoginActive: React.Dispatch<React.SetStateAction<boolean>>;
    setRegisterActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export function SignIn({ loginActive, setLoginActive, setRegisterActive }: IProps) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IData>();

    const handleFirebaseLogin = async (data: IData) => {
        console.log(data);
        reset();
    };

    const handleFirebaseGoogleLogin = async () => {
        console.log("Google");
    };
    return (
        <PopUp title="Sing in" active={loginActive} setActive={setLoginActive}>
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
                <div className="flex gap-4 justify-center flex-wrap">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]"
                    >
                        {isSubmitting ? "Loading..." : "Sing in"}
                    </button>

                    <button onClick={() => {
                        setLoginActive(false);
                        setRegisterActive(true);
                    }}
                        type="button"
                        className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]">
                        Register
                    </button>

                    <button
                        onClick={() => {
                            handleFirebaseGoogleLogin();
                        }}
                        type="button"
                        className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000]"
                    >
                        Sing in with Google
                    </button>
                </div>
            </form>
        </PopUp>
    )
}