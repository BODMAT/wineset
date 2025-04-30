export function ConfirmPopUp({
    onConfirm,
    onCancel,
    text = "Are you sure?",
}: {
    onConfirm: () => void;
    onCancel: () => void;
    text?: string | React.ReactNode;
}) {
    return (
        <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-center">{text}</p>
            <div className="flex gap-4">
                <button
                    onClick={onConfirm}
                    className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] max-h-[50px]"
                >
                    Yes
                </button>
                <button
                    onClick={onCancel}
                    className="px-[50px] py-[15px] text-center bg-[#7A0000] border-2 border-[#7A0000] font-semibold rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] max-h-[50px]"
                >
                    No
                </button>
            </div>
        </div>
    );
}
