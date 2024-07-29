import Footer from "./components/footer/Footer";
import Asosiy from "./components/main/Asosiy";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./index.scss";
import React from "react";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
