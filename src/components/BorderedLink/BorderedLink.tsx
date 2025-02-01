import { Link } from "react-router-dom";

interface IBorderedLinkProps {
    to: string;
    children: React.ReactNode | string;
}

export function BorderedLink({ to, children }: IBorderedLinkProps) {
    return (
        <Link to={to} className="transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] 
               text-[#7a0000] font-inter font-semibold text-center uppercase 
               border border-[#7a0000] rounded-[50%] px-16 py-9 
               text-[16px] md:text-[14px] leading-normal 
               hover:text-white hover:bg-[#7a0000]">
            {children}
        </Link>
    )
}