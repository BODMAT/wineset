import { Whiskey } from "../../OOPStructure/Pruduct";

const W1 = new Whiskey({
    name: "Macallan 18",
    description: "Aged single malt Scotch whisky",
    price: 350,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Macallan18.png",
    country: "Scotland",
    quantity: 100,
    fullDescription: {
        region: "Speyside",
        maker: "The Macallan Distillery",
        fortress: "43%",
        prosentShugar: 5,
        prosentAcid: 10,
        prosentAroma: 85,
        prosentTaste: 95,
        productStyle: "Rich and complex single malt with sherry cask aging.",
        tastingCharacteristics: "Deep notes of dried fruit, oak, and spice with a smooth, lingering finish.",
        gastronomicCombinations: "Pairs well with dark chocolate, roasted nuts, and aged cheese."
    }
});

const W2 = new Whiskey({
    name: "Glenfiddich 21",
    description: "Prestigious single malt Scotch whisky",
    price: 280,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Glenfiddich21.png",
    country: "Scotland",
    quantity: 120,
    discount: 10,
    fullDescription: {
        region: "Speyside",
        maker: "Glenfiddich Distillery",
        fortress: "40%",
        prosentShugar: 6,
        prosentAcid: 12,
        prosentAroma: 80,
        prosentTaste: 92,
        productStyle: "Caribbean rum cask finish with deep complexity.",
        tastingCharacteristics: "Hints of toffee, fig, and banana with a spicy finish.",
        gastronomicCombinations: "Pairs well with caramel desserts, citrus fruits, and nuts."
    }
});

const W3 = new Whiskey({
    name: "Lagavulin 16",
    description: "Iconic Islay single malt whisky",
    price: 150,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Lagavulin16.png",
    country: "Scotland",
    quantity: 140,
    fullDescription: {
        region: "Islay",
        maker: "Lagavulin Distillery",
        fortress: "43%",
        prosentShugar: 4,
        prosentAcid: 15,
        prosentAroma: 88,
        prosentTaste: 97,
        productStyle: "Rich, smoky, and heavily peated single malt.",
        tastingCharacteristics: "Deep smoky aroma with sea salt, iodine, and dried fruit.",
        gastronomicCombinations: "Pairs well with smoked meats, oysters, and dark chocolate."
    }
});

const W4 = new Whiskey({
    name: "Yamazaki 18",
    description: "Exquisite Japanese single malt whisky",
    price: 450,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Yamazaki18.png",
    country: "Japan",
    quantity: 80,
    discount: 10,
    fullDescription: {
        region: "Osaka",
        maker: "Suntory Yamazaki Distillery",
        fortress: "43%",
        prosentShugar: 7,
        prosentAcid: 10,
        prosentAroma: 90,
        prosentTaste: 98,
        productStyle: "Elegant and complex with Mizunara oak aging.",
        tastingCharacteristics: "Honey, dried fruit, and sandalwood with a long, smooth finish.",
        gastronomicCombinations: "Pairs well with sushi, roasted duck, and fruit tarts."
    }
});

const W5 = new Whiskey({
    name: "Jameson Black Barrel",
    description: "Triple-distilled Irish whiskey",
    price: 50,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/JamesonBlack.png",
    country: "Ireland",
    quantity: 200,
    discount: 20,
    fullDescription: {
        region: "Dublin",
        maker: "Jameson Distillery",
        fortress: "40%",
        prosentShugar: 5,
        prosentAcid: 8,
        prosentAroma: 75,
        prosentTaste: 85,
        productStyle: "Smooth and rich with double-charred barrel aging.",
        tastingCharacteristics: "Vanilla, toasted oak, and spice with a creamy texture.",
        gastronomicCombinations: "Pairs well with cheese platters, apple pie, and coffee."
    }
});

const W6 = new Whiskey({
    name: "Balvenie 12 Caribbean Cask",
    description: "Rich single malt finished in rum casks",
    price: 120,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Balvenie12.png",
    country: "Scotland",
    quantity: 160,
    discount: 20,
    fullDescription: {
        region: "Speyside",
        maker: "Balvenie Distillery",
        fortress: "43%",
        prosentShugar: 8,
        prosentAcid: 10,
        prosentAroma: 78,
        prosentTaste: 89,
        productStyle: "Rum barrel-aged for deep caramel and spice notes.",
        tastingCharacteristics: "Brown sugar, tropical fruit, and vanilla with a lingering warmth.",
        gastronomicCombinations: "Pairs well with grilled pineapple, cinnamon desserts, and nuts."
    }
});

const W7 = new Whiskey({
    name: "Ardbeg 10",
    description: "Powerful and peaty Islay whisky",
    price: 85,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Ardbeg10.png",
    country: "Scotland",
    quantity: 170,
    fullDescription: {
        region: "Islay",
        maker: "Ardbeg Distillery",
        fortress: "46%",
        prosentShugar: 3,
        prosentAcid: 18,
        prosentAroma: 90,
        prosentTaste: 95,
        productStyle: "Heavily peated with maritime influences.",
        tastingCharacteristics: "Intense smoke, seaweed, and lemon zest with a lingering spice.",
        gastronomicCombinations: "Pairs well with smoked salmon, blue cheese, and dark chocolate."
    }
});

