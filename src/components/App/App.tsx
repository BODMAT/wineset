import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FixedHeader } from "../FixedHeader/FixedHeader"
import styles from "./App.module.scss"
import { ErrorPage } from "../ErrorPage/ErrorPage";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Router>
        <FixedHeader />
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}
