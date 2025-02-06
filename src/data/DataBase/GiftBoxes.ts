import { Box, Wine, Cheese, Sauce, Cookies } from "../OOPStructure/Pruduct";

const winePrimitivo = new Wine({
    name: "Primitivo wine",
    description: "Feudi di San Gregorio",
    price: 30,
    volume: 0.75,
})

const cheeseMontanariGruzza = new Cheese({
    name: "Montanari Gruzza",
    description: "16 months. excerpts",
    price: 25,
    weight: 250,
})

const sauceToCheese = new Sauce({
    name: "Chutney to the cheese",
    description: "Mrs Bridges",
    price: 5,
    weight: 300,
})

const waffleCookie = new Cookies({
    name: "Waffle Cookies",
    description: "Belgian Butters",
    price: 10,
    weight: 200,
})
//=
const boxSassicaia = new Box({
    name: "Gift set Sassicaia",
    imageUrl: "/HomePage/GiftBackets/Sassicaia.jpg",
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxJuveCamps = new Box({
    name: "Gift set Juve Camps",
    imageUrl: "/HomePage/GiftBackets/Juve Camps.jpg",
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxCesari = new Box({
    name: "Gift set Cesari",
    imageUrl: "/HomePage/GiftBackets/Cesari.jpg",
    discount: 10,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta = new Box({
    name: "Gift set P.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta1 = new Box({
    name: "Gift set A.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta2 = new Box({
    name: "Gift set B.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta3 = new Box({
    name: "Gift set D.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta4 = new Box({
    name: "Gift set S.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})

export const boxes = [boxSassicaia, boxJuveCamps, boxCesari, boxRestituta, boxRestituta1, boxRestituta2, boxRestituta3, boxRestituta4]