import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageMessage } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";
import { GiftBoxesPage } from "../PageGiftBoxes/GiftBoxesPage";
import { PageProducts } from "../PageProducts/PageProducts";
import { PageOrder } from "../PageOrder/PageOrder";
import { FullAged } from "../PopUp/FullAged";
import { PageArticles } from "../PageArticles/PageArticles";
import { useAgeStore } from "../../store/fullAged";
import { uploadInfo } from "./uploadToDBFunc";
import { PageProduct } from "../PageProduct/PageProduct";
import { PageCart } from "../PageCart/PageCart";
import { useEffect, useLayoutEffect } from "react";
import { useCart } from "../../store/cart";

export function App() {
  //!time-limited upload to DB function
  // useEffect(() => {
  //   uploadInfo();
  // }, []);
  const { isFullAgedActive, setIsFullAgedActive } = useAgeStore();

  const { initializeCart } = useCart()
  useEffect(() => {
    initializeCart()
  }, [])

  return (
    <Router>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Glasses-and-candles" element={<GiftBoxesPage />} />
          <Route path="Gift-sets" element={<PageMessage message="This page will be added later" />} />
          <Route path="Wine-and-alcohol" element={<PageMessage message="This page will be added later" />} />
          <Route path="Delicacies" element={<PageMessage message="This page will be added later" />} />
          //!
          <Route path="/Glasses-and-candles/Glasses" element={<PageProducts product="glass" />} />
          <Route path="/Glasses-and-candles/Candles" element={<PageProducts product="candle" />} />
          <Route path="/Wine-and-alcohol/Wine" element={<PageProducts product="wine" />} />
          <Route path="/Wine-and-alcohol/Champagne" element={<PageProducts product="champagne" />} />
          <Route path="/Wine-and-alcohol/Whiskey" element={<PageProducts product="whiskey" />} />
          <Route path="/Wine-and-alcohol/Vodka" element={<PageProducts product="vodka" />} />
          <Route path="/Delicacies/Delicacies" element={<PageProducts product="delicacy" />} />
          <Route path="/Delicacies/Cheese" element={<PageProducts product="cheese" />} />
          <Route path="/Delicacies/Cookies" element={<PageProducts product="cookie" />} />
          <Route path="/Delicacies/Sauce" element={<PageProducts product="sauce" />} />
          <Route path="/Gift-sets/Boxes" element={<PageProducts product="box" />} />
          //!
          <Route
            path="/:category/:id"
            element={<PageProduct />}
          />
          //!
          <Route path="Cart" element={<PageCart />} />
          <Route path="Order" element={<PageOrder />} />
          <Route path="Articles" element={<PageArticles />} />
          <Route path="Sommelier" element={<PageMessage message="This page will be added later" />} />
          <Route path="Delivery" element={<PageMessage message="This page will be added later" />} />
            //!
          <Route path="Soon" element={<PageMessage message="This page will be added later" />} />
          <Route path="*" element={<PageMessage message="404 Not Found" />} />
        </Route>
      </Routes>

      {isFullAgedActive && <FullAged setActive={() => setIsFullAgedActive(false)} />}
    </Router>
  )
}