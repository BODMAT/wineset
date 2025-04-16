import { useState } from "react";
import { SignIn } from "./SingIn";
import { SingUp } from "./SingUp";
import { useAuthStore } from "../../store/auth";
import { AuthProps } from "../../types/interfaces";

export function Auth({ loginActive, setLoginActive }: AuthProps) {
    const [registerActive, setRegisterActive] = useState(false);
    const { user } = useAuthStore();

    const singInTitle = user ? "Sign in another account" : "Sign in your account";
    const singUpTitle = user ? "Sign up another account" : "Sign up new account";
    return (
        <div>
            {loginActive && <SignIn title={singInTitle} loginActive={loginActive} setLoginActive={setLoginActive} setRegisterActive={setRegisterActive} />}
            {registerActive && <SingUp title={singUpTitle} registerActive={registerActive} setLoginActive={setLoginActive} setRegisterActive={setRegisterActive} />}
        </div>
    )
}