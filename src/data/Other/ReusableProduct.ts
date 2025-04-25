import { Countries, KindOfProduct } from "../../architecture/Pruduct";

//! for reuseble components
export const dataWPostfixes = {
    "glass": "glasses",
    "delicacy": "delicacies",
    "wine": "wine sets",
    "candle": "candles",
    "champagne": "champagnes",
    "whiskey": "whiskeys",
    "vodka": "vodkas",
    "cheese": "cheeses",
    "cookie": "cookies",
    "sauce": "sauces",
    "box": "gift boxes"
};

export const alcoTypes: KindOfProduct[] = ["wine", "champagne", "whiskey", "vodka", "glass"];
export const othersTypes: KindOfProduct[] = ["delicacy", "candle", "box", "cheese", "cookie", "sauce"];

export const countries: Countries[] = [
    "Australia", "Bulgaria", "Canada", "England", "Finland", "France", "Greece", "Ireland", "Italy", "Japan", "Madagascar", "Poland", "Scotland", "Spain", "Sweden", "Switzerland", "Thailand", "Ukraine", "USA",
];

export const discountOptions = [
    { value: "All prices", label: "All prices" },
    { value: "With discount", label: "With discount" },
    { value: "Without discount", label: "Without discount" },
];

export const countryOptions = [
    { value: "All countries", label: "All countries" },
    ...countries.map((country) => ({ value: country, label: country })),
];