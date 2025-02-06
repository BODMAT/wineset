import { Glasses } from "../../OOPStructure/Pruduct";

const G1 = new Glasses({
    name: "RIEDEL EXTREME RIESLING Wine glasses",
    price: 10,
    volume: 0.2,
    discount: 30,
    description: ["Glass for white wine", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glasses/G1.png",
    country: "Italy",
})

const G2 = new Glasses({
    name: "Crystal Elegance Wine glasses",
    price: 15,
    volume: 0.3,
    discount: 10,
    description: ["Glass for red wine", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glasses/G2.png",
    country: "Italy",
})

const G3 = new Glasses({
    name: "Velvet Pour Wine glasses",
    price: 10,
    volume: 0.2,
    discount: 20,
    description: ["Glass for red wine", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glasses/G3.png",
    country: "France",
})

const G4 = new Glasses({
    name: "Amber Charm Wine glasses",
    price: 15,
    volume: 0.3,
    discount: 10,
    description: ["Glass for red wine", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glasses/G4.png",
    country: "Italy",
})

const G5 = new Glasses({
    name: "Diamond Shine Wine glasses",
    price: 10,
    volume: 0.15,
    discount: 20,
    description: ["Glass for red wine", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glasses/G5.png",
    country: "France",
})

const G6 = new Glasses({
    name: "Golden Touch Whiskey glasses",
    price: 15,
    volume: 0.3,
    discount: 10,
    description: ["Glass for whiskey or vodka", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glasses/G6.png",
    country: "Italy",
})

const G7 = new Glasses({
    name: "Silver Shine Champagne glasses",
    price: 10,
    volume: 0.15,
    discount: 20,
    description: ["Glass for champagne", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glasses/G7.png",
    country: "Italy",
})

const G8 = new Glasses({
    name: "Black Velvet Champagne glasses",
    price: 15,
    volume: 0.1,
    description: ["Glass for champagne", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glasses/G8.png",
    country: "France",
})

const G9 = new Glasses({
    name: "Crystal Elegance Champagne glasses",
    price: 10,
    volume: 0.15,
    description: ["Glass for champagne", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glasses/G9.png",
    country: "Italy",
})

export const GLASSES: Glasses[] = [G1, G2, G3, G4, G5, G6, G7, G8, G9];