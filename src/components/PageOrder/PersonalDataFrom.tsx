import { useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import styles from './PageOrder.module.scss';
import { Controller, useForm } from 'react-hook-form';

type Delivery = 'courier' | 'nova-poshta' | 'ukrposhta' | 'self-pickup';
type Bank = "Privat24" | "Monobank" | "Abank" | "Sense Bank";
interface IPersonalData {
    name: string;
    surname: string;
    tel: string;
    email: string;

    delivery: Delivery;
    address: string;

    payment: Bank;
    cardNumber: string;
    comment?: string;
}

export function PersonalDataForm() {
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IPersonalData>();

    const formatCardNumber = (value: string) => {
        return value
            .replace(/\D/g, "")
            .slice(0, 16)
            .replace(/(\d{4})/g, "$1 ")
            .trim();
    };

    useEffect(() => {
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;
        if (userId) {
            emailjs.init(userId);
        } else {
            console.error("EmailJS user ID is not defined in the environment variables.");
        }
    }, []);

    const formRef = useRef<HTMLFormElement>(null);

    const sendMail = async (data: IPersonalData) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ORDER_ID;

        try {
            await emailjs.send(serviceId, templateId, { ...data });
            alert("Your order has been successfully sent. We will contact you soon.");
            reset();
        } catch (error) {
            alert("Your order has been rejected, check error in console.");
            console.log(error);
        }
    };

    return (
        <section className='pt-6 pb-8'>
            <div className={styles.container}>
                <h2 className={styles.title}>Personally Identifiable Information</h2>
                <div className="flex justify-between items-center gap-30 mt-5">
                    <form ref={formRef} id="oeder" className='flex-[0_1_50%] flex flex-col gap-10' onSubmit={handleSubmit(sendMail)}>
                        <div className={styles.formBlock}>
                            <label htmlFor="name" className={styles.label}>Recipient</label>

                            <input
                                placeholder='First name...'
                                type="text"
                                id='name'
                                {...register("name", { required: "Name is required" })}
                                autoComplete="given-name"
                            />
                            {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

                            <input
                                placeholder='Surname...'
                                type="text"
                                id='surname'
                                {...register("surname", { required: "Surname is required" })}
                                autoComplete="family-name"
                            />
                            {errors.surname && <p className="text-red-400 text-sm">{errors.surname.message}</p>}

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
                            {errors.tel && <p className="text-red-400 text-sm">{errors.tel.message}</p>}

                            <input
                                placeholder='Email...'
                                type="email"
                                id='email'
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    },
                                })}
                                autoComplete="email"
                            />
                        </div>
                        <div className={styles.formBlock}>
                            <label htmlFor="address" className={styles.label}>Delivery</label>
                            <label htmlFor="courier" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="courier"
                                    value="courier"
                                    {...register("delivery", { required: "Delivery is required" })}
                                    autoComplete="off"
                                />
                                Courier
                            </label>
                            <label htmlFor="nova-poshta" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="nova-poshta"
                                    value="nova-poshta"
                                    {...register("delivery", { required: "Delivery is required" })}
                                    autoComplete="off"
                                />
                                Nova Poshta
                            </label>
                            <label htmlFor="ukrposhta" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="ukrposhta"
                                    value="ukrposhta"
                                    {...register("delivery", { required: "Delivery is required" })}
                                    autoComplete="off"
                                />
                                Ukrposhta
                            </label>
                            <label htmlFor="self-pickup" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="self-pickup"
                                    value="self-pickup"
                                    {...register("delivery", { required: "Delivery is required" })}
                                    autoComplete="off"
                                />
                                Self-pickup
                            </label>
                            {errors.delivery && <p className="text-red-400 text-sm">{errors.delivery.message}</p>}

                            <input
                                placeholder='Address..'
                                type="text"
                                id="address"
                                {...register("address", { required: "Address is required" })}
                                autoComplete="address-line1"
                            />
                            {errors.address && <p className="text-red-400 text-sm">{errors.address.message}</p>}
                        </div>
                        <div className={styles.formBlock}>
                            <label htmlFor="payment" className={styles.label}>Payment</label>

                            <label htmlFor="Privat24" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="Privat24"
                                    value="Privat24"
                                    {...register("payment", { required: "Payment is required" })}
                                    autoComplete="off"
                                />
                                Privat 24
                            </label>
                            <label htmlFor="Monobank" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="Monobank"
                                    value="Monobank"
                                    {...register("payment", { required: "Payment is required" })}
                                    autoComplete="off"
                                />
                                Monobank
                            </label>
                            <label htmlFor="Abank" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="Abank"
                                    value="Abank"
                                    {...register("payment", { required: "Payment is required" })}
                                    autoComplete="off"
                                />
                                Abank
                            </label>
                            <label htmlFor="Sense Bank" className="flex gap-2">
                                <input
                                    type="radio"
                                    id="Sense Bank"
                                    value="Sense Bank"
                                    {...register("payment", { required: "Payment is required" })}
                                    autoComplete="off"
                                />
                                Sense Bank
                            </label>
                            {errors.payment && <p className="text-red-400 text-sm">{errors.payment.message}</p>}

                            <Controller
                                name="cardNumber"
                                control={control}
                                rules={{
                                    required: "Card number is required",
                                    pattern: {
                                        value: /^[0-9\s]{19}$/,
                                        message: "Invalid card number",
                                    },
                                }}
                                render={({ field }) => (
                                    <input
                                        {...field}
                                        placeholder="Card number..."
                                        type="text"
                                        id="payment"
                                        maxLength={19}
                                        inputMode="numeric"
                                        pattern="[0-9\s]*"
                                        onChange={(e) => field.onChange(formatCardNumber(e.target.value))}
                                        autoComplete="cc-number"
                                    />
                                )}
                            />
                            {errors.cardNumber && <p className="text-red-400 text-sm">{errors.cardNumber.message}</p>}
                        </div>
                        <div className={styles.formBlock}>
                            <label htmlFor="comment" className={styles.label}>Your comment</label>

                            <textarea
                                placeholder='Comment...'
                                id="comment"
                                {...register("comment")}
                                autoComplete="off"
                            />
                        </div>
                    </form>

                    <div className="flex-[0_1_50%] min-h-[960px] bg-[#A4A4A4]">
                        <button onClick={() => formRef.current && formRef.current.dispatchEvent(new Event("submit", { bubbles: true }))} className={styles.buttonBuy} type='submit' form='order' disabled={isSubmitting}>
                            {isSubmitting ? "Pending..." : "Place your order"}
                        </button>
                    </div>
                </div>
            </div>
        </section >
    )
}