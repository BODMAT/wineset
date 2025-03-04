import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageMessage } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";
import { GiftBoxesPage } from "../PageGiftBoxes/GiftBoxesPage";

import { useEffect, useState } from "react";
import { uploadInfo } from "./uploadToDBFunc";
import { PageProducts } from "../PageProducts/PageProducts";
import { PageOrder } from "../PageOrder/PageOrder";
import { AuthProvider } from "../Auth/AuthProvider";
import { FullAged } from "../PopUp/FullAged";
import { PageArticles } from "../PageArticles/PageArticles";
export function App() {
  //!time-limited
  // useEffect(() => {
  //   uploadInfo();
  // }, []);
  const [isFullAgedActive, setIsFullAgedActive] = useState(true);

  useEffect(() => {
    const isFullAged = localStorage.getItem('isFullAged');
    if (isFullAged === 'true') {
      setIsFullAgedActive(false);
    }
  }, []);

  const handleFullAged = () => {
    localStorage.setItem('isFullAged', 'true');
    setIsFullAgedActive(false);
  };

  return (
    <AuthProvider>
      <Router>
        <ScrollRestoration />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<PageMessage message="404 Not Found" />} />
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
            <Route path="Cart" element={<PageMessage message="This page will be added later" />} />
            <Route path="Order" element={<PageOrder />} />
            <Route path="Articles" element={<PageArticles />} />
            <Route path="Sommelier" element={<PageMessage message="This page will be added later" />} />
            <Route path="Delivery" element={<PageMessage message="This page will be added later" />} />
            //!
            <Route path="Soon" element={<PageMessage message="This page will be added later" />} />
          </Route>
        </Routes>
        {isFullAgedActive && <FullAged setActive={handleFullAged} />}
      </Router>
    </AuthProvider>
  )
}

