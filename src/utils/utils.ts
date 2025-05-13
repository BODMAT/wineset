import { Timestamp } from "firebase/firestore";
import { AsianCountries, EuropeanCountries, IProduct, IProductWithCartQuantity, KindOfProduct, OtherCountries, ReviewConfig } from "../architecture/Pruduct";
import { RegionType } from "../types/types";
import { PageRoute } from "../types/interfaces";

export function capitalizeFirstLetter(str: string): string {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const formatCardNumber = (value: string) => {
    return value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(\d{4})/g, "$1 ")
        .trim();
};

export const handleAddToCart = (product: IProduct) => {
    product.addToCart();
};

export function getRandomProduct(exclude?: KindOfProduct): KindOfProduct {
    const products: KindOfProduct[] = [
        "wine", "champagne", "whiskey", "vodka",
        "delicacy", "glass", "candle",
        "cheese", "cookie", "sauce"
    ].filter(p => p !== exclude) as KindOfProduct[];

    return products[Math.floor(Math.random() * products.length)];
}

export const copyAndGetCurrentUrl = async (): Promise<string> => {
    try {
        navigator.clipboard.writeText(window.location.href);
        return window.location.href;
    } catch (err) {
        console.error("Failed to copy: ", err);
        return "failed to copy";
    }
};

export function getCountryRegion(country: string | undefined): RegionType | null {
    if (!country) return null;

    const europe: EuropeanCountries[] = [
        "Bulgaria", "England", "Finland", "France", "Greece", "Ireland",
        "Italy", "Poland", "Scotland", "Spain", "Sweden", "Switzerland", "Ukraine"
    ];

    const asia: AsianCountries[] = ["Japan", "Thailand"];

    const other: OtherCountries[] = ["Australia", "Canada", "Madagascar", "USA"];

    if (europe.includes(country as EuropeanCountries)) return "europe";
    if (asia.includes(country as AsianCountries)) return "asia";
    if (other.includes(country as OtherCountries)) return "other";

    return null;
}

export function getRating(fullReviews: ReviewConfig[]): number {
    if (fullReviews && fullReviews.length > 0) {
        const totalRating = fullReviews.reduce((acc, review: ReviewConfig) => acc + review.rating, 0);
        return Math.round((totalRating / fullReviews.length) * 10) / 10; // Round to one decimal place
    } else {
        return 5.0;
    }
}

export const formatDate = (date: any): string => {
    if (date instanceof Timestamp) {
        date = date.toDate();
    }

    if (!(date instanceof Date)) {
        return "Invalid date format";
    }

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}`;
};

export function getForcedImageUrl(url: string) {
    const forcedUrl = `${url}?t=${new Date().getTime()}`;
    return forcedUrl;
}

export function resolveImageUrl(relativePath: string): string {
    // Видаляємо './' з початку, якщо є
    const cleaned = relativePath.replace(/^\.?\//, '');
    return `${import.meta.env.BASE_URL}${cleaned}`;
}

export const formatCart = (cart: IProductWithCartQuantity[]) => {
    return cart
        .map(item =>
            `• ${item.kindOfProduct}: ${item.name} — ${item.cartQuantity} шт × ${item.price}₴ = ${item.cartQuantity! * item.price}₴ (знижка ${item.discount}%)`
        )
        .join('\n');
};

export function isProduct(result: IProduct | PageRoute): result is IProduct {
    return (result as IProduct).id !== undefined;
}

export function isPage(result: IProduct | PageRoute): result is PageRoute {
    return (result as PageRoute).path !== undefined;
}

export const isTodayHoliday = (): boolean => {
    const now = new Date();
    const day = now.getDate();
    const month = now.getMonth() + 1;

    const HOLIDAYS = [
        { day: 1, month: 1 },   // Новий Рік
        { day: 8, month: 3 },   // 8 Березня
        { day: 11, month: 5 },  // День вина
        { day: 4, month: 10 },  // День алкоголю
    ];

    return HOLIDAYS.some(h => h.day === day && h.month === month);
};
