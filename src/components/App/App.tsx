import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FixedHeader } from "../FixedHeader/FixedHeader"
import styles from "./App.module.scss"
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { HomePage } from "../HomePage/HomePage";
import { FixedFooter } from "../FixedFooter/FixedFooter";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";

export function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className={styles.wrapper}>
        <FixedHeader />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <FixedFooter />
      </div>
    </Router>
  )
}