import { FieldErrors, UseFormRegister } from "react-hook-form";
import { IPersonalData } from "../../types/interfaces";
import { FieldError } from "./FieldError";

export function RecipientFields({
    register,
    errors,
    firstName,
    lastName,
    email,
}: {
    register: UseFormRegister<IPersonalData>;
    errors: FieldErrors<IPersonalData>;
    firstName: string;
    lastName: string;
    email: string;
}) {
    return (
        <>
            <input
                placeholder='First name...'
                type="text"
                id='name'
                defaultValue={firstName}
                {...register("name", { required: "Name is required" })}
                autoComplete="given-name"
            />
            <FieldError message={errors.name?.message} />

            <input
                placeholder='Surname...'
                type="text"
                id='surname'
                defaultValue={lastName}
                {...register("surname", { required: "Surname is required" })}
                autoComplete="family-name"
            />
            <FieldError message={errors.surname?.message} />

            <input
                placeholder='Phone number...'
                type="text"
                id='tel'
                {...register("tel", {
                    required: "Phone number is required",
                    pattern: {
                        value: /^\+?3?8?(0\d{9})$/,
                        message: "Invalid phone number"
                    },
                })}
                autoComplete="tel"
            />
            <FieldError message={errors.tel?.message} />

            <input
                placeholder='Email...'
                type="email"
                id='email'
                defaultValue={email}
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address"
                    },
                })}
                autoComplete="email"
            />
            <FieldError message={errors.email?.message} />
        </>
    );
}
