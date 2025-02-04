import { Box, Wine, Cheese, Sauce, Cookies } from "../OOPStructure/Pruduct";

const winePrimitivo = new Wine({
    id: "idFromDB1",
    name: "Primitivo wine",
    description: "Feudi di San Gregorio",
    price: 30,
    volume: 0.75,
})

const cheeseMontanariGruzza = new Cheese({
    id: "idFromDB2",
    name: "Montanari Gruzza",
    description: "16 months. excerpts",
    price: 25,
    weight: 250,
})

const sauceToCheese = new Sauce({
    id: "idFromDB3",
    name: "Chutney to the cheese",
    description: "Mrs Bridges",
    price: 5,
    weight: 300,
})

const waffleCookie = new Cookies({
    id: "idFromDB4",
    name: "Waffle Cookies",
    description: "Belgian Butters",
    price: 10,
    weight: 200,
})
//=
const boxSassicaia = new Box({
    id: "idFromDB5",
    name: "Gift set Sassicaia",
    imageUrl: "/HomePage/GiftBackets/Sassicaia.jpg",
    price: 70,
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxJuveCamps = new Box({
    id: "idFromDB6",
    name: "Gift set Juve Camps",
    imageUrl: "/HomePage/GiftBackets/Juve Camps.jpg",
    price: 70,
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxCesari = new Box({
    id: "idFromDB7",
    name: "Gift set Cesari",
    imageUrl: "/HomePage/GiftBackets/Cesari.jpg",
    price: 70,
    discount: 10,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta = new Box({
    id: "idFromDB8",
    name: "Gift set P.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    price: 70,
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta1 = new Box({
    id: "idFromDB9",
    name: "Gift set A.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    price: 70,
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta2 = new Box({
    id: "idFromDB10",
    name: "Gift set B.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    price: 70,
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta3 = new Box({
    id: "idFromDB11",
    name: "Gift set D.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    price: 70,
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})
const boxRestituta4 = new Box({
    id: "idFromDB12",
    name: "Gift set S.V. Restituta",
    imageUrl: "/HomePage/GiftBackets/Restituta.jpg",
    price: 70,
    discount: 20,
    structure: [winePrimitivo, cheeseMontanariGruzza, sauceToCheese, waffleCookie]
})

export const boxes = [boxSassicaia, boxJuveCamps, boxCesari, boxRestituta, boxRestituta1, boxRestituta2, boxRestituta3, boxRestituta4]