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
import { deliveryOptions, paymentOptions } from '../../data/Other/OrderOptions';
import { formBlockCls, labelCls } from './orderFormClasses';
import { FieldError } from './FieldError';
import { RadioField } from './RadioField';
import { RecipientFields } from './RecipientFields';

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
                            <RecipientFields register={register} errors={errors} firstName={firstName} lastName={lastName} email={email} />
                        </div>

                        <div className={formBlockCls}>
                            <label htmlFor="address" className={labelCls}>Delivery</label>
                            <RadioField name="delivery" options={deliveryOptions} register={register} requiredMessage="Delivery is required" />
                            <FieldError message={errors.delivery?.message} />

                            <input
                                placeholder='Address..'
                                type="text"
                                id="address"
                                {...register("address", { required: "Address is required" })}
                                autoComplete="address-line1"
                            />
                            <FieldError message={errors.address?.message} />
                        </div>

                        <div className={formBlockCls}>
                            <label htmlFor="payment" className={labelCls}>Payment</label>
                            <RadioField name="payment" options={paymentOptions} register={register} requiredMessage="Payment is required" />
                            <FieldError message={errors.payment?.message} />

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
                            <FieldError message={errors.cardNumber?.message} />
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
