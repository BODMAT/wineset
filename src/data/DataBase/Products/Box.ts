import { Box } from "../../OOPStructure/Pruduct";

const B1 = new Box({
    name: "Gift set Sassicaia",
    imageUrl: "/Products/Box/Sassicaia.jpg",
    discount: 20,
    weight: 4,
    description: "An elegant set featuring the renowned Sassicaia wine and exquisite delicacies.",
    quantity: 199,
    structure: {
        wine: ["coteau-de-chery-condrieu"],
        champagne: ["veuve-clicquot-brut"],
        cheese: ["parmesan"],
        delicacy: ["chorizo-ibérico"],
        sauce: ["soy-sauce", "ranch-dressing"],
        cookie: ["oatmeal-raisin-cookie"],
    },
    fullDescription: {
        productStyle: "Italian classic",
        tastingCharacteristics: "The wine offers cherry and oak notes, with the snacks perfectly complementing its flavor.",
    },
});

const B2 = new Box({
    name: "Gift set Juve Camps",
    imageUrl: "/Products/Box/JuveCamps.jpg",
    discount: 30,
    weight: 5,
    description: "A gift set for lovers of top-tier spirits and gourmet cuisine.",
    quantity: 199,
    structure: {
        whiskey: ["yamazaki-18"],
        champagne: ["bollinger-special-cuvée"],
        cheese: ["gorgonzola"],
        delicacy: ["speck"],
        sauce: ["marinara-sauce", "tzatziki-sauce", "sriracha-sauce"],
        cookie: ["lemon-cookie", "peanut-butter-cookie"],
        candle: ["forest-whisper"],
    },
    fullDescription: {
        productStyle: "Classic gourmet style",
        tastingCharacteristics: "The Yamazaki 18-year-old whiskey offers a rich and complex flavor, complemented by Bollinger champagne's elegance.",
    },
});

const B3 = new Box({
    name: "Gift set Cesari",
    imageUrl: "/Products/Box/Cesari.jpg",
    discount: 10,
    weight: 3,
    description: "A luxurious set combining Italian wines, premium whiskey, and gourmet treats.",
    quantity: 199,
    structure: {
        whiskey: ["laphroaig-10"],
        wine: ["coteau-de-chery-condrieu"],
        champagne: ["veuve-clicquot-brut"],
        cheese: ["parmesan"],
        delicacy: ["chorizo-ibérico"],
        sauce: ["tzatziki-sauce", "ranch-dressing"],
        cookie: ["oatmeal-raisin-cookie"],
        candle: ["lavender-serenity"],
    },
    fullDescription: {
        productStyle: "Luxury Italian with a hint of Scotland",
        tastingCharacteristics: "This set offers a harmonious blend of smoky whiskey, fresh wine, and savory snacks.",
    },
});

const B4 = new Box({
    name: "Gift set P.V. Restituta",
    imageUrl: "/Products/Box/Restituta.jpg",
    discount: 20,
    weight: 4,
    description: "An ideal gift set for those who appreciate rich flavors and the best of gourmet treats.",
    quantity: 199,
    structure: {
        whiskey: ["glenfiddich-21"],
        wine: ["coteau-de-chery-condrieu"],
        champagne: ["veuve-clicquot-brut"],
        cheese: ["brie"],
        delicacy: ["chorizo-ibérico"],
        sauce: ["tzatziki-sauce", "ranch-dressing"],
        cookie: ["oatmeal-raisin-cookie"],
        candle: ["lavender-serenity"],
    },
    fullDescription: {
        productStyle: "Sophisticated and bold",
        tastingCharacteristics: "A set featuring rich whiskey, fresh wine, and flavorful delicacies for a refined experience.",
    },
});

export const BOXES = [B1, B2, B3, B4];
