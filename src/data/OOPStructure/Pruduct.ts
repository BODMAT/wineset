export type KindOfProduct =
    "wine" | "champagne" | "whiskey" | "vodka" |
    "delicacies" | "glasses" | "candles" | "box" |
    "cheese" | "cookies" | "sauce";

export type ProductConfig = {
    id: string;
    name: string;
    price: number;
    imageUrl?: string;
    quantity?: number;
    description?: string | string[];
    discount?: number;
    volume?: number;  // For Alcohol
    weight?: number;  // For OtherProducts
    structure?: IProduct[];  // For Box
};

export interface IProduct {
    id: string;
    name: string;
    price: number;
    imageUrl?: string;
    quantity: number;
    readonly kindOfProduct: KindOfProduct;

    description?: string | string[];
    discount?: number;

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

    abstract readonly kindOfProduct: KindOfProduct;

    constructor({
        id,
        name,
        price,
        imageUrl = "/public/DataBase/no-img.jpg",
        quantity = Infinity,
        description,
        discount,
    }: ProductConfig) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._imageUrl = imageUrl;
        this._description = description;
        this._discount = discount;
    }

    // Getters
    get id(): string { return this._id; }
    get name(): string { return this._name; }
    get price(): number { return this._price; }
    get quantity(): number { return this._quantity; }
    get description(): string | string[] | undefined { return this._description; }
    get discount(): number | undefined { return this._discount; }
    get imageUrl(): string { return this._imageUrl; }

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

export class Delicacies extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "delicacies";
}

export class Glasses extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "glasses";
}

export class Candles extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "candles";
}

export class Cheese extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "cheese";
}

export class Cookies extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "cookies";
}

export class Sauce extends OtherProducts {
    readonly kindOfProduct: KindOfProduct = "sauce";
}

export class Box extends Product {
    protected _structure: IProduct[];
    readonly kindOfProduct: KindOfProduct = "box";
    constructor({
        structure,
        ...rest
    }: ProductConfig & { structure: IProduct[] }) {
        super(rest);
        this._structure = structure;
    }

    get structure(): IProduct[] { return this._structure; }

    addToCart(quantity?: number): void {
        console.log(`${quantity ? quantity : 1} ${this._name} - added to cart!`);
        this._structure.forEach(product => product.addToCart());
    }

    removeFromCart(quantity?: number): void {
        console.log(`${quantity ? quantity : 1} ${this._name} - removed from cart!`);
        this._structure.forEach(product => product.removeFromCart());
    }

    getDiscountedPrice(): number {
        const totalPrice = this._structure.reduce(
            (total, product) => total + product.getDiscountedPrice(),
            0
        );
        return this._discount ? totalPrice - (totalPrice * this._discount) / 100 : totalPrice;
    }

    getProductInfo(): string {
        const productsInfo = this._structure
            .map(product => `- ${product.name}: $${product.price.toFixed(2)}`)
            .join("\n");

        return `
            Name: ${this._name}
            Price: $${this._price.toFixed(2)}
            Quantity: ${this._quantity}
            Description: ${this._description ?? "No description available"}
            Discount: ${this._discount ? `${this._discount}%` : "No discount"}
            ImageUrl: ${this._imageUrl ?? "No image"}
            Products:
            ${productsInfo}
        `;
    }
}
