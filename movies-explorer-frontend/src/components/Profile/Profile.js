import React from "react";
import "./Profile.css";
import Header from "../Header/Header";
import "../Form/Form.css";

function Profile() {
  return (
    <div className="profile">
      <Header />

      <div className="profile__content">
        <p className="form-profile__title">Привет, Medved !</p>

        <form id="profile" className="form-profile">
          <fieldset className="form__inputs-register">
            <label className="form__label form__label_profile">
              <span className="form__label_title form__label_title_profile">
                Имя
              </span>
              <input
                type="name"
                className="form__inputs-item form__inputs-item_profile"
                minLength={2}
                maxLength={35}
                placeholder="Имя"
                id="name"
                required
              ></input>
              <span className="form__inputs-error form__inputs-error_profile"></span>
            </label>

            <label className="form__label form__label_profile">
              <span className="form__label_title form__label_title_profile">
                E-mail
              </span>
              <input
                type="email"
                className="form__inputs-item_profile form__inputs-item_profile_last"
                placeholder="E-mail"
                required
              />
              <span className="form__inputs-error form__inputs-error_profile "></span>
            </label>
          </fieldset>
        </form>

        <div className="profile__links">
          <span className="profile__links-item profile__edit-message"></span>

          <span className="profile__links-item profile__edit-message"></span>

          <button type="submit" form="profile" className="profile__links-item">
            Редактировать
          </button>
          <button className="profile__links-item profile__links-item_signout hover">
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
