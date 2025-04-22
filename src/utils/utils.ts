import { AsianCountries, EuropeanCountries, IProduct, KindOfProduct, OtherCountries } from "../architecture/Pruduct";
import { RegionType } from "../types/types";
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