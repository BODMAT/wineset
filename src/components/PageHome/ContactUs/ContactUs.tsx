import { useEffect } from "react";
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
            className="relative max-w-[1280px] mx-auto box-content px-[50px] max-[991.98px]:mb-[50px] max-[991.98px]:px-[15px]">
            <div className="relative z-[6] translate-y-[12%] flex items-center shadow-[0_15px_50px_12px_rgba(0,0,0,.1)] bg-[url('/HomePage/ContactUs/TEXTURE.png')] bg-cover bg-no-repeat bg-white max-[991.98px]:flex-col max-[991.98px]:translate-y-0">
                <div className="flex-[0_1_50%] text-center overflow-hidden max-[991.98px]:flex-auto max-[991.98px]:w-full">
                    <h2 className="text-[#121212] text-[32px] font-cormorant font-bold leading-normal uppercase mb-[80px] max-[991.98px]:my-[30px]">Contact us</h2>
                    <form className="flex flex-col gap-y-[30px] px-[80px] max-[991.98px]:py-[30px] max-[991.98px]:max-w-full" id="contact" onSubmit={handleSubmit(sendMail)}>
                        <input
                            placeholder="Enter your name..."
                            className="bg-[#f4f4f4] p-5 rounded-[3px] max-w-full"
                            type="text"
                            {...register("name", { required: "Name is required" })}
                        />
                        <input
                            placeholder="Enter your email..."
                            className="bg-[#f4f4f4] p-5 rounded-[3px] max-w-full"
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
                            className="bg-[#f4f4f4] p-5 rounded-[3px] max-w-full h-[202px] resize-none"
                            {...register("text", { required: "Message is required" })}
                        />
                        <button type="submit" className="mt-[50px] mx-auto rounded-[3px] text-center text-white font-inter font-semibold leading-normal uppercase px-[70px] py-[15px] bg-[#7A0000] border-2 border-[#7A0000] transitioned fluid-text [--fmin:14] [--fmax:16] hover:bg-white hover:text-[#7A0000] max-[991.98px]:mt-0" disabled={isSubmitting}>
                            {isSubmitting ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                    {Object.keys(errors).length > 0 && (
                        <p className="pt-2.5 max-[991.98px]:pb-[50px]">
                            {[errors.name?.message, errors.email?.message, errors.text?.message]
                                .filter(Boolean)
                                .join(", ")}
                        </p>
                    )}
                </div>
                <div className="h-[800px] flex-[0_1_50%] relative max-[991.98px]:flex-auto max-[991.98px]:w-full max-[991.98px]:h-[300px]">
                    <img className="absolute w-full h-full top-0 left-0 object-cover" src="./HomePage/ContactUs/wine-glass1.jpg" alt="wine-glasses" />
                </div>
            </div>
            <div
                style={{
                    opacity: opacity,
                }}
                className="absolute w-[260px] h-auto top-0 right-0"
            >
                <img src="./WineSpots/wine-spot.png" alt="wine-spot" />
            </div>
        </section>
    );
}
