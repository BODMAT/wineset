import { IProduct, KindOfProduct } from "../architecture/Pruduct";
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
