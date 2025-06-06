import { useCart } from "../store/cart";
import { fetchDetailedStructureOfBox } from "../api/product";
import { useWishlist } from "../store/wishlist";

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

export type ReviewConfig = {
    rating: number;

    id: string;
    text: string;
    createdAt: string;
    userId: string;
    userName: string;
    userPhotoURL: string;
}

//Partial makes all properties optional
export type StructureConfig = Partial<Record<KindOfProduct, string[]>>;

export type EuropeanCountries =
    | "Bulgaria"
    | "England"
    | "Finland"
    | "France"
    | "Greece"
    | "Ireland"
    | "Italy"
    | "Poland"
    | "Scotland"
    | "Spain"
    | "Sweden"
    | "Switzerland"
    | "Ukraine";
export type AsianCountries =
    | "Japan"
    | "Thailand";
export type OtherCountries =
    | "Australia"
    | "Canada"
    | "Madagascar"
    | "USA";
export type Countries = EuropeanCountries | AsianCountries | OtherCountries;

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

    fullReviews?: ReviewConfig[]; // For Page to show full reviews
};

export interface IProduct {
    id?: string;
    name: string;
    price: number;
    imageUrl?: string;
    quantity: number;

    country?: string;
    fullDescription?: FullDescriptionConfig;
    fullReviews?: ReviewConfig[];
    readonly kindOfProduct: KindOfProduct;

    weight?: number | undefined; // For OtherProducts and Box
    volume?: number | undefined; // For Alcohol and Glasses

    description?: string | string[];
    discount?: number; // Discount in percentage
    structure?: StructureConfig;

    addToCart(quantity?: number): void;
    removeFromCart(quantity?: number): void;

    addToWishList(): void;
    removeFromWishList(): void;

    getAsyncPrice(): Promise<number>;
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
    protected _fullReviews?: ReviewConfig[];

    protected _volume?: number; // For Alcohol and Glasses
    protected _weight?: number; // For OtherProducts and Box

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
        fullReviews
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
        this._fullReviews = fullReviews;
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
    get fullReviews(): ReviewConfig[] | undefined { return this._fullReviews; }

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

    addToWishList(): void {
        const wishlist = useWishlist.getState();
        wishlist.addToWishlist(this);
    }

    removeFromWishList(): void {
        const wishlist = useWishlist.getState();
        wishlist.removeFromWishlist(this);
    }

    //! Перевизначений поліморфізм (див Box) 
    async getAsyncPrice(): Promise<number> {
        // cause of Box, which price is calculated separately
        return this._price;
    }

    //! Параметризований поліморфізм
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

        this.getAsyncPrice();
    }

    // Getters
    get weight(): number | undefined { return this._weight }
    get structure(): StructureConfig { return this._structure }

    get price(): number { return this._price }

    //!
    async getAsyncPrice(): Promise<number> {
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
        const products: IProduct[] = await fetchDetailedStructureOfBox.call(this);
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

    //! Гібридний поліморфізм
    getWeightOrVolume(product: IProduct): string {
        if (product instanceof AlcoholDrink) {
            return `${product.volume}L`;
        } else if (product instanceof OtherProducts) {
            return product.weight ? `${product.weight}kg` : `${product.volume}l`;
        }
        return "not specified";
    }
}