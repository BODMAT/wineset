import { Sauce } from "../../architecture/Pruduct";

const S1 = new Sauce({
    name: "Pesto Genovese",
    description: "Classic Italian basil pesto sauce",
    price: 8,
    volume: 0.25,
    imageUrl: "/Products/Sauce/PestoGenovese.png",
    country: "Italy",
    quantity: 300,
    fullDescription: {
        region: "Liguria",
        maker: "Barilla",
        prosentShugar: 0,
        prosentAcid: 20,
        prosentAroma: 50,
        prosentTaste: 80,
        productStyle: "Rich, green basil pesto with garlic, pine nuts, and Parmesan.",
        tastingCharacteristics: "Herbaceous, garlicky, and nutty with a creamy texture.",
        gastronomicCombinations: "Pairs well with pasta, grilled vegetables, and crusty bread."
    }
});

const S2 = new Sauce({
    name: "Marinara Sauce",
    description: "Traditional Italian tomato sauce with herbs",
    price: 6,
    volume: 0.3,
    imageUrl: "/Products/Sauce/Marinara.png",
    country: "Italy",
    quantity: 350,
    fullDescription: {
        region: "Campania",
        maker: "Rao's Homemade",
        prosentShugar: 4,
        prosentAcid: 25,
        prosentAroma: 60,
        prosentTaste: 70,
        productStyle: "Tomato-based sauce with garlic, onions, and Italian herbs.",
        tastingCharacteristics: "Rich tomato flavor with a touch of sweetness and garlic.",
        gastronomicCombinations: "Pairs well with pasta, meatballs, and pizza."
    }
});

const S3 = new Sauce({
    name: "Alfredo Sauce",
    description: "Creamy white sauce with Parmesan and garlic",
    price: 9,
    volume: 0.3,
    imageUrl: "/Products/Sauce/Alfredo.png",
    country: "Italy",
    quantity: 200,
    fullDescription: {
        region: "Rome",
        maker: "Classico",
        prosentShugar: 3,
        prosentAcid: 15,
        prosentAroma: 40,
        prosentTaste: 85,
        productStyle: "Rich, creamy sauce with Parmesan, butter, and garlic.",
        tastingCharacteristics: "Creamy and cheesy with a buttery finish.",
        gastronomicCombinations: "Pairs well with fettuccine, grilled chicken, and broccoli."
    }
});

const S4 = new Sauce({
    name: "Barbecue Sauce",
    description: "Sweet and tangy sauce with smoky flavor",
    price: 7,
    volume: 0.25,
    imageUrl: "/Products/Sauce/Barbecue.png",
    country: "USA",
    quantity: 400,
    fullDescription: {
        region: "Kansas City",
        maker: "Sweet Baby Ray's",
        prosentShugar: 25,
        prosentAcid: 10,
        prosentAroma: 70,
        prosentTaste: 80,
        productStyle: "Sweet, tangy, and smoky with hints of molasses.",
        tastingCharacteristics: "Sweet with a smoky kick and a touch of heat.",
        gastronomicCombinations: "Pairs well with ribs, burgers, and grilled chicken."
    }
});

const S5 = new Sauce({
    name: "Buffalo Sauce",
    description: "Spicy, tangy sauce with buttery flavor",
    price: 8,
    volume: 0.25,
    discount: 20,
    imageUrl: "/Products/Sauce/Buffalo.png",
    country: "USA",
    quantity: 350,
    fullDescription: {
        region: "New York",
        maker: "Frank's RedHot",
        prosentShugar: 1,
        prosentAcid: 30,
        prosentAroma: 60,
        prosentTaste: 90,
        productStyle: "Spicy and tangy sauce with a buttery finish.",
        tastingCharacteristics: "Tangy, spicy with a buttery richness.",
        gastronomicCombinations: "Pairs well with chicken wings, fries, and celery."
    }
});

const S6 = new Sauce({
    name: "Carbonara Sauce",
    description: "Creamy egg-based sauce with pancetta",
    price: 10,
    volume: 0.25,
    imageUrl: "/Products/Sauce/Carbonara.png",
    country: "Italy",
    quantity: 250,
    fullDescription: {
        region: "Lazio",
        maker: "Barilla",
        prosentShugar: 2,
        prosentAcid: 18,
        prosentAroma: 40,
        prosentTaste: 85,
        productStyle: "Rich egg-based sauce with pancetta and Parmesan.",
        tastingCharacteristics: "Rich and creamy with smoky pancetta notes.",
        gastronomicCombinations: "Pairs well with pasta, particularly spaghetti."
    }
});

const S7 = new Sauce({
    name: "Tzatziki Sauce",
    description: "Greek yogurt-based sauce with cucumber and garlic",
    price: 6,
    volume: 0.3,
    imageUrl: "/Products/Sauce/Tzatziki.png",
    country: "Greece",
    quantity: 300,
    fullDescription: {
        region: "Athens",
        maker: "Fage",
        prosentShugar: 2,
        prosentAcid: 35,
        prosentAroma: 60,
        prosentTaste: 70,
        productStyle: "Yogurt-based sauce with cucumber, garlic, and herbs.",
        tastingCharacteristics: "Tangy, fresh, and cooling with hints of garlic.",
        gastronomicCombinations: "Pairs well with grilled meats, pita bread, and salad."
    }
});

const S8 = new Sauce({
    name: "Soy Sauce",
    description: "Salty, umami-rich sauce made from fermented soybeans",
    price: 5,
    volume: 0.3,
    imageUrl: "/Products/Sauce/Soy.png",
    country: "Japan",
    quantity: 500,
    fullDescription: {
        region: "Kyoto",
        maker: "Kikkoman",
        prosentShugar: 1,
        prosentAcid: 45,
        prosentAroma: 80,
        prosentTaste: 90,
        productStyle: "Salty, savory, and umami-rich sauce.",
        tastingCharacteristics: "Salty, slightly sweet with a deep umami flavor.",
        gastronomicCombinations: "Pairs well with sushi, ramen, and stir-fries."
    }
});

const S9 = new Sauce({
    name: "Sriracha Sauce",
    description: "Spicy and garlicky hot sauce",
    price: 7,
    volume: 0.25,
    discount: 30,
    imageUrl: "/Products/Sauce/Sriracha.png",
    country: "Thailand",
    quantity: 400,
    fullDescription: {
        region: "Si Racha",
        maker: "Huy Fong Foods",
        prosentShugar: 10,
        prosentAcid: 30,
        prosentAroma: 80,
        prosentTaste: 85,
        productStyle: "Hot and spicy sauce with garlic and vinegar.",
        tastingCharacteristics: "Spicy, garlicky, and tangy with a sweet undertone.",
        gastronomicCombinations: "Pairs well with noodles, tacos, and fried rice."
    }
});

const S10 = new Sauce({
    name: "Ranch Dressing",
    description: "Creamy dressing with a tangy flavor",
    price: 5,
    volume: 0.3,
    imageUrl: "/Products/Sauce/Ranch.png",
    country: "USA",
    quantity: 450,
    fullDescription: {
        region: "Midwest",
        maker: "Hidden Valley",
        prosentShugar: 2,
        prosentAcid: 15,
        prosentAroma: 45,
        prosentTaste: 70,
        productStyle: "Creamy dressing with buttermilk and herbs.",
        tastingCharacteristics: "Tangy, creamy, with a touch of garlic and onion.",
        gastronomicCombinations: "Pairs well with salads, chicken wings, and pizza."
    }
});

export const SAUCES = [S1, S2, S3, S4, S5, S6, S7, S8, S9, S10]