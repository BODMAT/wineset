import { Champagne } from "../../architecture/Pruduct";

const CH1 = new Champagne({
    name: "Dom Pérignon Vintage 2005",
    description: "Prestigious vintage champagne with exceptional complexity",
    price: 350,
    volume: 0.75,
    imageUrl: "/Products/Champagne/DomPerignon2005.png",
    country: "France",
    quantity: 120,
    fullDescription: {
        region: "Champagne",
        maker: "Moët & Chandon",
        fortress: "12.5%",
        shugarType: "Brut",
        prosentShugar: 8,
        prosentAcid: 20,
        prosentAroma: 85,
        prosentTaste: 95,
        productStyle: "Elegant and well-balanced vintage champagne with fine bubbles.",
        tastingCharacteristics: "Notes of toasted brioche, citrus, and white flowers with a creamy texture.",
        gastronomicCombinations: "Pairs well with oysters, caviar, and soft cheeses."
    }
});

const CH2 = new Champagne({
    name: "Veuve Clicquot Brut",
    description: "Iconic non-vintage brut champagne",
    price: 60,
    volume: 0.75,
    imageUrl: "/Products/Champagne/VeuveClicquotBrut.png",
    country: "France",
    quantity: 200,
    fullDescription: {
        region: "Champagne",
        maker: "Veuve Clicquot",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 10,
        prosentAcid: 18,
        prosentAroma: 80,
        prosentTaste: 90,
        productStyle: "Crisp and refreshing with a fine mousse.",
        tastingCharacteristics: "Hints of apple, brioche, and citrus with a smooth finish.",
        gastronomicCombinations: "Pairs well with seafood, sushi, and light appetizers."
    }
});

const CH3 = new Champagne({
    name: "Moët & Chandon Impérial",
    description: "Elegant and balanced brut champagne",
    price: 55,
    volume: 0.75,
    imageUrl: "/Products/Champagne/MoetImperial.png",
    country: "France",
    quantity: 180,
    fullDescription: {
        region: "Champagne",
        maker: "Moët & Chandon",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 9,
        prosentAcid: 17,
        prosentAroma: 82,
        prosentTaste: 88,
        productStyle: "Bright and refined champagne with lively bubbles.",
        tastingCharacteristics: "Notes of pear, citrus, and toasted almonds.",
        gastronomicCombinations: "Pairs well with shellfish, creamy cheeses, and poultry."
    }
});

const CH4 = new Champagne({
    name: "Bollinger Special Cuvée",
    description: "Full-bodied and complex brut champagne",
    price: 75,
    volume: 0.75,
    imageUrl: "/Products/Champagne/BollingerSpecialCuvee.png",
    country: "France",
    quantity: 150,
    fullDescription: {
        region: "Champagne",
        maker: "Bollinger",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 8,
        prosentAcid: 19,
        prosentAroma: 86,
        prosentTaste: 92,
        productStyle: "Rich and intense with a creamy texture.",
        tastingCharacteristics: "Toasted bread, ripe fruit, and hints of nuts.",
        gastronomicCombinations: "Pairs well with foie gras, grilled lobster, and charcuterie."
    }
});

const CH5 = new Champagne({
    name: "Perrier-Jouët Grand Brut",
    description: "Delicate and floral brut champagne",
    price: 65,
    volume: 0.75,
    imageUrl: "/Products/Champagne/PerrierJouetGrandBrut.png",
    country: "France",
    quantity: 140,
    fullDescription: {
        region: "Champagne",
        maker: "Perrier-Jouët",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 9,
        prosentAcid: 16,
        prosentAroma: 84,
        prosentTaste: 89,
        productStyle: "Light and floral with fine bubbles.",
        tastingCharacteristics: "White flowers, citrus zest, and honeyed undertones.",
        gastronomicCombinations: "Pairs well with seafood, asparagus dishes, and fresh fruits."
    }
});

