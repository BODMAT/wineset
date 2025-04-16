import { useCart } from "../store/cart";
import { fetchProductById } from "../api/firebaseAPI";

export type KindOfAlco = "wine" | "champagne" | "whiskey" | "vodka";
export type KindOfOthers = "delicacy" | "glass" | "candle" | "box" | "cheese" | "cookie" | "sauce";
export type KindOfProduct = KindOfAlco | KindOfOthers;
export type FullDescriptionConfig = {
    region?: string;
    shugarType?: string;
    grape?: string;
    maker?: string;
    fortress?: string;

    prosentShugar?: number;
    prosentAcid?: number;
    prosentAroma?: number;
    prosentTaste?: number;

    productStyle?: string;
    tastingCharacteristics?: string;
    gastronomicCombinations?: string;
}
//Partial makes all properties optional
export type StructureConfig = Partial<Record<KindOfProduct, string[]>>;
export type Countries =
    | "Australia"
    | "Bulgaria"
    | "Canada"
    | "England"
    | "Finland"
    | "France"
    | "Greece"
    | "Ireland"
    | "Italy"
    | "Japan"
    | "Madagascar"
    | "Poland"
    | "Scotland"
    | "Spain"
    | "Sweden"
    | "Switzerland"
    | "Thailand"
    | "Ukraine"
    | "USA";
export type ProductConfig = {
    id?: string;
    name: string;
    price: number;
    imageUrl?: string;
    kindOfProduct?: KindOfProduct;
    quantity?: number;
    discount?: number; // Discount in percentage
    country?: Countries;
    description?: string | string[];
    volume?: number;  // For Alcohol and Glasses
    weight?: number;  // For OtherProducts and Box
    structure?: StructureConfig;  // For Box (KindOfProduct: [id-s])
    fullDescription?: FullDescriptionConfig; //For Page to show full description
};

export interface IProduct {
    id?: string;
    name: string;
    price: number;
    imageUrl?: string;
    quantity: number;

    country?: string;
    fullDescription?: FullDescriptionConfig;
    readonly kindOfProduct: KindOfProduct;

    description?: string | string[];
    discount?: number; // Discount in percentage
    structure?: StructureConfig;

    addToCart(quantity?: number): void;
    removeFromCart(quantity?: number): void;
    getPrice(): Promise<number>;
    getDiscountedPrice(): number;

    fetchDetailedStructure?(): Promise<IProduct[]>; // For Box
    fetchProductInfo?(): Promise<any>; // For Box

    getWeightOrVolume?(product: IProduct): string; // For Box
    getWeight?(): number | undefined; // For OtherProducts and Box
    getVolume?(): number | undefined; // For Alcohol and Glasses
}

export interface IProductWithCartQuantity extends IProduct {
    cartQuantity?: number;

}

abstract class Product implements IProduct {
    protected _id: string;
    protected _name: string;
    protected _price: number;
    protected _quantity: number;
    protected _imageUrl: string;
    protected _description?: string | string[];
    protected _discount?: number;
    protected _country?: string;
    protected _fullDescription?: FullDescriptionConfig;

    abstract readonly kindOfProduct: KindOfProduct;

    constructor({
        id,
        name,
        price,
        imageUrl = "/Products/no-img.jpg",
        quantity = Infinity,
        description,
        discount,
        country,
        fullDescription,
    }: ProductConfig) {
        this._id = id ?? `${name.toLowerCase().trim().replace(/\s+/g, '-')}`;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._imageUrl = imageUrl;
        this._description = description;
        this._discount = discount;
        this._country = country;
        this._fullDescription = fullDescription;
    }

    // Getters
    get id(): string { return this._id; }
    get name(): string { return this._name; }
    get price(): number { return this._price; }
    get quantity(): number { return this._quantity; }
    set quantity(value: number) {
        if (value >= 0) {
            this._quantity = value;
        }
    }
    get description(): string | string[] | undefined { return this._description; }
    get discount(): number | undefined { return this._discount; }
    get imageUrl(): string { return this._imageUrl; }
    get country(): string | undefined { return this._country; }
    get fullDescription(): FullDescriptionConfig | undefined { return this._fullDescription; }

    //Methods
    addToCart(quantity: number = 1): void {
        if (quantity <= this.quantity && quantity > 0) {
            const cart = useCart.getState();
            cart.addToCart(this, quantity);
        }
    }

    removeFromCart(quantity: number = 1): void {
        if (quantity <= this.quantity && quantity > 0) {
            const cart = useCart.getState();
            cart.removeFromCart(this, quantity);
        }
    }

    async getPrice(): Promise<number> {
        return this._price;
    }

    //Polimorphic method 1
    getDiscountedPrice(): number {
        return this._discount
            ? this._price - (this._price * this._discount) / 100
            : this._price;
    }
}

abstract class AlcoholDrink extends Product {
    protected _volume: number;
    abstract readonly kindOfProduct: KindOfAlco;
    constructor({
        volume,
        ...rest
    }: ProductConfig & { volume: number }) {
        super(rest);
        this._volume = volume;
    }

    get volume(): number { return this._volume; }
}

export class Wine extends AlcoholDrink {
    readonly kindOfProduct: KindOfAlco = "wine";
}

