import { Glass } from "../../OOPStructure/Pruduct";

const G1 = new Glass({
    name: "RIEDEL EXTREME RIESLING Wine Glass",
    price: 10,
    volume: 0.2,
    discount: 30,
    description: ["Glass for white wine", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glass/G1.png",
    country: "Italy",
})

const G2 = new Glass({
    name: "Crystal Elegance Wine Glass",
    price: 15,
    volume: 0.3,
    discount: 10,
    description: ["Glass for red wine", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glass/G2.png",
    country: "Italy",
})

const G3 = new Glass({
    name: "Velvet Pour Wine Glass",
    price: 10,
    volume: 0.2,
    discount: 20,
    description: ["Glass for red wine", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glass/G3.png",
    country: "France",
})

const G4 = new Glass({
    name: "Amber Charm Wine Glass",
    price: 15,
    volume: 0.3,
    discount: 10,
    description: ["Glass for red wine", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glass/G4.png",
    country: "Italy",
})

const G5 = new Glass({
    name: "Diamond Shine Wine Glass",
    price: 10,
    volume: 0.15,
    discount: 20,
    description: ["Glass for red wine", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glass/G5.png",
    country: "France",
})

const G6 = new Glass({
    name: "Golden Touch Whiskey Glass",
    price: 15,
    volume: 0.3,
    discount: 10,
    description: ["Glass for whiskey or vodka", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glass/G6.png",
    country: "Italy",
})

const G7 = new Glass({
    name: "Silver Shine Champagne Glass",
    price: 10,
    volume: 0.15,
    discount: 20,
    description: ["Glass for champagne", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glass/G7.png",
    country: "Italy",
})

const G8 = new Glass({
    name: "Black Velvet Champagne Glass",
    price: 15,
    volume: 0.1,
    description: ["Glass for champagne", "Merlot, Cabernet Sauvignon +"],
    imageUrl: "/Products/Glass/G8.png",
    country: "France",
})

const G9 = new Glass({
    name: "Crystal Elegance Champagne Glass",
    price: 10,
    volume: 0.15,
    description: ["Glass for champagne", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glass/G9.png",
    country: "Italy",
})

export const GLASSES: Glass[] = [G1, G2, G3, G4, G5, G6, G7, G8, G9];