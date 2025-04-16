import { Candle } from "../../architecture/Pruduct";

const C1 = new Candle({
    name: "Lavender Serenity",
    description: "A soothing lavender-scented candle for relaxation",
    price: 5,
    weight: 0.3,
    imageUrl: "/Products/Candle/LavenderSerenity.png",
    country: "France",
    quantity: 800,
    fullDescription: {
        region: "Provence",
        maker: "Maison des Parfums",
        prosentAroma: 90,
        productStyle: "Hand-poured soy wax candle with essential oils.",
        gastronomicCombinations: "Pairs well with a cozy evening, meditation, and a warm bath."
    }
});

const C2 = new Candle({
    name: "Vanilla Bliss",
    description: "A warm and sweet vanilla-scented candle for cozy nights",
    price: 6,
    weight: 0.45,
    imageUrl: "/Products/Candle/VanillaBliss.png",
    country: "Madagascar",
    quantity: 700,
    discount: 15,
    fullDescription: {
        region: "Antananarivo",
        maker: "Maison des Parfums",
        prosentAroma: 85,
        productStyle: "Handcrafted soy wax candle with pure vanilla extract.",
        gastronomicCombinations: "Pairs well with a cup of hot cocoa, reading, and winter evenings."
    }
});

const C3 = new Candle({
    name: "Citrus Energy",
    description: "A refreshing citrus candle to invigorate your senses",
    price: 7,
    weight: 0.4,
    imageUrl: "/Products/Candle/CitrusEnergy.png",
    country: "Italy",
    quantity: 600,
    discount: 10,
    fullDescription: {
        region: "Sicily",
        maker: "Aroma Candles Co.",
        prosentAroma: 88,
        productStyle: "Natural soy wax candle infused with orange, lemon, and bergamot oils.",
        gastronomicCombinations: "Pairs well with a fresh morning, yoga sessions, and herbal tea."
    }
});

const C4 = new Candle({
    name: "Forest Whisper",
    description: "A deep, woody candle with pine and cedar notes",
    price: 8,
    weight: 0.55,
    imageUrl: "/Products/Candle/ForestWhisper.png",
    country: "Canada",
    quantity: 500,
    discount: 10,
    fullDescription: {
        region: "British Columbia",
        maker: "Northern Lights Candle Co.",
        prosentAroma: 92,
        productStyle: "Handmade soy wax candle with pine, cedar, and sandalwood.",
        gastronomicCombinations: "Pairs well with outdoor adventures, winter nights, and whiskey."
    }
});

const C5 = new Candle({
    name: "Rose Harmony",
    description: "A floral rose candle for an elegant and romantic ambiance",
    price: 7.5,
    weight: 0.48,
    discount: 10,
    imageUrl: "/Products/Candle/RoseHarmony.png",
    country: "Bulgaria",
    quantity: 650,
    fullDescription: {
        region: "Valley of Roses",
        maker: "Floral Essence Candles",
        prosentAroma: 87,
        productStyle: "Soy wax candle enriched with Bulgarian rose oil.",
        gastronomicCombinations: "Pairs well with a romantic dinner, classical music, and fine wine."
    }
});

export const CANDLES = [C1, C2, C3, C4, C5]