import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageError } from "../PageError/PageError";
import { ScrollRestoration } from "../ScrollRestoration/ScrollRestoration";
import { HomePage } from "../PageHome/HomePage/HomePage";
import { Layout } from "../Layout/Layout";

export function App() {
  return (
    <Router>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="*" element={<PageError />} />
        </Route>
      </Routes>
    </Router>
  )
}