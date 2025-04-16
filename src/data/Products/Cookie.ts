import { Cookie } from "../../architecture/Pruduct";

const C1 = new Cookie({
    name: "Chocolate Chip Cookie",
    description: "Classic soft cookie with rich chocolate chips",
    price: 13,
    discount: 20,
    weight: 0.35,
    imageUrl: "/Products/Cookie/ChocolateChip.png",
    country: "USA",
    quantity: 500,
    fullDescription: {
        region: "California",
        maker: "Nestlé",
        shugarType: "White sugar",
        prosentShugar: 30,
        prosentAcid: 5,
        prosentAroma: 60,
        prosentTaste: 85,
        productStyle: "Soft, chewy cookie with melted chocolate chips.",
        tastingCharacteristics: "Sweet, buttery, and chocolaty with a slight vanilla note.",
        gastronomicCombinations: "Pairs well with milk, coffee, and ice cream."
    }
});

const C2 = new Cookie({
    name: "Oatmeal Raisin Cookie",
    description: "Chewy cookie with oats and sweet raisins",
    price: 12,
    weight: 0.3,
    imageUrl: "/Products/Cookie/OatmealRaisin.png",
    country: "USA",
    quantity: 450,
    fullDescription: {
        region: "New York",
        maker: "Quaker",
        shugarType: "Brown sugar",
        prosentShugar: 25,
        prosentAcid: 6,
        prosentAroma: 50,
        prosentTaste: 70,
        productStyle: "Chewy cookie made with oats and raisins.",
        tastingCharacteristics: "Sweet, chewy with a nutty and fruity flavor.",
        gastronomicCombinations: "Pairs well with tea, milk, and yogurt."
    }
});

const C3 = new Cookie({
    name: "Peanut Butter Cookie",
    description: "Rich, nutty Cookie with a soft texture",
    price: 10,
    weight: 0.25,
    imageUrl: "/Products/Cookie/PeanutButter.png",
    country: "USA",
    quantity: 400,
    fullDescription: {
        region: "Georgia",
        maker: "Jif",
        shugarType: "White sugar",
        prosentShugar: 28,
        prosentAcid: 7,
        prosentAroma: 65,
        prosentTaste: 80,
        productStyle: "Soft and crumbly cookie with a rich peanut butter flavor.",
        tastingCharacteristics: "Nutty, sweet, and slightly salty with a creamy texture.",
        gastronomicCombinations: "Pairs well with milk, coffee, and chocolate."
    }
});

const C4 = new Cookie({
    name: "Sugar Cookie",
    description: "Simple, sweet cookie with a buttery flavor",
    price: 9,
    weight: 0.2,
    discount: 30,
    imageUrl: "/Products/Cookie/Sugar.png",
    country: "USA",
    quantity: 600,
    fullDescription: {
        region: "Midwest",
        maker: "Betty Crocker",
        shugarType: "Granulated sugar",
        prosentShugar: 40,
        prosentAcid: 4,
        prosentAroma: 45,
        prosentTaste: 60,
        productStyle: "Classic, soft sugar cookie with a smooth, buttery taste.",
        tastingCharacteristics: "Sweet, buttery, with a hint of vanilla.",
        gastronomicCombinations: "Pairs well with milk, coffee, and fresh fruit."
    }
});

const C5 = new Cookie({
    name: "Snickerdoodle Cookie",
    description: "Soft, cinnamon-sugar coated cookie",
    price: 11,
    weight: 0.25,
    imageUrl: "/Products/Cookie/Snickerdoodle.png",
    country: "USA",
    quantity: 500,
    fullDescription: {
        region: "New England",
        maker: "Nestlé",
        shugarType: "White sugar",
        prosentShugar: 32,
        prosentAcid: 4,
        prosentAroma: 55,
        prosentTaste: 75,
        productStyle: "Chewy cookie rolled in cinnamon sugar.",
        tastingCharacteristics: "Sweet and spicy with a cinnamon-sugar coating.",
        gastronomicCombinations: "Pairs well with hot chocolate, coffee, and ice cream."
    }
});

const C6 = new Cookie({
    name: "Double Chocolate Chip Cookie",
    description: "Rich chocolate cookie with chocolate chips",
    price: 14,
    weight: 0.3,
    imageUrl: "/Products/Cookie/DoubleChocolate.png",
    country: "USA",
    quantity: 350,
    fullDescription: {
        region: "California",
        maker: "Hershey",
        shugarType: "White sugar",
        prosentShugar: 35,
        prosentAcid: 6,
        prosentAroma: 70,
        prosentTaste: 90,
        productStyle: "Chocolate cookie filled with chocolate chips.",
        tastingCharacteristics: "Rich, chocolaty, and slightly sweet with a smooth texture.",
        gastronomicCombinations: "Pairs well with milk, coffee, and vanilla ice cream."
    }
});

const C7 = new Cookie({
    name: "Macadamia Nut Cookie",
    description: "Crunchy cookie with macadamia nuts and white chocolate chips",
    price: 15,
    discount: 10,
    weight: 0.35,
    imageUrl: "/Products/Cookie/Macadamia.png",
    country: "Australia",
    quantity: 300,
    fullDescription: {
        region: "Queensland",
        maker: "Lenny & Larry's",
        shugarType: "Brown sugar",
        prosentShugar: 30,
        prosentAcid: 5,
        prosentAroma: 60,
        prosentTaste: 85,
        productStyle: "Crispy Cookie filled with macadamia nuts and white chocolate chips.",
        tastingCharacteristics: "Crunchy, nutty with a creamy and slightly sweet flavor.",
        gastronomicCombinations: "Pairs well with coffee, milk, and tropical fruits."
    }
});

const C8 = new Cookie({
    name: "White Chocolate Raspberry Cookie",
    description: "Sweet Cookie with white chocolate and raspberry pieces",
    price: 13,
    weight: 0.3,
    imageUrl: "/Products/Cookie/WhiteChocolateRaspberry.png",
    country: "USA",
    quantity: 400,
    fullDescription: {
        region: "Oregon",
        maker: "Toll House",
        shugarType: "White sugar",
        prosentShugar: 33,
        prosentAcid: 8,
        prosentAroma: 50,
        prosentTaste: 80,
        productStyle: "Chewy cookie with sweet white chocolate and tangy raspberry.",
        tastingCharacteristics: "Sweet and tart with smooth, creamy chocolate.",
        gastronomicCombinations: "Pairs well with tea, ice cream, and yogurt."
    }
});

const C9 = new Cookie({
    name: "Lemon Cookie",
    description: "Zesty Cookie with a tangy lemon flavor",
    price: 10,
    discount: 10,
    weight: 0.2,
    imageUrl: "/Products/Cookie/Lemon.png",
    country: "USA",
    quantity: 550,
    fullDescription: {
        region: "Florida",
        maker: "Keebler",
        shugarType: "White sugar",
        prosentShugar: 25,
        prosentAcid: 10,
        prosentAroma: 65,
        prosentTaste: 75,
        productStyle: "Crispy, tangy cookie with a refreshing lemon flavor.",
        tastingCharacteristics: "Tart, zesty with a crisp texture.",
        gastronomicCombinations: "Pairs well with iced tea, fruit salad, and cream cheese."
    }
});

export const COOKIES = [C1, C2, C3, C4, C5, C6, C7, C8, C9]