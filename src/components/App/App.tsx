import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageError } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";
import { GiftBoxesPage } from "../PageGiftBoxes/GiftBoxesPage";
import { useEffect } from "react";
import { doc, setDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { IProduct, ProductConfig } from "../../data/OOPStructure/Pruduct";
import { COOKIES } from "../../data/DataBase/Products/Cookies";

//!time-limited function

async function uploadInfo() {
  try {
    const glassesRef = collection(db, "Products", "Cookies", "items");
    //!
    for (const glass of COOKIES) {
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

      // Добавление описания, если оно есть
      if ("description" in glass && glass.description !== undefined) {
        productData.description = glass.description;
      }

      // Добавление объема, если оно есть
      if ("volume" in glass && glass.volume !== undefined) {
        productData.volume = glass.volume;
      }

      // Добавление веса, если оно есть
      if ("weight" in glass && glass.weight !== undefined && glass.weight !== null) {
        productData.weight = typeof glass.weight === 'number' ? glass.weight : 0;
      }

      // Структура, если она есть
      if ('structure' in glass && glass.structure !== undefined) {
        productData.structure = glass.structure as IProduct[] | undefined;
      }

      // Страна, если она есть
      if ('country' in glass && glass.country !== undefined) {
        productData.country = glass.country;
      }

      // Обработка fullDescription с учетом undefined
      if ('fullDescription' in glass && glass.fullDescription !== undefined) {
        const fullDescription = glass.fullDescription;

        // Добавление свойств в fullDescription только если они заданы (не undefined)
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

      // Загрузка данных в Firestore
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

