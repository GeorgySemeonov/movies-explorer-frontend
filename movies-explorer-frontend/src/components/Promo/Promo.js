import React from "react";
import "./Promo.css";
import logo from "../../images/landing-logo.png";

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className="promo__logo" src={logo} alt="фото студента" />
    </div>
  );
}

export default Promo;
