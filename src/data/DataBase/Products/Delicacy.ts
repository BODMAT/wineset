import { Delicacy } from "../../OOPStructure/Pruduct";

const D1 = new Delicacy({
    name: "Jamón Ibérico",
    description: "Premium Spanish dry-cured ham",
    price: 120,
    weight: 1,
    imageUrl: "/Products/Delicacy/JamonIberico.png",
    country: "Spain",
    quantity: 150,
    fullDescription: {
        region: "Andalusia",
        maker: "Cinco Jotas",
        prosentShugar: 0,
        prosentAcid: 15,
        prosentAroma: 70,
        prosentTaste: 90,
        productStyle: "Dry-aged, marbled ham with deep umami flavor.",
        tastingCharacteristics: "Rich, nutty, and buttery with delicate saltiness.",
        gastronomicCombinations: "Pairs well with Manchego cheese, figs, and red wine."
    }
});

const D2 = new Delicacy({
    name: "Prosciutto di Parma",
    description: "Traditional Italian dry-cured ham",
    price: 95,
    weight: 0.8,
    imageUrl: "/Products/Delicacy/Prosciutto.png",
    country: "Italy",
    quantity: 200,
    fullDescription: {
        region: "Parma",
        maker: "Fratelli Galloni",
        prosentShugar: 0,
        prosentAcid: 10,
        prosentAroma: 65,
        prosentTaste: 85,
        productStyle: "Thinly sliced, aged ham with delicate sweetness.",
        tastingCharacteristics: "Mild, savory, and slightly nutty with a soft texture.",
        gastronomicCombinations: "Pairs well with melon, Parmesan, and white wine."
    }
});

const D3 = new Delicacy({
    name: "Chorizo Ibérico",
    description: "Spicy Spanish cured sausage",
    price: 45,
    weight: 0.6,
    imageUrl: "/Products/Delicacy/Chorizo.png",
    country: "Spain",
    quantity: 180,
    fullDescription: {
        region: "Extremadura",
        maker: "La Prudencia",
        prosentShugar: 0,
        prosentAcid: 20,
        prosentAroma: 75,
        prosentTaste: 80,
        productStyle: "Bold, smoky, and spicy chorizo made from Iberian pork.",
        tastingCharacteristics: "Spicy, smoky, and rich with hints of paprika.",
        gastronomicCombinations: "Pairs well with manchego cheese, olives, and Rioja wine."
    }
});

const D4 = new Delicacy({
    name: "Bresaola",
    description: "Air-dried, salted beef from Italy",
    price: 70,
    weight: 0.5,
    imageUrl: "/Products/Delicacy/Bresaola.png",
    country: "Italy",
    quantity: 130,
    fullDescription: {
        region: "Lombardy",
        maker: "Rigamonti",
        prosentShugar: 0,
        prosentAcid: 18,
        prosentAroma: 65,
        prosentTaste: 75,
        productStyle: "Lean and tender dried beef with delicate seasoning.",
        tastingCharacteristics: "Mild, salty, and slightly tangy with a soft texture.",
        gastronomicCombinations: "Pairs well with arugula, lemon juice, and Parmesan."
    }
});

const D5 = new Delicacy({
    name: "Salame Milano",
    description: "Classic Italian salami with delicate spices",
    price: 50,
    weight: 0.7,
    imageUrl: "/Products/Delicacy/SalameMilano.png",
    country: "Italy",
    quantity: 220,
    fullDescription: {
        region: "Milan",
        maker: "Beretta",
        prosentShugar: 0,
        prosentAcid: 12,
        prosentAroma: 60,
        prosentTaste: 78,
        productStyle: "Finely ground, mild salami with balanced spices.",
        tastingCharacteristics: "Delicate, slightly peppery, and rich with a smooth finish.",
        gastronomicCombinations: "Pairs well with crusty bread, olives, and red wine."
    }
});

const D6 = new Delicacy({
    name: "Morcilla",
    description: "Traditional Spanish blood sausage",
    price: 30,
    weight: 0.6,
    imageUrl: "/Products/Delicacy/Morcilla.png",
    country: "Spain",
    quantity: 170,
    fullDescription: {
        region: "Castile and León",
        maker: "Embutidos Pajariel",
        prosentShugar: 0,
        prosentAcid: 25,
        prosentAroma: 70,
        prosentTaste: 82,
        productStyle: "Rich and earthy blood sausage with rice and spices.",
        tastingCharacteristics: "Savory, smoky, and slightly spicy with a deep umami taste.",
        gastronomicCombinations: "Pairs well with cider, roasted peppers, and rustic bread."
    }
});

const D7 = new Delicacy({
    name: "Culatello di Zibello",
    description: "Delicate and rare Italian dry-cured ham",
    price: 140,
    weight: 1,
    imageUrl: "/Products/Delicacy/Culatello.png",
    country: "Italy",
    quantity: 90,
    fullDescription: {
        region: "Emilia-Romagna",
        maker: "Antica Corte Pallavicina",
        prosentShugar: 0,
        prosentAcid: 10,
        prosentAroma: 80,
        prosentTaste: 95,
        productStyle: "Silky, aged ham with deep, complex flavors.",
        tastingCharacteristics: "Delicate, buttery, and slightly sweet with earthy undertones.",
        gastronomicCombinations: "Pairs well with figs, balsamic vinegar, and Champagne."
    }
});

const D8 = new Delicacy({
    name: "Saucisson Sec",
    description: "Traditional French dry-cured sausage",
    price: 55,
    weight: 0.6,
    imageUrl: "/Products/Delicacy/SaucissonSec.png",
    country: "France",
    quantity: 160,
    fullDescription: {
        region: "Auvergne",
        maker: "Maison Loste",
        prosentShugar: 0,
        prosentAcid: 14,
        prosentAroma: 75,
        prosentTaste: 85,
        productStyle: "Firm, aged pork sausage with natural mold rind.",
        tastingCharacteristics: "Savory, slightly nutty, with herbal and peppery notes.",
        gastronomicCombinations: "Pairs well with Brie cheese, cornichons, and red wine."
    }
});

const D9 = new Delicacy({
    name: "Speck",
    description: "Smoked and dry-cured ham from the Alps",
    price: 85,
    weight: 0.9,
    imageUrl: "/Products/Delicacy/Speck.png",
    country: "Italy",
    quantity: 140,
    fullDescription: {
        region: "South Tyrol",
        maker: "Recla",
        prosentShugar: 0,
        prosentAcid: 17,
        prosentAroma: 72,
        prosentTaste: 88,
        productStyle: "Lightly smoked ham with a herbal spice rub.",
        tastingCharacteristics: "Smoky, savory, and slightly sweet with aromatic herbs.",
        gastronomicCombinations: "Pairs well with rye bread, horseradish, and dry white wine."
    }
});

const D10 = new Delicacy({
    name: "Guanciale",
    description: "Italian cured pork cheek",
    price: 60,
    weight: 0.6,
    imageUrl: "/Products/Delicacy/Guanciale.png",
    country: "Italy",
    quantity: 180,
    fullDescription: {
        region: "Lazio",
        maker: "Salumificio Artigianale",
        prosentShugar: 0,
        prosentAcid: 15,
        prosentAroma: 78,
        prosentTaste: 90,
        productStyle: "Rich and fatty pork cheek with delicate spices.",
        tastingCharacteristics: "Savory, slightly salty, with deep umami flavor.",
        gastronomicCombinations: "Pairs well with pasta (Carbonara), pecorino, and red wine."
    }
});

export const DELICACIES = [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10]