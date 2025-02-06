import { Cheese } from "../../OOPStructure/Pruduct";

const C1 = new Cheese({
    name: "Gorgonzola",
    description: "Aged blue cheese",
    price: 25,
    weight: 0.5,
    discount: 20,
    imageUrl: "/Products/Cheese/Gorgonzola.png",
    country: "Italy",
    quantity: 200,
    fullDescription: {
        region: "Lombardy",
        maker: "DOP Gorgonzola Consortium",
        prosentShugar: 10,
        prosentAcid: 10,
        prosentAroma: 60,
        prosentTaste: 70,
        productStyle: "A creamy blue cheese with strong, earthy notes.",
        tastingCharacteristics: "Rich, savory, and bold flavor with a creamy texture.",
        gastronomicCombinations: "Pairs well with nuts, figs, and strong red wines."
    }
});

const C2 = new Cheese({
    name: "Brie",
    description: "Soft creamy cheese with a white rind",
    price: 18,
    weight: 0.4,
    imageUrl: "/Products/Cheese/Brie.png",
    country: "France",
    quantity: 150,
    fullDescription: {
        region: "Île-de-France",
        maker: "Lactalis",
        prosentShugar: 2,
        prosentAcid: 4,
        prosentAroma: 40,
        prosentTaste: 50,
        productStyle: "A rich, buttery cheese with a soft, creamy texture.",
        tastingCharacteristics: "Mild, creamy with hints of mushroom and earthy flavors.",
        gastronomicCombinations: "Pairs well with crackers, fruits, and white wine."
    }
});

const C3 = new Cheese({
    name: "Cheddar",
    description: "Firm, sharp cheese with a rich flavor",
    price: 22,
    weight: 0.6,
    discount: 10,
    imageUrl: "/Products/Cheese/Cheddar.png",
    country: "England",
    quantity: 120,
    fullDescription: {
        region: "Somerset",
        maker: "Cheddar Gorge Cheese Company",
        prosentShugar: 1,
        prosentAcid: 7,
        prosentAroma: 50,
        prosentTaste: 80,
        productStyle: "Hard cheese with a crumbly texture and sharp flavor.",
        tastingCharacteristics: "Rich, sharp, and tangy with a nutty finish.",
        gastronomicCombinations: "Pairs well with apples, crackers, and dark beer."
    }
});

const C4 = new Cheese({
    name: "Feta",
    description: "Crumbled, brined cheese with a tangy flavor",
    price: 15,
    weight: 0.3,
    imageUrl: "/Products/Cheese/Feta.png",
    country: "Greece",
    quantity: 180,
    fullDescription: {
        region: "Macedonia",
        maker: "Dodoni",
        prosentShugar: 0,
        prosentAcid: 12,
        prosentAroma: 30,
        prosentTaste: 65,
        productStyle: "A crumbly, tangy cheese with a salty flavor.",
        tastingCharacteristics: "Sharp and tangy, with a rich, briny taste.",
        gastronomicCombinations: "Pairs well with olives, tomatoes, and olive oil."
    }
});

const C5 = new Cheese({
    name: "Camembert",
    description: "Soft, creamy cheese with a white rind",
    price: 20,
    weight: 0.45,
    imageUrl: "/Products/Cheese/Camembert.png",
    country: "France",
    quantity: 140,
    fullDescription: {
        region: "Normandy",
        maker: "Camembert de Normandie",
        prosentShugar: 0,
        prosentAcid: 5,
        prosentAroma: 55,
        prosentTaste: 75,
        productStyle: "Soft, buttery cheese with a pungent aroma.",
        tastingCharacteristics: "Creamy, with earthy and mushroom notes.",
        gastronomicCombinations: "Pairs well with baguettes, apples, and white wines."
    }
});

const C6 = new Cheese({
    name: "Parmesan",
    description: "Hard cheese with a nutty flavor",
    price: 30,
    weight: 0.6,
    discount: 50,
    imageUrl: "/Products/Cheese/Parmesan.png",
    country: "Italy",
    quantity: 100,
    fullDescription: {
        region: "Emilia-Romagna",
        maker: "Consorzio del Formaggio Parmigiano Reggiano",
        prosentShugar: 0,
        prosentAcid: 10,
        prosentAroma: 60,
        prosentTaste: 90,
        productStyle: "Grated, hard cheese with deep umami flavor.",
        tastingCharacteristics: "Nutty, salty, and savory with a crystalline texture.",
        gastronomicCombinations: "Pairs well with pasta, salads, and balsamic vinegar."
    }
});

const C7 = new Cheese({
    name: "Manchego",
    description: "Sheep's milk cheese with a firm texture",
    price: 28,
    weight: 0.5,
    imageUrl: "/Products/Cheese/Manchego.png",
    country: "Spain",
    quantity: 110,
    fullDescription: {
        region: "La Mancha",
        maker: "Quesos El Hidalgo",
        prosentShugar: 2,
        prosentAcid: 8,
        prosentAroma: 45,
        prosentTaste: 65,
        productStyle: "Firm cheese with a slightly tangy, nutty flavor.",
        tastingCharacteristics: "Mild, nutty, and slightly tangy with a smooth finish.",
        gastronomicCombinations: "Pairs well with cured meats, nuts, and red wine."
    }
});

const C8 = new Cheese({
    name: "Gruyère",
    description: "Swiss cheese with a nutty, sweet flavor",
    price: 25,
    weight: 0.55,
    imageUrl: "/Products/Cheese/Gruyere.png",
    country: "Switzerland",
    quantity: 130,
    fullDescription: {
        region: "Fribourg",
        maker: "Gruyère AOP",
        prosentShugar: 0,
        prosentAcid: 6,
        prosentAroma: 50,
        prosentTaste: 80,
        productStyle: "Hard cheese with a smooth, firm texture.",
        tastingCharacteristics: "Nutty, sweet, and slightly salty with a creamy finish.",
        gastronomicCombinations: "Pairs well with French bread, fondue, and beer."
    }
});

const C9 = new Cheese({
    name: "Pecorino Romano",
    description: "Salty, hard cheese made from sheep's milk",
    price: 26,
    weight: 0.5,
    imageUrl: "/Products/Cheese/Pecorino.png",
    country: "Italy",
    quantity: 90,
    fullDescription: {
        region: "Lazio",
        maker: "Caseificio di Pienza",
        prosentShugar: 0,
        prosentAcid: 5,
        prosentAroma: 40,
        prosentTaste: 85,
        productStyle: "Salty, firm cheese with a sharp flavor.",
        tastingCharacteristics: "Sharp, tangy, and salty with a granular texture.",
        gastronomicCombinations: "Pairs well with pasta, roasted meats, and honey."
    }
});

const C10 = new Cheese({
    name: "Ricotta",
    description: "Fresh, soft cheese with a mild flavor",
    price: 18,
    weight: 0.4,
    imageUrl: "/Products/Cheese/Ricotta.png",
    country: "Italy",
    quantity: 200,
    fullDescription: {
        region: "Tuscany",
        maker: "Fattoria di Maiano",
        prosentShugar: 3,
        prosentAcid: 3,
        prosentAroma: 20,
        prosentTaste: 30,
        productStyle: "Soft, fresh cheese with a creamy texture.",
        tastingCharacteristics: "Mild, fresh, and slightly sweet with a soft texture.",
        gastronomicCombinations: "Pairs well with desserts, fruit, and fresh bread."
    }
});

export const CHEESES = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10]