import { Wine } from "../../architecture/Pruduct";

const W1 = new Wine({
    name: "Brunello di Montalcino Red Wine",
    description: "Feudi di San Gregorio",
    price: 60,
    volume: 0.75,
    imageUrl: "/Products/Wine/Brunello.png",
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

const W8 = new Wine({
    name: "Emerald Valley Red Blend",
    description: "A unique Irish red blend with a smooth and fruity profile.",
    price: 50,
    volume: 0.75,
    imageUrl: "/Products/Wine/Emerald.png",
    country: "Ireland",
    quantity: 300,
    fullDescription: {
        region: "County Cork",
        shugarType: "semi-dry",
        maker: "Wild Atlantic Cellars",
        grape: "Pinot Noir, Merlot",
        fortress: "13%",
        prosentShugar: 22,
        prosentAcid: 36,
        prosentAroma: 60,
        prosentTaste: 75,
        productStyle: "Soft and fruit-driven with a hint of Irish oak aging.",
        tastingCharacteristics: "Red berries, vanilla, and spice with a velvety finish.",
        gastronomicCombinations: "Pairs well with roast beef, cheddar cheese, and stews."
    }
})

const W9 = new Wine({
    name: "Cliffs of Moher White",
    description: "A crisp and refreshing white wine inspired by Ireland’s rugged coastline.",
    price: 40,
    volume: 0.75,
    imageUrl: "/Products/Wine/Cliffs.png",
    country: "Ireland",
    quantity: 250,
    fullDescription: {
        region: "County Clare",
        shugarType: "dry",
        maker: "Burren Vineyards",
        grape: "Sauvignon Blanc",
        fortress: "12.5%",
        prosentShugar: 18,
        prosentAcid: 42,
        prosentAroma: 55,
        prosentTaste: 70,
        productStyle: "Crisp and mineral-driven with citrus undertones.",
        tastingCharacteristics: "Lemon zest, green apple, and flinty minerality.",
        gastronomicCombinations: "Perfect with seafood, goat cheese, and salads."
    }
})


const W10 = new Wine({
    name: "Napa Valley Cabernet Reserve",
    description: "A bold and structured Cabernet Sauvignon from California’s finest vineyards.",
    price: 85,
    volume: 0.75,
    discount: 20,
    imageUrl: "/Products/Wine/Napa.png",
    country: "USA",
    quantity: 350,
    fullDescription: {
        region: "Napa Valley",
        shugarType: "dry",
        maker: "Silver Oak Cellars",
        grape: "Cabernet Sauvignon",
        fortress: "14.8%",
        prosentShugar: 14,
        prosentAcid: 38,
        prosentAroma: 75,
        prosentTaste: 88,
        productStyle: "Rich and full-bodied with deep berry and oak flavors.",
        tastingCharacteristics: "Blackcurrant, vanilla, and cedar with firm tannins.",
        gastronomicCombinations: "Perfect for ribeye steak, truffle dishes, and aged cheeses."
    }
})

const W11 = new Wine({
    name: "Sonoma Chardonnay Reserve",
    description: "A creamy and balanced Chardonnay from Sonoma County.",
    price: 55,
    volume: 0.75,
    imageUrl: "/Products/Wine/Sonoma.png",
    country: "USA",
    quantity: 280,
    fullDescription: {
        region: "Sonoma County",
        shugarType: "semi-dry",
        maker: "Kendall-Jackson",
        grape: "Chardonnay",
        fortress: "13.5%",
        prosentShugar: 20,
        prosentAcid: 32,
        prosentAroma: 65,
        prosentTaste: 80,
        productStyle: "Rich and creamy with balanced acidity and oak notes.",
        tastingCharacteristics: "Butter, citrus, and vanilla with a long finish.",
        gastronomicCombinations: "Perfect with grilled salmon, creamy pasta, and soft cheeses."
    }
})

const W12 = new Wine({
    name: "Arctic Cloudberry Wine",
    description: "A rare and exotic dessert wine made from wild Finnish cloudberries.",
    price: 75,
    volume: 0.75,
    discount: 20,
    imageUrl: "/Products/Wine/Cloudberry.png",
    country: "Finland",
    quantity: 180,
    fullDescription: {
        region: "Lapland",
        shugarType: "sweet",
        maker: "Lapponia Winery",
        grape: "Cloudberry",
        fortress: "12%",
        prosentShugar: 45,
        prosentAcid: 28,
        prosentAroma: 85,
        prosentTaste: 88,
        productStyle: "Lush and golden with intense wild berry notes.",
        tastingCharacteristics: "Honey, apricot, and tart cloudberry with a smooth texture.",
        gastronomicCombinations: "Perfect with white chocolate, soft cheeses, and fruit desserts."
    }
})

const W13 = new Wine({
    name: "Shabo Grand Reserve Cabernet",
    description: "An exquisite aged red wine with a rich and complex profile.",
    price: 65,
    volume: 0.75,
    imageUrl: "/Products/Wine/ShaboCabernet.png",
    country: "Ukraine",
    quantity: 350,
    fullDescription: {
        region: "Odesa Region",
        shugarType: "dry",
        maker: "Shabo Winery",
        grape: "Cabernet Sauvignon",
        fortress: "14%",
        prosentShugar: 12,
        prosentAcid: 40,
        prosentAroma: 75,
        prosentTaste: 85,
        productStyle: "Elegant and powerful with deep fruit and oak notes.",
        tastingCharacteristics: "Black cherry, dark chocolate, and subtle tobacco with silky tannins.",
        gastronomicCombinations: "Pairs beautifully with grilled lamb, aged cheese, and mushroom dishes."
    }
})

const W14 = new Wine({
    name: "Chizay Furmint Vintage",
    description: "A premium vintage white wine made from the legendary Furmint grape.",
    price: 70,
    volume: 0.75,
    discount: 30,
    imageUrl: "/Products/Wine/ChizayFurmint.png",
    country: "England",
    quantity: 200,
    fullDescription: {
        region: "London",
        shugarType: "dry",
        maker: "Chateau Chizay",
        grape: "Furmint",
        fortress: "13%",
        prosentShugar: 18,
        prosentAcid: 38,
        prosentAroma: 75,
        prosentTaste: 82,
        productStyle: "Elegant and mineral-driven with a refined complexity.",
        tastingCharacteristics: "Green apple, honey, and flinty minerality with a long finish.",
        gastronomicCombinations: "Best enjoyed with grilled fish, creamy risotto, and charcuterie boards."
    }
})


export const WINES = [W1, W2, W3, W4, W5, W6, W7, W8, W9, W10, W11, W12, W13, W14];