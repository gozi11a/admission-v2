import Footer from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.scss";
import { Bachelors } from "./components/admissions/bachelors/Bachelors";
import { Masters } from "./components/admissions/masters/Masters";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";
import HttpApi from "i18next-http-backend";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Carousel } from "bootstrap/dist/js/bootstrap";
import {Carusel } from "./components/main/carousel/Carusel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Kunduzgi } from "./components/main/carousel/pages/Kunduzgi";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "ru", "uz"],
    lng: "en",
    fallbackLng: "en",
    detection: {
      order: [ "cookie","htmlTag", "localStorage", "path", "subdomain"],
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
          <Route path="/" element={<Main />} />
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/bakalavr" element={<Kunduzgi/>} />
        </Routes>
        <Carusel/>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
