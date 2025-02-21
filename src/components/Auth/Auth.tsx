import { useState } from "react";
import { SignIn } from "./SingIn";
import { SingUp } from "./SingUp";
import { useAuth } from "./AuthProvider";

export function Auth() {
    const [loginActive, setLoginActive] = useState(false);
    const [registerActive, setRegisterActive] = useState(false);
    const { user, logout } = useAuth();

    const singInTitle = user ? "Sign in another account" : "Sign in";
    const singUpTitle = user ? "Sign up another account" : "Sign up";
    return (
        <div>
            <button onClick={() => setLoginActive(true)} className="text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent">
                {user ? user.displayName : "Sing in"}
            </button>

            {loginActive && <SignIn title={singInTitle} loginActive={loginActive} setLoginActive={setLoginActive} setRegisterActive={setRegisterActive} />}

            {registerActive && <SingUp title={singUpTitle} registerActive={registerActive} setLoginActive={setLoginActive} setRegisterActive={setRegisterActive} />}
        </div>
    )
}