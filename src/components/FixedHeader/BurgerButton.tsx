const baseCls = "[transform:translate(calc(100vw-259px),0)] bg-transparent z-[1000] block absolute bottom-2 right-0 w-[30px] h-[18px] cursor-pointer before:content-[''] before:left-0 before:absolute before:bg-white before:h-[10%] before:w-full before:transition-all before:duration-300 before:ease-[cubic-bezier(0.075,0.82,0.165,1)] after:content-[''] after:left-0 after:absolute after:bg-white after:h-[10%] after:w-full after:transition-all after:duration-300 after:ease-[cubic-bezier(0.075,0.82,0.165,1)] [&_span]:top-1/2 [&_span]:left-0 [&_span]:absolute [&_span]:bg-white [&_span]:h-[10%] [&_span]:w-full [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-[cubic-bezier(0.075,0.82,0.165,1)]";

const activeCls = "before:top-1/2 before:[transform:rotate(-45deg)_translate(0,-50%)] after:bottom-1/2 after:[transform:rotate(45deg)_translate(0,50%)] [&_span]:[transform:scale(0)_translate(0,-50%)]";

const idleCls = "before:top-0 after:bottom-0 [&_span]:[transform:scale(1)_translate(0,-50%)]";

/** Three-bar burger icon that morphs into a cross when open. */
export function BurgerButton({ isActive, onClick }: { isActive: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            aria-label={isActive ? "Close menu" : "Open menu"}
            aria-expanded={isActive}
            className={`${baseCls} ${isActive ? activeCls : idleCls}`}
        >
            <span></span>
        </button>
    );
}
