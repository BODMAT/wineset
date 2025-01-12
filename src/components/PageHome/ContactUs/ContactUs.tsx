import { useState, useEffect } from "react";
import styles from "./ContactUs.module.scss";
import emailjs from "@emailjs/browser";
import { useOpacity } from "../../../customHooks/useOpacity";

interface IData {
    name: string;
    email: string;
    text: string;
}

export function ContactUs() {
    const { opacity, blockRef } = useOpacity();
    const [data, setData] = useState<IData>({
        name: "",
        email: "",
        text: "",
    });
    const [status, setStatus] = useState<string | null>(null);

    useEffect(() => {
        emailjs.init("hqt9CD7I-ql_oArvG");
    }, []);

    const isValidData = (): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return (
            data.name !== "" &&
            data.email !== "" &&
            emailRegex.test(data.email) &&
            data.text !== ""
        );
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    const sendMail = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (isValidData()) {
            const serviceId = "service_6bxbs4a";
            const templateId = "template_tiwy8bx";
            setStatus("Pending...");
            try {
                await emailjs.send(serviceId, templateId, {
                    email: data.email,
                    name: data.name,
                    text: data.text,
                });
                setStatus("Email successfully sent. Thanks for your feedback.");
            } catch (error) {
                setStatus("Email rejected, check error in console.");
                console.log(error);
            } finally {
                setData({
                    name: "",
                    email: "",
                    text: "",
                });
            }
        } else {
            setStatus("Please fill in all fields with valid data.");
        }
    };

    return (
        <section ref={blockRef} className={styles.contact}>
            <div className={styles.contact__container}>
                <div className={styles.contact__info}>
                    <h2 className={styles.contact__title}>Contact us</h2>
                    <form className={styles.contact__form} id="contact">
                        <input
                            required
                            placeholder="Enter your name..."
                            className={styles.contact__form_name}
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={handleChange}
                        />
                        <input
                            required
                            placeholder="Enter your email..."
                            className={styles.contact__form_email}
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={handleChange}
                        />
                        <textarea
                            required
                            placeholder="Your message..."
                            className={styles.contact__form_message}
                            name="text"
                            value={data.text}
                            onChange={handleChange}
                        />
                        <button type="button" className={styles.contact__form_btn} onClick={sendMail}>
                            Submit
                        </button>
                    </form>
                    {status && <p className={styles.contact__form_status}>{status}</p>}
                </div>
                <div className={styles.contact__img}>
                    <img src="/ContactUs/wine-glass1.jpg" alt="wine-glasses" />
                </div>
            </div>
            <div
                style={{
                    opacity: opacity,
                }}
                className={styles.contact__winespot}
            >
                <img src="/Special/wine-spot.png" alt="wine-spot" />
            </div>
        </section>
    );
}
