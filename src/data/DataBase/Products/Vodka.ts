import { Vodka } from "../../OOPStructure/Pruduct";

const V1 = new Vodka({
    name: "Grey Goose",
    description: "Ultra-premium French vodka",
    price: 45,
    volume: 0.7,
    imageUrl: "/Products/Vodka/GreyGoose.png",
    country: "France",
    quantity: 300,
    fullDescription: {
        region: "Cognac",
        maker: "Grey Goose Distillery",
        fortress: "40%",
        prosentShugar: 0,
        prosentAcid: 5,
        prosentAroma: 75,
        prosentTaste: 85,
        productStyle: "Smooth and refined wheat-based vodka.",
        tastingCharacteristics: "Clean, crisp taste with hints of citrus and almond.",
        gastronomicCombinations: "Pairs well with caviar, smoked salmon, and chilled oysters."
    }
});

const V2 = new Vodka({
    name: "Belvedere",
    description: "Luxury Polish rye vodka",
    price: 50,
    volume: 0.7,
    imageUrl: "/Products/Vodka/Belvedere.png",
    country: "Poland",
    quantity: 250,
    fullDescription: {
        region: "Żyrardów",
        maker: "Polmos Żyrardów",
        fortress: "40%",
        prosentShugar: 0,
        prosentAcid: 4,
        prosentAroma: 78,
        prosentTaste: 88,
        productStyle: "Rich and velvety rye-based vodka.",
        tastingCharacteristics: "Hints of vanilla, white pepper, and almond.",
        gastronomicCombinations: "Pairs well with charcuterie, caviar, and dark chocolate."
    }
});

const V3 = new Vodka({
    name: "Absolut Elyx",
    description: "Handcrafted Swedish vodka",
    price: 55,
    volume: 0.7,
    imageUrl: "/Products/Vodka/AbsolutElyx.png",
    country: "Sweden",
    quantity: 220,
    discount: 10,
    fullDescription: {
        region: "Åhus",
        maker: "Absolut Company",
        fortress: "42.3%",
        prosentShugar: 0,
        prosentAcid: 3,
        prosentAroma: 80,
        prosentTaste: 90,
        productStyle: "Silky, single-estate wheat vodka.",
        tastingCharacteristics: "Smooth, slightly sweet with a hint of macadamia and fresh bread.",
        gastronomicCombinations: "Pairs well with seafood, olives, and premium cheeses."
    }
});

const V4 = new Vodka({
    name: "Finlandia Classic",
    description: "Pure and crisp Finnish vodka",
    price: 30,
    volume: 0.7,
    imageUrl: "/Products/Vodka/Finlandia.png",
    country: "Finland",
    quantity: 400,
    fullDescription: {
        region: "Koskenkorva",
        maker: "Finlandia Vodka Worldwide",
        fortress: "40%",
        prosentShugar: 0,
        prosentAcid: 5,
        prosentAroma: 72,
        prosentTaste: 82,
        productStyle: "Clean and refreshing six-row barley vodka.",
        tastingCharacteristics: "Crisp, neutral taste with a slight hint of citrus.",
        gastronomicCombinations: "Pairs well with pickled fish, cured meats, and fresh salads."
    }
});

const V5 = new Vodka({
    name: "Green Day",
    description: "Premium eco-friendly Ukrainian vodka",
    price: 32,
    volume: 0.7,
    discount: 20,
    imageUrl: "/Products/Vodka/GreenDay.png",
    country: "Ukraine",
    quantity: 250,
    fullDescription: {
        region: "Kharkiv",
        maker: "Green Day Distillery",
        fortress: "40%",
        prosentShugar: 0,
        prosentAcid: 4,
        prosentAroma: 78,
        prosentTaste: 85,
        productStyle: "Eco-friendly, ultra-clean wheat vodka.",
        tastingCharacteristics: "Crisp, pure taste with a light grainy sweetness and silky finish.",
        gastronomicCombinations: "Pairs well with fresh seafood, caviar, and light appetizers."
    }
});

export const VODKAS = [V1, V2, V3, V4, V5]