import { Wine } from "../../OOPStructure/Pruduct";

const W1 = new Wine({
    name: "Primitivo wine",
    description: "Feudi di San Gregorio",
    price: 30,
    volume: 0.75,
    imageUrl: "/Products/Wine/Primitivo.png",
    country: "Italy",
    quantity: 999,
    fullDescription: {
        region: "Puglia",
        shugarType: "dry",
        maker: "Rivera",
        grape: "Primitivo",
        fortress: "14%",
        prosentShugar: 20,
        prosentAcid: 35,
        prosentAroma: 50,
        prosentTaste: 80,
        productStyle: "A robust and full-bodied wine with rich dark fruit flavors and hints of spice.",
        tastingCharacteristics: "Notes of blackberry, plum, and pepper with a smooth tannic finish.",
        gastronomicCombinations: "Pairs well with grilled meats, aged cheeses, and tomato-based pasta dishes."
    }
})

const W2 = new Wine({
    name: "Tenuta Argentiera Bolgheri Superiore",
    description: "A prestigious red wine from the Bolgheri region of Tuscany.",
    price: 55,
    volume: 0.75,
    imageUrl: "/Products/Wine/Bolgheri.png",
    country: "Italy",
    quantity: 500,
    fullDescription: {
        region: "Tuscany",
        shugarType: "dry",
        maker: "Tenuta Argentiera",
        grape: "Cabernet Sauvignon, Merlot, Cabernet Franc",
        fortress: "14.5%",
        prosentShugar: 15,
        prosentAcid: 40,
        prosentAroma: 65,
        prosentTaste: 85,
        productStyle: "A rich and elegant blend showcasing intense red fruit and spice notes.",
        tastingCharacteristics: "Deep ruby color, aromas of blackcurrant, cedar, and tobacco with a silky finish.",
        gastronomicCombinations: "Ideal with roasted lamb, beef steak, and truffle-infused dishes."
    }
})

const W3 = new Wine({
    name: "Coteau de Chery Condrieu",
    description: "A fine white wine from the Condrieu appellation in France.",
    price: 45,
    volume: 0.75,
    imageUrl: "/Products/Wine/Coteaude.png",
    country: "France",
    quantity: 300,
    fullDescription: {
        region: "Condrieu",
        shugarType: "semi-dry",
        maker: "Domaine Georges Vernay",
        grape: "Viognier",
        fortress: "13%",
        prosentShugar: 25,
        prosentAcid: 30,
        prosentAroma: 70,
        prosentTaste: 75,
        productStyle: "Aromatic and floral with a luscious texture and vibrant minerality.",
        tastingCharacteristics: "Hints of apricot, honeysuckle, and citrus with a creamy mouthfeel.",
        gastronomicCombinations: "Perfect with grilled seafood, poultry in creamy sauces, and goat cheese."
    }
})

const W4 = new Wine({
    name: "Coteau de Chery Reserve",
    description: "A limited-edition vintage from the Coteau de Chery vineyard.",
    price: 60,
    volume: 0.75,
    imageUrl: "/Products/Wine/Coteau2.png",
    country: "France",
    quantity: 200,
    fullDescription: {
        region: "Condrieu",
        shugarType: "dry",
        maker: "Domaine Perret",
        grape: "Viognier",
        fortress: "13.5%",
        prosentShugar: 18,
        prosentAcid: 35,
        prosentAroma: 80,
        prosentTaste: 85,
        productStyle: "Elegant and expressive with deep floral and stone fruit notes.",
        tastingCharacteristics: "Peach, pear, and almond undertones with a delicate finish.",
        gastronomicCombinations: "Pairs well with shellfish, creamy pasta dishes, and light desserts."
    }
})

const W5 = new Wine({
    name: "Pie Franco Primitivo",
    description: "A rare and authentic expression of Primitivo grapes.",
    price: 70,
    volume: 0.75,
    imageUrl: "/Products/Wine/Pie.png",
    country: "Italy",
    quantity: 150,
    fullDescription: {
        region: "Puglia",
        shugarType: "dry",
        maker: "Gianfranco Fino",
        grape: "Primitivo",
        fortress: "15%",
        prosentShugar: 22,
        prosentAcid: 40,
        prosentAroma: 78,
        prosentTaste: 90,
        productStyle: "Rich and opulent with deep black fruit and licorice notes.",
        tastingCharacteristics: "Ripe cherry, dark chocolate, and vanilla with a long finish.",
        gastronomicCombinations: "Best served with braised meats, wild game, and hard cheeses."
    }
})

const W6 = new Wine({
    name: "Collection Bio Syrah",
    description: "An organic Syrah wine with a bold and spicy profile.",
    price: 35,
    volume: 0.75,
    discount: 20,
    imageUrl: "/Products/Wine/CollectionBio.png",
    country: "France",
    quantity: 400,
    fullDescription: {
        region: "Rhône Valley",
        shugarType: "dry",
        maker: "Château Maris",
        grape: "Syrah",
        fortress: "13.5%",
        prosentShugar: 20,
        prosentAcid: 38,
        prosentAroma: 65,
        prosentTaste: 80,
        productStyle: "Smooth and velvety with a vibrant spicy complexity.",
        tastingCharacteristics: "Black pepper, plum, and earthy undertones with balanced tannins.",
        gastronomicCombinations: "Complements barbecue dishes, roasted vegetables, and lamb chops."
    }
})

const W7 = new Wine({
    name: "Tenuta Tignanello Super Tuscan",
    description: "A prestigious Super Tuscan blend with remarkable depth and complexity.",
    price: 90,
    volume: 0.75,
    imageUrl: "/Products/Wine/Tenuta.png",
    country: "Italy",
    quantity: 250,
    fullDescription: {
        region: "Tuscany",
        shugarType: "dry",
        maker: "Marchesi Antinori",
        grape: "Sangiovese, Cabernet Sauvignon, Cabernet Franc",
        fortress: "14.5%",
        prosentShugar: 16,
        prosentAcid: 42,
        prosentAroma: 70,
        prosentTaste: 90,
        productStyle: "Structured and powerful with a perfect balance of fruit and oak.",
        tastingCharacteristics: "Red cherry, tobacco, leather, and cocoa with a lingering finish.",
        gastronomicCombinations: "Ideal with grilled steaks, aged cheeses, and mushroom risotto."
    }
})

export const WINES = [W1, W2, W3, W4, W5, W6, W7];