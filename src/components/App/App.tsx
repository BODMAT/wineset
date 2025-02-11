import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageError } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";
import { GiftBoxesPage } from "../PageGiftBoxes/GiftBoxesPage";

import { useEffect } from "react";
import { uploadInfo } from "./uploadToDBFunc";
import { PageProducts } from "../PageProducts/PageProducts";

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
          <Route path="Glasses-and-candles" element={<GiftBoxesPage />} />
          //! ========
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
        </Route>
      </Routes>
    </Router>
  )
}