const W8 = new Whiskey({
    name: "Redbreast 15",
    description: "Premium Irish pot still whiskey",
    price: 120,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Redbreast15.png",
    country: "Ireland",
    quantity: 140,
    fullDescription: {
        region: "County Cork",
        maker: "Midleton Distillery",
        fortress: "46%",
        prosentShugar: 10,
        prosentAcid: 9,
        prosentAroma: 80,
        prosentTaste: 90,
        productStyle: "Rich and full-bodied with sherry cask influence.",
        tastingCharacteristics: "Honey, nuts, and dried fruit with a velvety mouthfeel.",
        gastronomicCombinations: "Pairs well with dark chocolate, roasted almonds, and figs."
    }
});

const W9 = new Whiskey({
    name: "Johnnie Walker Blue Label",
    description: "Luxurious blended Scotch whisky",
    price: 250,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/JohnnieWalkerBlue.png",
    country: "Scotland",
    quantity: 130,
    discount: 20,
    fullDescription: {
        region: "Blended",
        maker: "Johnnie Walker",
        fortress: "40%",
        prosentShugar: 6,
        prosentAcid: 9,
        prosentAroma: 85,
        prosentTaste: 92,
        productStyle: "Exceptionally smooth blend of rare aged whiskies.",
        tastingCharacteristics: "Honeyed sweetness, dried fruit, and a whisper of smoke.",
        gastronomicCombinations: "Pairs well with dark chocolate, truffles, and fine cigars."
    }
});

const W10 = new Whiskey({
    name: "Bulleit Bourbon",
    description: "Bold and spicy Kentucky bourbon",
    price: 45,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/BulleitBourbon.png",
    country: "USA",
    quantity: 180,
    fullDescription: {
        region: "Kentucky",
        maker: "Bulleit Distilling Co.",
        fortress: "45%",
        prosentShugar: 7,
        prosentAcid: 12,
        prosentAroma: 78,
        prosentTaste: 88,
        productStyle: "High-rye bourbon with bold spice and smooth vanilla notes.",
        tastingCharacteristics: "Rich caramel, oak, and cinnamon with a lingering warmth.",
        gastronomicCombinations: "Pairs well with barbecue, pecan pie, and smoked meats."
    }
});

const W11 = new Whiskey({
    name: "Laphroaig 10",
    description: "Intensely smoky Islay single malt whisky",
    price: 75,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Laphroaig10.png",
    country: "Scotland",
    quantity: 150,
    fullDescription: {
        region: "Islay",
        maker: "Laphroaig Distillery",
        fortress: "40%",
        prosentShugar: 4,
        prosentAcid: 15,
        prosentAroma: 88,
        prosentTaste: 95,
        productStyle: "Strongly peated and medicinal with coastal influences.",
        tastingCharacteristics: "Seaweed, iodine, and vanilla with a long smoky finish.",
        gastronomicCombinations: "Pairs well with oysters, smoked salmon, and dark chocolate."
    }
});

const W12 = new Whiskey({
    name: "Nikka From the Barrel",
    description: "Powerful and complex Japanese whisky",
    price: 65,
    volume: 0.5,
    imageUrl: "/Products/Whiskey/NikkaBarrel.png",
    country: "Japan",
    quantity: 170,
    discount: 40,
    fullDescription: {
        region: "Honshu",
        maker: "Nikka Whisky Distilling",
        fortress: "51.4%",
        prosentShugar: 8,
        prosentAcid: 10,
        prosentAroma: 80,
        prosentTaste: 93,
        productStyle: "Robust, blended whisky with deep complexity.",
        tastingCharacteristics: "Spice, oak, and dried fruit with a rich mouthfeel.",
        gastronomicCombinations: "Pairs well with grilled steak, caramel desserts, and nuts."
    }
});

const W13 = new Whiskey({
    name: "Woodford Reserve",
    description: "Smooth and balanced Kentucky bourbon",
    price: 55,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/WoodfordReserve.png",
    country: "USA",
    quantity: 190,
    fullDescription: {
        region: "Kentucky",
        maker: "Woodford Reserve Distillery",
        fortress: "45.2%",
        prosentShugar: 7,
        prosentAcid: 11,
        prosentAroma: 76,
        prosentTaste: 89,
        productStyle: "Rich, full-bodied bourbon with deep caramel and oak notes.",
        tastingCharacteristics: "Vanilla, dried fruit, and roasted nuts with a smooth finish.",
        gastronomicCombinations: "Pairs well with grilled meats, toffee, and apple crumble."
    }
});

const W14 = new Whiskey({
    name: "Chivas Regal 18",
    description: "Premium blended Scotch whisky",
    price: 80,
    volume: 0.7,
    imageUrl: "/Products/Whiskey/Chivas18.png",
    country: "Scotland",
    quantity: 160,
    fullDescription: {
        region: "Blended",
        maker: "Chivas Brothers",
        fortress: "40%",
        prosentShugar: 6,
        prosentAcid: 9,
        prosentAroma: 84,
        prosentTaste: 90,
        productStyle: "Silky smooth blend with depth and richness.",
        tastingCharacteristics: "Dark chocolate, dried fruit, and a touch of spice.",
        gastronomicCombinations: "Pairs well with roasted nuts, creamy desserts, and aged cheese."
    }
});

export const WHISKEYS = [W1, W2, W3, W4, W5, W6, W7, W7, W8, W9, W10, W11, W12, W13, W14]