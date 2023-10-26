import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import Footer from "../Footer/Footer";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./App.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
// import ProtectedRoute from '../ProtectedRoute';
// import Preloader from '../Preloader/Preloader';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});

  const updateCurrentUser = (updatedUserData) => {
    setCurrentUser(updatedUserData);
  };

  return (
    <CurrentUserContext.Provider
      value={{ user: currentUser, updateUser: updateCurrentUser }}
    >
      <div className="page">
        <Routes>
          <Route exact path="/" element={<Main />} />

          <Route path="/movies" element={<Movies />} />
          <Route exact path="/saved-movies" element={<Movies />} />

          <Route
            exact
            path="/signin"
            element={
              <Login
                title="Рады видеть!"
                buttonText="Войти"
                linkText="Регистрация"
                bottomText="Ещё не зарегистрированы?"
              />
            }
          />

          <Route
            exact
            path="/signup"
            element={
              <Register
                title="Добро пожаловать!"
                buttonText="Зарегистрироваться"
                linkText="Войти"
                bottomText="Уже зарегистрированы?"
              />
            }
          />

          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/404" element={<PageNotFound />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
