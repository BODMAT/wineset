import { Glasses } from "../OOPStructure/Pruduct";

const CandleExample = new Glasses({
    id: "idFromDB",
    name: "RIEDEL EXTREME RIESLING Wine glasses",
    price: 10,
    volume: 0.2,
    discount: 30,
    description: ["Glass for white wine", "Riesling, Sauvignon Blanc +"],
    imageUrl: "/Products/Glasses/RIEDELEXTREMERIESLING.png"
})

export const CandlesExample = [CandleExample, CandleExample, CandleExample, CandleExample, CandleExample, CandleExample, CandleExample, CandleExample, CandleExample, CandleExample,];