import Footer from "./components/footer/Footer";
import Asosiy from "./components/main/Asosiy";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.scss";
<<<<<<< HEAD
import { Bachelors } from "./components/admissions/bachelors/Bachelors";
import { Masters } from "./components/admissions/masters/Masters";
=======
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
>>>>>>> d1da9d786b16e044f727fbf74c66fcb9492af75f
import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
import { Carusel } from "./components/main/carousel/Carusel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Kunduzgi } from "./components/main/carousel/pages/Kunduzgi";
import Location from "./components/main/location/Location";
import "./i18n";

=======

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

>>>>>>> d1da9d786b16e044f727fbf74c66fcb9492af75f
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
<<<<<<< HEAD
          <Route path="/" element={<Main />} />
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/bakalavr" element={<Kunduzgi />} />
        </Routes>
        <Carusel />
        <Location />
=======
          <Route path="/*" element={<Asosiy />} />
        </Routes>
>>>>>>> d1da9d786b16e044f727fbf74c66fcb9492af75f
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
