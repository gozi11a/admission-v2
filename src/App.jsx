import Footer from "./components/footer/Footer";
import { Main } from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.scss";
import { Bachelors } from "./components/admissions/bachelors/Bachelors";
import { Masters } from "./components/admissions/masters/Masters";
import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carusel } from "./components/main/carousel/Carusel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Kunduzgi } from "./components/main/carousel/pages/Kunduzgi";
import Location from "./components/main/location/Location";
import "./i18n";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/bachelors" element={<Bachelors />} />
          <Route path="/masters" element={<Masters />} />
          <Route path="/bakalavr" element={<Kunduzgi />} />
        </Routes>
        <Carusel />
        <Location />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
