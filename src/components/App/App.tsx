import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageMessage } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";
import { GiftBoxesPage } from "../PagesBoxAndCandles/GiftBoxesPage";
import { PageProducts } from "../PageProducts/PageProducts";
import { PageOrder } from "../PageOrder/PageOrder";
import { PageArticles } from "../PageArticles/PageArticles";
import { useAgeStore } from "../../store/fullAged";
import { uploadInfo } from "./uploadToDBFunc";
import { PageProduct } from "../PageProduct/PageProduct";
import { PageCart } from "../PageCart/PageCart";
import { useEffect } from "react";
import { useCart } from "../../store/cart";
import { PageSommelier } from "../PageSommelier/PageSommelier";
import { PopUpPortal } from "../../portals/PopUpPortal";
import { usePopupStore } from "../../store/popup";
import { PageGlassesAndCandles } from "../PagesBoxAndCandles/PageGlassesAndCandles";
import { PageWineAndAlco } from "../PagesWineAlcoAndDelicacies/PageWineAndAlco";
import { PageDelicacies } from "../PagesWineAlcoAndDelicacies/PageDelicacies";
import { PageDelivery } from "../PageDelivery/PageDelivery";
import { useWishlist } from "../../store/wishlist";
import { useBonusStore } from "../../store/bonus";
import { useAuthStore } from "../../store/auth";

export function App() {
  //!time-limited upload to DB function
  // useEffect(() => {
  //   uploadInfo();
  // }, []);

  const { isFullAgedActive, setIsFullAgedActive } = useAgeStore();
  const { initializeBonus, toggleUseBonuses } = useBonusStore();
  const { user } = useAuthStore();
  const { initializeCart, totalCartPriceWithoutDiscount, cartProducts } = useCart();
  const { initializeWishlist } = useWishlist();
  useEffect(() => {
    initializeCart()
    initializeWishlist()
  }, [])
  useEffect(() => {
    initializeBonus();
  }, [cartProducts, totalCartPriceWithoutDiscount, initializeBonus, user, toggleUseBonuses]);

  const { open } = usePopupStore();
  useEffect(() => {
    open(
      "Are you 18 or older?",
      <div className="bg-[url(/18+.png)] bg-right bg-contain bg-no-repeat">
        <p className="text-lg ml-6 pt-8 mb-8 pr-36 max-[375px]:pr-0">
          The site contains information not recommended for individuals
          under the age of majority. Information
          are posted on the site exclusively
          The information license is intended only for
          personal use.
        </p>
        <button
          onClick={() => setIsFullAgedActive(false)} // Close popup
          className="bg-[#7A0000] border-2 border-[#7A0000] font-semibold max-w-[250px] px-[34px] py-[10px] rounded-[3px] text-white transition-all duration-300 ease-[cubic-bezier(0.075,0.82,0.165,1)] hover:bg-transparent hover:text-[#7A0000] ml-6 mb-8"
        >
          I was 18
        </button>
      </div>,
      true,
      isFullAgedActive
    );
  }, [open, isFullAgedActive, setIsFullAgedActive]);


  return (
    <Router basename="/wineset/">
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="Glasses-and-candles" element={<PageGlassesAndCandles />} />
          <Route path="Gift-sets" element={<GiftBoxesPage />} />
          <Route path="Wine-and-alcohol" element={<PageWineAndAlco />} />
          <Route path="Delicacies" element={<PageDelicacies />} />
          //!
          <Route path="Glasses-and-candles/Glasses" element={<PageProducts product="glass" />} />
          <Route path="Glasses-and-candles/Candles" element={<PageProducts product="candle" />} />
          <Route path="Wine-and-alcohol/Wine" element={<PageProducts product="wine" />} />
          <Route path="Wine-and-alcohol/Champagne" element={<PageProducts product="champagne" />} />
          <Route path="Wine-and-alcohol/Whiskey" element={<PageProducts product="whiskey" />} />
          <Route path="Wine-and-alcohol/Vodka" element={<PageProducts product="vodka" />} />
          <Route path="Delicacies/Delicacies" element={<PageProducts product="delicacy" />} />
          <Route path="Delicacies/Cheese" element={<PageProducts product="cheese" />} />
          <Route path="Delicacies/Cookies" element={<PageProducts product="cookie" />} />
          <Route path="Delicacies/Sauce" element={<PageProducts product="sauce" />} />
          <Route path="Gift-sets/Boxes" element={<PageProducts product="box" />} />
          //!
          <Route
            path="/:category/:id"
            element={<PageProduct />}
          />
          //!
          <Route path="Cart" element={<PageCart />} />
          <Route path="Order" element={<PageOrder />} />
          <Route path="Articles" element={<PageArticles />} />
          <Route path="Sommelier" element={<PageSommelier />} />
          <Route path="Delivery" element={<PageDelivery />} />
            //!
          <Route path="Soon" element={<PageMessage message="This page will be added later" />} />
          <Route path="*" element={<PageMessage message="404 Not Found" />} />
        </Route>
      </Routes>

      {/* All PopUps in one portal */}
      <PopUpPortal />
    </Router>
  )
}