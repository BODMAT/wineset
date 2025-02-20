import { useState } from "react";
import { SignIn } from "./SingIn";
import { SingUp } from "./SingUp";

export function Auth() {
    const [loginActive, setLoginActive] = useState(false);
    const [registerActive, setRegisterActive] = useState(false);

    return (
        <div>
            <button onClick={() => setLoginActive(true)} className="text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[220px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent">Sing in</button>

            {loginActive && <SignIn loginActive={loginActive} setLoginActive={setLoginActive} setRegisterActive={setRegisterActive} />}

            {registerActive && <SingUp registerActive={registerActive} setLoginActive={setLoginActive} setRegisterActive={setRegisterActive} />}
        </div>
    )
}