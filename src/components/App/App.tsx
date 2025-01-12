import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FixedHeader } from "../FixedHeader/FixedHeader"
import styles from "./App.module.scss"
import { PageError } from "../PageError/PageError";
import { FixedFooter } from "../FixedFooter/FixedFooter";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";

export function App() {
  return (
    <Router>
      <ScrollRestoration />
      <div className={styles.wrapper}>
        <FixedHeader />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<PageError />} />
          </Routes>
        </main>
        <FixedFooter />
      </div>
    </Router>
  )
}