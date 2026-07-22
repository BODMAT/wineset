import { UseFormRegister } from "react-hook-form";
import { IPersonalData } from "../../types/interfaces";

export function RadioField({
    name,
    options,
    register,
    requiredMessage,
}: {
    name: "delivery" | "payment";
    options: { value: string; label: string }[];
    register: UseFormRegister<IPersonalData>;
    requiredMessage: string;
}) {
    return (
        <>
            {options.map(({ value, label }) => (
                <label key={value} htmlFor={value} className="flex gap-2">
                    <input
                        type="radio"
                        id={value}
                        value={value}
                        {...register(name, { required: requiredMessage })}
                        autoComplete="off"
                    />
                    {label}
                </label>
            ))}
        </>
    );
}
