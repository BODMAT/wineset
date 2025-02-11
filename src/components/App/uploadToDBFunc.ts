import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { KindOfProduct, ProductConfig, StructureConfig } from "../../data/OOPStructure/Pruduct";
import { CHAMPAGNES } from "../../data/DataBase/Products/Champagne";
import { SAUCES } from "../../data/DataBase/Products/Sauce";

export async function uploadInfo() {
    try {
        const itemsRef = collection(db, "Products", "Sauce", "items");

        for (const item of SAUCES) {
            const itemRef = doc(itemsRef, item.id);

            const productData: ProductConfig = {
                id: item.id,
                name: item.name,
                kindOfProduct: item.kindOfProduct,
                price: item.price,
                imageUrl: item.imageUrl ?? "/Products/no-img.jpg",
                quantity: item.quantity ?? Infinity,
                discount: item.discount ?? 0,
            };

            if ("description" in item && item.description !== undefined) {
                productData.description = item.description;
            }

            if ("volume" in item && item.volume !== undefined && item.volume !== null) {
                if (typeof item.volume === "number") {
                    productData.volume = item.volume;
                }
            }

            if ("weight" in item && item.weight !== undefined && item.weight !== null) {
                productData.weight = typeof item.weight === 'number' ? item.weight : 0;
            }

            if ("structure" in item && typeof item.structure === "object" && item.structure !== null) {
                productData.structure = Object.entries(item.structure).reduce((acc, [key, value]) => {
                    acc[key as KindOfProduct] = Array.isArray(value) ? value : [];
                    return acc;
                }, {} as StructureConfig);
            }

            if ('country' in item && item.country !== undefined) {
                productData.country = item.country;
            }

            if ('fullDescription' in item && item.fullDescription !== undefined) {
                const fullDescription = item.fullDescription;

                // Add properties to fullDescription only if they are set (not undefined)
                productData.fullDescription = {};

                if (fullDescription.region !== undefined) {
                    productData.fullDescription.region = fullDescription.region;
                }

                if (fullDescription.shugarType !== undefined) {
                    productData.fullDescription.shugarType = fullDescription.shugarType;
                }

                if (fullDescription.grape !== undefined) {
                    productData.fullDescription.grape = fullDescription.grape;
                }

                if (fullDescription.maker !== undefined) {
                    productData.fullDescription.maker = fullDescription.maker;
                }

                if (fullDescription.fortress !== undefined) {
                    productData.fullDescription.fortress = fullDescription.fortress;
                }

                if (fullDescription.prosentShugar !== undefined) {
                    productData.fullDescription.prosentShugar = fullDescription.prosentShugar;
                }

                if (fullDescription.prosentAcid !== undefined) {
                    productData.fullDescription.prosentAcid = fullDescription.prosentAcid;
                }

                if (fullDescription.prosentAroma !== undefined) {
                    productData.fullDescription.prosentAroma = fullDescription.prosentAroma;
                }

                if (fullDescription.prosentTaste !== undefined) {
                    productData.fullDescription.prosentTaste = fullDescription.prosentTaste;
                }

                if (fullDescription.productStyle !== undefined) {
                    productData.fullDescription.productStyle = fullDescription.productStyle;
                }

                if (fullDescription.tastingCharacteristics !== undefined) {
                    productData.fullDescription.tastingCharacteristics = fullDescription.tastingCharacteristics;
                }

                if (fullDescription.gastronomicCombinations !== undefined) {
                    productData.fullDescription.gastronomicCombinations = fullDescription.gastronomicCombinations;
                }
            }

            // Data upload to Firestore
            await setDoc(itemRef, productData);
        }

        console.log("All items uploaded successfully!");
    } catch (error) {
        console.error("Error uploading items: ", error);
    }
}
