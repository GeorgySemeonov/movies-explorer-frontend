import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <>
        <Link to="/">
          <img className="header__logo" src={logo} alt="логотип" />
        </Link>
        <ul className="header__links">
          <li className="header__link-item">
            <Link to="/signup" className="header__link hover">
              Регистрация
            </Link>
          </li>
          <li className="header__link-item header__link-item_login">
            <Link to="/signin" className="header__link hover">
              Войти
            </Link>
          </li>
        </ul>
      </>

      {/* <>
            <Link to="/">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <nav className="header__links-movies">
              <NavLink
                exact
                to="/movies"
                className="header__link header__link_auth hover"
                activeClassName="header__link_active"
              >
                Фильмы
              </NavLink>
              <NavLink
                exact
                to="/saved-movies"
                className="header__link header__link_auth hover"
                activeClassName="header__link_active"
              >
                Сохрененные фильмы
              </NavLink>
            </nav>

            <Link to="/profile" className="profile-button-wraper">
              <button className="profile-button hover">Аккаунт</button>
            </Link>

            <img
              className="header__menu-icon hover"
              alt="иконка меню"
            
            />
          </> */}
    </header>
  );
}

export default Header;