export class Champagne extends AlcoholDrink {
    readonly kindOfProduct: KindOfAlco = "champagne";
}

export class Whiskey extends AlcoholDrink {
    readonly kindOfProduct: KindOfAlco = "whiskey";
}

export class Vodka extends AlcoholDrink {
    readonly kindOfProduct: KindOfAlco = "vodka";
}

abstract class OtherProducts extends Product {
    protected _weight?: number;
    protected _volume?: number;
    abstract readonly kindOfProduct: KindOfOthers;

    constructor({
        weight,
        volume,
        ...rest
    }: ProductConfig & ({ weight: number; volume?: never } | { weight?: never; volume: number })) {
        // weight and volume are exclusive
        super(rest);
        this._weight = weight;
        this._volume = volume;
    }

    get weight(): number | undefined { return this._weight; }
    get volume(): number | undefined { return this._volume; }
}

export class Delicacy extends OtherProducts {
    readonly kindOfProduct: KindOfOthers = "delicacy";
}

export class Glass extends OtherProducts {
    readonly kindOfProduct: KindOfOthers = "glass";
}

export class Candle extends OtherProducts {
    readonly kindOfProduct: KindOfOthers = "candle";
}

export class Cheese extends OtherProducts {
    readonly kindOfProduct: KindOfOthers = "cheese";
}

export class Cookie extends OtherProducts {
    readonly kindOfProduct: KindOfOthers = "cookie";
}

export class Sauce extends OtherProducts {
    readonly kindOfProduct: KindOfOthers = "sauce";
}

export class Box extends Product {
    protected _structure: StructureConfig;
    protected _weight?: number;
    readonly kindOfProduct: KindOfProduct = "box";

    constructor({
        structure,
        weight,
        ...rest
    }: Omit<ProductConfig, "price"> & { structure: StructureConfig }) {
        super({ ...rest, price: 0 }); // Price will be calculated separately as the sum of prices of products and price - 0, its just a plug
        this._structure = structure;
        this._weight = weight;

        this.getPrice();
    }

    // Getters
    get weight(): number | undefined { return this._weight }
    get structure(): StructureConfig { return this._structure }
    get price(): number { return this._price }

    //Polimorphic method 2
    async getPrice(): Promise<number> {
        if (this._price !== 0) {
            return this._price; //cached
        } else {
            const products = await this.fetchDetailedStructure();
            const totalPrice = (await Promise.all(products.map(p => p.price))).reduce((total, price) => total + price, 0);
            this._price = totalPrice;
            return totalPrice;
        }
    }

    //Methods
    async fetchDetailedStructure(): Promise<IProduct[]> {
        const products: IProduct[] = [];

        for (const [kind, ids] of Object.entries(this._structure) as [KindOfProduct, string[]][]) {
            try {
                const kindUpper = kind.charAt(0).toUpperCase() + kind.slice(1);
                const fetchedProducts = await Promise.all(ids.map(id => fetchProductById(kindUpper, id)));
                products.push(...fetchedProducts.filter((product): product is IProduct => product !== null));
            } catch (error) {
                console.error("Error fetching detailed structure:", error);
            }
        }

        return products;
    }

    async fetchProductInfo(): Promise<any> {
        const products = await this.fetchDetailedStructure();
        const productsInfo = await Promise.all(
            products.map(async (product) => {
                const productInfo = {
                    name: product.name,
                    description: product.description ?? "no description available",
                    maker: product.fullDescription?.maker ?? "unknown maker",
                    weightOrVolume: this.getWeightOrVolume(product),
                };
                return productInfo;
            })
        );

        return {
            nameInfo: this.name,
            structureInfo: productsInfo,
        };
    }

    getWeightOrVolume(product: IProduct): string {
        if (product instanceof AlcoholDrink) {
            return `${product.volume}L`;
        } else if (product instanceof OtherProducts) {
            return product.weight ? `${product.weight}kg` : `${product.volume}l`;
        }
        return "not specified";
    }
}

//! for reuseble components
export const dataWPostfixes = {
    "glass": "glasses",
    "delicacy": "delicacies",
    "wine": "wine sets",
    "candle": "candles",
    "champagne": "champagnes",
    "whiskey": "whiskeys",
    "vodka": "vodkas",
    "cheese": "cheeses",
    "cookie": "cookies",
    "sauce": "sauces",
    "box": "gift boxes"
};

export const alcoTypes: KindOfProduct[] = ["wine", "champagne", "whiskey", "vodka", "glass"];
export const othersTypes: KindOfProduct[] = ["delicacy", "candle", "box", "cheese", "cookie", "sauce"];

export const countries: Countries[] = [
    "Australia", "Bulgaria", "Canada", "England", "Finland", "France", "Greece", "Ireland", "Italy", "Japan", "Madagascar", "Poland", "Scotland", "Spain", "Sweden", "Switzerland", "Thailand", "Ukraine", "USA",
];

export const discountOptions = [
    { value: "All prices", label: "All prices" },
    { value: "With discount", label: "With discount" },
    { value: "Without discount", label: "Without discount" },
];

export const countryOptions = [
    { value: "All countries", label: "All countries" },
    ...countries.map((country) => ({ value: country, label: country })),
];