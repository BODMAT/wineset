import { useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";
import { Controller, useForm } from 'react-hook-form';
import { IPersonalData } from '../../types/interfaces';
import { formatCardNumber, formatCart } from '../../utils/utils';
import { FinalCart } from './FinalCart';
import { useAuthStore } from '../../store/auth';
import { usePopupStore } from '../../store/popup';
import { useCart } from '../../store/cart';
import { updateProductQuantities } from '../../api/product';
import { useBonusStore } from '../../store/bonus';

const labelCls = "text-[#121212] font-inter font-semibold leading-normal uppercase fluid-text [--fmin:22] [--fmax:26]";
const formBlockCls = "flex flex-col items-stretch justify-stretch gap-5 w-full [&_label]:mb-2.5 [&_input]:grow [&_input]:w-full [&_input]:p-5 [&_input]:bg-[#F4F4F4] [&_input]:text-black [&_input]:font-inter [&_input]:font-normal [&_input]:leading-normal [&_input::placeholder]:text-[#898989] [&_input::placeholder]:font-inter [&_input::placeholder]:font-normal [&_input::placeholder]:leading-normal [&_input[type=radio]]:grow-0 [&_input[type=radio]]:w-5 [&_textarea]:grow [&_textarea]:w-full [&_textarea]:h-[200px] [&_textarea]:resize-none [&_textarea]:p-5 [&_textarea]:bg-[#F4F4F4] [&_textarea]:text-black [&_textarea]:font-inter [&_textarea]:font-normal [&_textarea]:leading-normal [&_textarea::placeholder]:text-[#898989] [&_textarea::placeholder]:font-inter [&_textarea::placeholder]:font-normal [&_textarea::placeholder]:leading-normal";

export function PersonalDataForm() {
    const { updateBonusesInDBAfterPurchase, bonusesYouCanUse, useBonuses } = useBonusStore();
    const { clearCart, cartProducts, totalCartPriceWithoutDiscount, totalCartPriceWithDiscount } = useCart()
    const {
        control,
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IPersonalData>();

    useEffect(() => {
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;
        if (userId) {
            emailjs.init(userId);
        } else {
            console.error("EmailJS user ID is not defined in the environment variables.");
        }
    }, []);

    const formRef = useRef<HTMLFormElement>(null);
    const { user } = useAuthStore();
    const [firstName = "", lastName = ""] = user?.displayName?.split(" ") || [];
    const email = user?.email ? user.email : "";
    const { open } = usePopupStore()

    const sendMail = async (data: IPersonalData) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ORDER_ID;
        const myMail = "matula.bohdan@gmail.com";
        const cart = formatCart(cartProducts);
        const to_email = `${myMail}, ${data.email}`;

        let totalCartPriceWithDiscountAndBonusUsed: number =
            useBonuses ? totalCartPriceWithDiscount - bonusesYouCanUse : totalCartPriceWithDiscount;
        totalCartPriceWithDiscountAndBonusUsed = Number(Math.max(Number(totalCartPriceWithDiscountAndBonusUsed), 0).toFixed(2));
        try {
            await emailjs.send(serviceId, templateId, {
                ...data,
                to_email,
                cart,
                totalCartPriceWithoutDiscount,
                totalCartPriceWithDiscount,
                totalCartPriceWithDiscountAndBonusUsed,
            });

            open("Notification",
                <div className="pb-5">
                    <p className="pb-2">Your order has been successfully submitted. We will contact you shortly.</p>
                    <p>{!user ? "However, you did not receive your bonuses because you are not logged in." : ""}</p>
                </div>
            );

            // Списання використаних бонусів та нарахування нових
            await updateBonusesInDBAfterPurchase();
            await updateProductQuantities(cartProducts);
            clearCart();
            reset();
        } catch (error) {
            open("Notification", <p className="pb-5">Your order has been rejected, check error in console.</p>);
            console.log(error);
        }
    };


    return (
        <section className='py-8'>
            <div className="myContainer">
                <h2 className="text-[#121212] font-cormorant font-bold leading-normal uppercase fluid-text [--fmin:36] [--fmax:48]">Personally Identifiable Information</h2>
                <div className="flex justify-between items-center gap-30 mt-5 max-[900px]:flex-col">
                    <form ref={formRef} id="oeder" className='flex-[0_1_50%] flex flex-col gap-10 max-[900px]:w-full' onSubmit={handleSubmit(sendMail)}>
                        <div className={formBlockCls}>
                            <label htmlFor="name" className={labelCls}>Recipient</label>

                            <input
                                placeholder='First name...'
                                type="text"
                                id='name'
                                defaultValue={firstName ?? ''}
                                {...register("name", { required: "Name is required" })}
                                autoComplete="given-name"
                            />
                            {errors.name && <p className="text-red-400 text-sm">{errors.name.message}</p>}

                            <input
                                placeholder='Surname...'
                                type="text"
                                id='surname'
                                defaultValue={lastName ?? ''}
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
                                defaultValue={email ?? ''}
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Invalid email address"
                                    },
                                })}
                                autoComplete="email"
                            />
                            {errors.email && <p className="text-red-400 text-sm">{errors.email.message}</p>}
                        </div>
                        <div className={formBlockCls}>
                            <label htmlFor="address" className={labelCls}>Delivery</label>
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
                        <div className={formBlockCls}>
                            <label htmlFor="payment" className={labelCls}>Payment</label>

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
                        <div className={formBlockCls}>
                            <label htmlFor="comment" className={labelCls}>Your comment</label>

                            <textarea
                                placeholder='Comment...'
                                id="comment"
                                {...register("comment")}
                                autoComplete="off"
                            />
                        </div>
                    </form>

                    <FinalCart isSubmitting={isSubmitting} formRef={formRef} />
                </div>
            </div>
        </section >
    )
}