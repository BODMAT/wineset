import { useEffect } from "react";
import styles from "./ContactUs.module.scss";
import emailjs from "@emailjs/browser";
import { useOpacity } from "../../../hooks/useOpacity";
import { useForm } from "react-hook-form";
import { IContactUsData } from "../../../types/interfaces";

export function ContactUs() {
    const { opacity, blockRef } = useOpacity();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<IContactUsData>();

    useEffect(() => {
        const userId = import.meta.env.VITE_EMAILJS_USER_ID;
        if (userId) {
            emailjs.init(userId);
        } else {
            console.error("EmailJS user ID is not defined in the environment variables.");
        }
    }, []);

    const sendMail = async (data: IContactUsData) => {
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

        try {
            await emailjs.send(serviceId, templateId, { ...data });
            alert("Email successfully sent. Thanks for your feedback.");
            reset();
        } catch (error) {
            alert("Email rejected, check error in console.");
            console.log(error);
        }
    };

    return (
        <section
            ref={blockRef}
            className={styles.contact}>
            <div className={styles.contact__container}>
                <div className={styles.contact__info}>
                    <h2 className={styles.contact__title}>Contact us</h2>
                    <form className={styles.contact__form} id="contact" onSubmit={handleSubmit(sendMail)}>
                        <input
                            placeholder="Enter your name..."
                            className={styles.contact__form_name}
                            type="text"
                            {...register("name", { required: "Name is required" })}
                        />
                        <input
                            placeholder="Enter your email..."
                            className={styles.contact__form_email}
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Invalid email address",
                                },
                            })}
                        />
                        <textarea
                            placeholder="Your message..."
                            className={styles.contact__form_message}
                            {...register("text", { required: "Message is required" })}
                        />
                        <button type="submit" className={styles.contact__form_btn} disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                    {Object.keys(errors).length > 0 && (
                        <p className={styles.contact__form_status}>
                            {[errors.name?.message, errors.email?.message, errors.text?.message]
                                .filter(Boolean)
                                .join(", ")}
                        </p>
                    )}
                </div>
                <div className={styles.contact__img}>
                    <img src="/HomePage/ContactUs/wine-glass1.jpg" alt="wine-glasses" />
                </div>
            </div>
            <div
                style={{
                    opacity: opacity,
                }}
                className={styles.contact__winespot}
            >
                <img src="/WineSpots/wine-spot.png" alt="wine-spot" />
            </div>
        </section>
    );
}