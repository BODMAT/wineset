import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageError } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";
import { GiftBoxesPage } from "../PageGiftBoxes/GiftBoxesPage";
import { useEffect } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { GLASSES } from "../../data/DataBase/Products/Glasses";
import { IProduct, ProductConfig } from "../../data/OOPStructure/Pruduct";

//!time-limited function
async function uploadInfo() {
  try {
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const glassesRef = collection(db, "Products", "Glasses", "items");

    for (const glass of GLASSES) {
      const glassRef = doc(glassesRef, glass.id);

      const productData: ProductConfig = {
        id: glass.id,
        name: glass.name,
        kindOfProduct: glass.kindOfProduct,
        price: glass.price,
        imageUrl: glass.imageUrl ?? "/Products/no-img.jpg",
        quantity: glass.quantity ?? Infinity,
        discount: glass.discount ?? 0,
      };

      if ("description" in glass && glass.description !== undefined) {
        productData.description = glass.description;
      }

      if ("volume" in glass && glass.volume !== undefined) {
        productData.volume = glass.volume;
      }

      if ("weight" in glass && glass.weight !== undefined) {
        productData.weight = glass.weight;
      }

      if ('structure' in glass && glass.structure !== undefined) {
        productData.structure = glass.structure as IProduct[] | undefined;
      }

      if ('country' in glass && glass.country !== undefined) {
        productData.country = glass.country;
      }

      if ('fullDescription' in glass && glass.fullDescription !== undefined) {
        if ("region" in glass.fullDescription && glass.fullDescription.region !== undefined) {
          glass.fullDescription.region = glass.fullDescription.region;
        }
        if ("shugarType" in glass.fullDescription && glass.fullDescription.shugarType !== undefined) {
          glass.fullDescription.shugarType = glass.fullDescription.shugarType;
        }
        if ("grape" in glass.fullDescription && glass.fullDescription.grape !== undefined) {
          glass.fullDescription.grape = glass.fullDescription.grape;
        }
        if ("maker" in glass.fullDescription && glass.fullDescription.maker !== undefined) {
          glass.fullDescription.maker = glass.fullDescription.maker;
        }
        if ("fortress" in glass.fullDescription && glass.fullDescription.fortress !== undefined) {
          glass.fullDescription.fortress = glass.fullDescription.fortress;
        }
        if ("prosentShugar" in glass.fullDescription && glass.fullDescription.prosentShugar !== undefined) {
          glass.fullDescription.prosentShugar = glass.fullDescription.prosentShugar;
        }
        if ("prosentAcid" in glass.fullDescription && glass.fullDescription.prosentAcid !== undefined) {
          glass.fullDescription.prosentAcid = glass.fullDescription.prosentAcid;
        }
        if ("prosentAroma" in glass.fullDescription && glass.fullDescription.prosentAroma !== undefined) {
          glass.fullDescription.prosentAroma = glass.fullDescription.prosentAroma;
        }
        if ("prosentTaste" in glass.fullDescription && glass.fullDescription.prosentTaste !== undefined) {
          glass.fullDescription.prosentTaste = glass.fullDescription.prosentTaste;
        }
        if ("productStyle" in glass.fullDescription && glass.fullDescription.productStyle !== undefined) {
          glass.fullDescription.productStyle = glass.fullDescription.productStyle;
        }
        if ("tastingCharacteristics" in glass.fullDescription && glass.fullDescription.tastingCharacteristics !== undefined) {
          glass.fullDescription.tastingCharacteristics = glass.fullDescription.tastingCharacteristics;
        }
        if ("gastronomicCombinations" in glass.fullDescription && glass.fullDescription.gastronomicCombinations !== undefined) {
          glass.fullDescription.gastronomicCombinations = glass.fullDescription.gastronomicCombinations;
        }
      }

      await setDoc(glassRef, productData);
    }

    console.log("All glasses uploaded successfully!");
  } catch (error) {
    console.error("Error uploading glasses: ", error);
  }
}


export function App() {

  //!time-limited
  // useEffect(() => {
  //   uploadInfo();
  // }, []);

  return (
    <Router>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageError />} />
          <Route path="Gift-sets" element={<GiftBoxesPage />} />
          <Route path="Glasses-and-candles" element={<GiftBoxesPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

