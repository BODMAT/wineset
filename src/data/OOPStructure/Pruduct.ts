import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export type KindOfProduct =
    "wine" | "champagne" | "whiskey" | "vodka" |
    "delicacy" | "glass" | "candle" | "box" |
    "cheese" | "cookie" | "sauce";

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

export type StructureConfig = Partial<Record<KindOfProduct, string[]>>;


export type ProductConfig = {
    id?: string;
    name: string;
    price: number;
    imageUrl?: string;
    kindOfProduct?: KindOfProduct;
    quantity?: number;
    discount?: number;
    country?: string;
    description?: string | string[];
    volume?: number;  // For Alcohol and Glasses
    weight?: number;  // For OtherProducts and Box
    structure?: StructureConfig;  // For Box (id-s)
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
    discount?: number;
    structure?: StructureConfig;

    addToCart(quantity?: number): void;
    removeFromCart(quantity?: number): void;

    getDiscountedPrice(): number;
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
    get description(): string | string[] | undefined { return this._description; }
    get discount(): number | undefined { return this._discount; }
    get imageUrl(): string { return this._imageUrl; }
    get country(): string | undefined { return this._country; }
    get fullDescription(): FullDescriptionConfig | undefined { return this._fullDescription; }

    //Methods
    addToCart(quantity?: number): void {
        console.log(`${quantity ?? 1} ${this._name} added to cart.`);
    }

    removeFromCart(quantity?: number): void {
        console.log(`${quantity ?? 1} ${this._name} removed from cart.`);
    }

    getDiscountedPrice(): number {
        const discountedPrice = this._discount
            ? this._price - (this._price * this._discount) / 100
            : this._price;
        return parseFloat(discountedPrice.toFixed(2));
    }
}

abstract class AlcoholDrink extends Product {
    protected _volume: number;
    abstract readonly kindOfProduct: KindOfProduct;
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
    readonly kindOfProduct: KindOfProduct = "wine";
}

export class Champagne extends AlcoholDrink {
    readonly kindOfProduct: KindOfProduct = "champagne";
}

export class Whiskey extends AlcoholDrink {
    readonly kindOfProduct: KindOfProduct = "whiskey";
}

export class Vodka extends AlcoholDrink {
    readonly kindOfProduct: KindOfProduct = "vodka";
}

abstract class OtherProducts extends Product {
    protected _weight?: number;
    protected _volume?: number;
    abstract readonly kindOfProduct: KindOfProduct;

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
    readonly kindOfProduct: KindOfProduct = "delicacy";
}

export class Glass extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "glass";
}

export class Candle extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "candle";
}

export class Cheese extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "cheese";
}

export class Cookie extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "cookie";
}

export class Sauce extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "sauce";
}

export class Box extends Product {
    protected _structure: StructureConfig;
    protected _weight?: number;
    readonly kindOfProduct: KindOfProduct = "box";

    constructor({
        structure,
        weight,
        discount,
        ...rest
    }: Omit<ProductConfig, "price"> & { structure: StructureConfig }) {
        super({ ...rest, price: 0, discount }); // Price will be calculated separately as the sum of prices of products
        this._structure = structure;
        this._weight = weight;
    }
    get weight(): number | undefined { return this._weight }
    get structure(): StructureConfig { return this._structure }

    // Method to obtain the total value of goods in a box
    async fetchTotalPrice(): Promise<number> {
        const products = await this.fetchDetailedStructure();
        return products.reduce((total, product) => total + product.getDiscountedPrice(), 0);
    }

    // Synchronous field (plug) to match the basic class
    getDiscountedPrice(): number {
        console.warn("Use fetchDiscountedPrice() instead of getDiscountedPrice() for async behavior.");
        return 0; // Clogged, as the real price is calculated asynchronously
    }

    // Asynchronous method to get the discount price
    async fetchDiscountedPrice(): Promise<number> {
        const totalPrice = await this.fetchTotalPrice();
        return this._discount ? totalPrice - (totalPrice * this._discount) / 100 : totalPrice;
    }

    // Method to get full information about the goods in the box
    async fetchDetailedStructure(): Promise<IProduct[]> {
        const products: IProduct[] = [];

        for (const [kind, ids] of Object.entries(this._structure) as unknown as [KindOfProduct, string[]][]) {
            const kindUpper = kind.charAt(0).toUpperCase() + kind.slice(1)
            const fetchedProducts = await Promise.all(ids.map(id => fetchProductById(kindUpper, id)));
            products.push(...fetchedProducts.filter((product): product is IProduct => product !== null));
        }
        return products;
    }


    getWeightOrVolume(product: IProduct): string {
        if (product instanceof AlcoholDrink) {
            return `${product.volume}L`;
        } else if (product instanceof OtherProducts) {
            return product.weight ? `${product.weight}kg` : `${product.volume}l`;
        }
        return "not specified";
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


}

//! to create an instance of a product when I make a request with DB

export const productClassesMap: Record<KindOfProduct, new (data: any) => IProduct> = {
    wine: Wine,
    champagne: Champagne,
    whiskey: Whiskey,
    vodka: Vodka,
    delicacy: Delicacy,
    glass: Glass,
    candle: Candle,
    cheese: Cheese,
    cookie: Cookie,
    sauce: Sauce,
    box: Box,
};

export function createProductInstance(data: any): new (...args: any[]) => IProduct {
    const { kindOfProduct } = data as { kindOfProduct: KindOfProduct };

    const ProductClass = productClassesMap[kindOfProduct];

    if (!ProductClass) {
        throw new Error(`Unsupported product type: ${kindOfProduct}`);
    }
    return ProductClass;
}

export const fetchProductsByNameClass = async (filter: string): Promise<any[]> => {
    const productsList: any[] = [];

    try {
        const querySnapshot = await getDocs(collection(db, "Products", filter, "items"));

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            try {
                const ProductClass = createProductInstance(data);
                const productInstance = new ProductClass(data)
                if (productInstance.discount !== undefined && productInstance.discount > 0) {
                    productsList.push(productInstance);
                }
            } catch (error) {
                console.error("Error creating product instance");
            }
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }

    return productsList;
};

export const fetchProductById = async (productClass: string, productId: string): Promise<any | null> => {
    try {
        const productsRef = collection(db, "Products", productClass, "items");
        const q = query(productsRef, where("id", "==", productId));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0];
            const data = doc.data();
            try {
                const ProductClass = createProductInstance(data);
                const productInstance = new ProductClass(data)
                return productInstance;
            } catch (error) {
                console.error("Error creating product instance:", error);
                return null;
            }
        }
    } catch (error) {
        console.error("Error fetching product by ID:", error);
    }

    return null;
};