const CH6 = new Champagne({
    name: "Laurent-Perrier Rosé",
    description: "Elegant and fruity rosé champagne",
    price: 90,
    volume: 0.75,
    imageUrl: "/Products/Champagne/LaurentPerrierRose.png",
    country: "France",
    quantity: 130,
    discount: 10,
    fullDescription: {
        region: "Champagne",
        maker: "Laurent-Perrier",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 11,
        prosentAcid: 15,
        prosentAroma: 88,
        prosentTaste: 91,
        productStyle: "Fresh and fruity with a delicate pink hue.",
        tastingCharacteristics: "Raspberry, strawberry, and floral notes.",
        gastronomicCombinations: "Pairs well with smoked salmon, duck, and red fruit desserts."
    }
});

const CH7 = new Champagne({
    name: "Taittinger Brut Réserve",
    description: "Refined and well-balanced champagne",
    price: 58,
    volume: 0.75,
    imageUrl: "/Products/Champagne/TaittingerBrutReserve.png",
    country: "France",
    quantity: 160,
    discount: 20,
    fullDescription: {
        region: "Champagne",
        maker: "Taittinger",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 10,
        prosentAcid: 18,
        prosentAroma: 83,
        prosentTaste: 87,
        productStyle: "Elegant and smooth with persistent bubbles.",
        tastingCharacteristics: "Green apple, peach, and a touch of vanilla.",
        gastronomicCombinations: "Pairs well with oysters, roasted chicken, and creamy cheeses."
    }
});

const CH8 = new Champagne({
    name: "Krug Grande Cuvée",
    description: "Luxurious multi-vintage champagne",
    price: 180,
    volume: 0.75,
    imageUrl: "/Products/Champagne/KrugGrandeCuvee.png",
    country: "France",
    quantity: 110,
    discount: 5,
    fullDescription: {
        region: "Champagne",
        maker: "Krug",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 7,
        prosentAcid: 20,
        prosentAroma: 90,
        prosentTaste: 97,
        productStyle: "Deep, complex, and exceptionally refined.",
        tastingCharacteristics: "Dried fruit, marzipan, and toasted hazelnuts.",
        gastronomicCombinations: "Pairs well with truffle dishes, aged cheese, and seafood risotto."
    }
});

const CH9 = new Champagne({
    name: "Pol Roger Brut Réserve",
    description: "Classic and balanced brut champagne",
    price: 55,
    volume: 0.75,
    imageUrl: "/Products/Champagne/PolRogerBrutReserve.png",
    country: "France",
    quantity: 175,
    fullDescription: {
        region: "Champagne",
        maker: "Pol Roger",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 9,
        prosentAcid: 17,
        prosentAroma: 82,
        prosentTaste: 89,
        productStyle: "Crisp and elegant with a fine mousse.",
        tastingCharacteristics: "Citrus, pear, and almond with a hint of spice.",
        gastronomicCombinations: "Pairs well with grilled fish, soft cheeses, and light appetizers."
    }
});

const CH10 = new Champagne({
    name: "Ruinart Blanc de Blancs",
    description: "Elegant Chardonnay-based champagne",
    price: 100,
    volume: 0.75,
    imageUrl: "/Products/Champagne/RuinartBlancDeBlancs.png",
    country: "France",
    quantity: 125,
    discount: 20,
    fullDescription: {
        region: "Champagne",
        maker: "Ruinart",
        fortress: "12%",
        shugarType: "Brut",
        prosentShugar: 8,
        prosentAcid: 19,
        prosentAroma: 87,
        prosentTaste: 92,
        productStyle: "Fresh and mineral-driven with delicate bubbles.",
        tastingCharacteristics: "Citrus zest, white peach, and floral notes.",
        gastronomicCombinations: "Pairs well with seafood, goat cheese, and sushi."
    }
});

export const CHAMPAGNES = [CH1, CH2, CH3, CH4, CH5, CH6, CH7, CH8, CH9, CH10]