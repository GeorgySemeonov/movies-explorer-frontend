import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Form.css";

function Form({ nameForm, title, buttonText, linkText, bottomText }) {
  
  return (
    <div className="form__container">
      <form className="form">
        <div className="form-top">
          <Link to="/">
            <img className="header__logo" src={logo} alt="логотип" />
          </Link>
          <p className="form__title">{title}</p>
        </div>
        <fieldset className="form__inputs-register">
          <label className="form__label">
            <span className="form__label_title">Имя</span>
            <input
              type="name"
              className="form__inputs-item"
              placeholder="Имя"
            ></input>
          </label>

          <label className="form__label">
            <span className="form__label_title">E-mail</span>
            <input
              type="email"
              className="form__inputs-item"
              placeholder="E-mail"
            />

            <span className="form__inputs-error">
              Добавьте, пожалуйста, ваш E-mail
            </span>
          </label>

          <label className="form__label">
            <span className="form__label_title">Пароль</span>
            <input
              type="password"
              className="form__inputs-item"
              placeholder="Пароль"
            />
          </label>
        </fieldset>
        <div className="form__bottom">
          <button type="submit" className={`button__sumbit`}>
            {buttonText}
          </button>
          <div className="form__bottom-signin">
            <p className="form__bottom-text">{bottomText}</p>
            {nameForm === "signup" && (
              <Link to="/signin" className="form__bottom-link hover">
                {linkText}
              </Link>
            )}
            {nameForm === "signin" && (
              <Link to="/signup" className="form__bottom-link hover">
                {linkText}
              </Link>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
