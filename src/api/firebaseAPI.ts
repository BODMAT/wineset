import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Box, Candle, Champagne, Cheese, Cookie, Delicacy, Glass, IProduct, KindOfProduct, Sauce, Vodka, Whiskey, Wine } from "../architecture/Pruduct";

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

// Main
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