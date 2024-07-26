import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import { ThemeProvider } from "./light/ThemeContext";
import mainLogo from "/src/assets/logo/mainLogo.png";
import adressSvg from "/src/assets/icons/adress.svg";
import phoneSvg from "/src/assets/icons/phone.svg";
import emailSvg from "/src/assets/icons/email.svg";
import hamburger from "/src/assets/icons/hamburger.svg";
import "./navbar.scss";

const GlobeIcon = ({ width = 24, height = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="currentColor"
    className="bi bi-globe"
    viewBox="0 0 16 16"
  >
    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
  </svg>
);

const language = [
  { code: "uz", name: "O'zbek", country_code: "uz" },
  { code: "en", name: "English", country_code: "gb" },
  { code: "ru", name: "Russian", country_code: "ru" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLanguage = (code) => {
    i18next.changeLanguage(code).then(() => {
      console.log("Language changed to", code);
    }).catch((err) => {
      console.error("Error changing language:", err);
    });
  };

  return (
    <ThemeProvider>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="container">
          <div className="navbarStart">
            <div className="navLeft">
              <a href="https://nordicuniversity.org/index.uz.html">
                <img className="mainLogo" src={mainLogo} alt="Nordic logo" />
              </a>
            </div>
            <div className="navRight">
              <div className="navbarContacts">
                <a href="#locations">
                  <img src={adressSvg} alt="Manzil" />
                  {t("Manzillarimiz")}
                </a>
                <a href="tel:+998 55 508 44 00">
                  <img src={phoneSvg} alt="Telefon" />
                  +998 55 508 44 00
                </a>
                <a href="mailto:info@nordicuniversity.org">
                  <img src={emailSvg} alt="Email" />
                  info@nordicuniversity.org
                </a>
              </div>
            </div>
            <div className="navHamburger">
              <button>
                <img src={hamburger} alt="hamburger" />
              </button>
            </div>
          </div>

          <div className="navbarEnd">
            <div className="navLinks">
              <Link to="/">{t('home')}</Link>
              <Link to="/about">{t("about")}</Link>
              <Link to="/contact">{t("contact")}</Link>
              <Link to="/faq">{t("faq")}</Link>
              <Link target="_blank" to="https://instagram.com/gozi11a_">
                behruz
              </Link>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-link dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <GlobeIcon />
              </button>
              <ul className="dropdown-menu">
                {language.map(({ code, name, country_code }) => (
                  <li key={country_code}>
                    <button 
                      className="dropdown-item" 
                      onClick={() => changeLanguage(code)}
                    >
                      <span className={`flag-icon flag-icon-${country_code}`}></span>
                      &nbsp;{name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </ThemeProvider>
  );
}

export default Navbar;
