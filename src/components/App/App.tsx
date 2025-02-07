import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageError } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";
import { GiftBoxesPage } from "../PageGiftBoxes/GiftBoxesPage";

import { useEffect } from "react";
import { uploadInfo } from "./uploadToDBFunc";

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

