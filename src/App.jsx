import Footer from "./components/footer/Footer";
import Asosiy from "./components/main/Asosiy";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.scss";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ru", "uz"],
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "./components/lang/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },
  });

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Asosiy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
