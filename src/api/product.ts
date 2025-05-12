import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Box, Candle, Champagne, Cheese, Cookie, Delicacy, Glass, IProduct, IProductWithCartQuantity, KindOfProduct, Sauce, Vodka, Whiskey, Wine } from "../architecture/Pruduct";
import { capitalizeFirstLetter } from "../utils/utils";

// to create an instance of a product when I make a request with DB and others
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
                productsList.push(productInstance);
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

export const fetchDetailedStructureOfBox = async function (this: Box): Promise<IProduct[]> {
    //! use with call/apply to set the context of this function to the Box instance
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
};

export const updateProductQuantities = async (products: IProductWithCartQuantity[]): Promise<void> => {
    const updates = products.map(async (product) => {
        const { id, cartQuantity = 0, quantity, kindOfProduct } = product;

        if (!id || quantity === undefined) return;

        const newQuantity = quantity - cartQuantity;

        // Пропускаємо, якщо нова кількість некоректна (але це неможливо)
        if (isNaN(newQuantity) || newQuantity < 0) {
            console.warn(`Пропущено товар з id ${id} через некоректну кількість`);
            return;
        }

        const productRef = doc(db, "Products", capitalizeFirstLetter(kindOfProduct), "items", id);

        try {
            await updateDoc(productRef, { quantity: newQuantity });
        } catch (error) {
            console.error(` Failed to update item with id ${id}:`, error);
        }
    });

    await Promise.all(updates);
};
