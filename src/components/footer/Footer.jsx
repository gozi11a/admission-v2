import React from "react";
import "./footer.scss";
import telegramSvg from "/src/assets/icons/telegram.svg";
import LogoWhite from "/src/assets/logo/LogoWhite.png";
import instagramSvg from "/src/assets/icons/instagram.svg";
import facebookSvg from "/src/assets/icons/facebook.svg";
import youtubeSvg from "/src/assets/icons/youtube.svg";
import emailSvg from "/src/assets/icons/email.svg";
import adressSvg from "/src/assets/icons/adress.svg";
import phoneSvg from "/src/assets/icons/phone.svg";

function Footer() {
  return (
    <div id="footer">
      <div className="container">
        <div className="wrapper">
          <div className="wrapper-top">
            <div className="left">
              <a
                href="https://nordicuniversity.org/index.uz.html"
                className="logo-footer"
              >
                <img className="mainLogo" src={LogoWhite} alt="Nordic logo" />
              </a>
              <p className="epigraf">
                Intilganga tole yor
              </p>
              <div className="social-media">
                <a href="https://t.me/Pirmamatov_o" target="blank">
                  <img src={telegramSvg} alt="" />
                </a>
                <a href="https://www.instagram.com/ogabek_pirmamatov/" target="blank">
                  <img src={instagramSvg} alt="" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100076103209411&mibextid=LQQJ4d" target="blank">
                  <img src={facebookSvg} alt="" />
                </a>
                <a href="https://www.youtube.com/@nordic_university" target="blank">
                  <img src={youtubeSvg} alt="" />
                </a>
                
              </div>
            </div>
            <div className="middle">
              <h2>Bizning Sahifalarimiz</h2>
              <div className="list-pages">
                <a href="#locations">
                  <h4>Qabul</h4>
                </a>
                <a href="#locations">
                  <h4>Manzillarimiz</h4>
                </a>
                <a href="#locations">
                  <h4>Ekskursiya</h4>
                </a>
                <a href="#locations">
                  <h4>Milliy kutubxona</h4>
                </a>
                <a href="#locations">
                  <h4>TASIMO</h4>
                </a>
              </div>
            </div>
            <div className="right">
            <h2>Biz bilan bog'lanish</h2>
            <div className="contact-us">
            <a href="tel:+998 55 508 44 00">
                <img src={phoneSvg} alt="" />
                +998 55 508 44 00
              </a>
              <a href="mailto:info@nordicuniversity.org">
                <img src={emailSvg} alt="" />
                info@nordicuniversity.org
              </a>
              <a href="#locations">
                <img src={adressSvg} alt="" />
                Manzillarimiz
              </a>
            </div>
            </div>
          </div>
          <div className="wrapper-bottom">
            <h3>
          
              © 2024 Xalqaro Nordik universiteti, All Rights Reserved. Created
              By O&B team
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
