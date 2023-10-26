import React from "react";
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <div className="movies-cards__item">
      <div className="movies-card__item-content">
        <img
          className="movies-card__pic"
          src={
            " https://images.unsplash.com/photo-1697807713049-d171c4dd9d5e?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />

        <div className="movies-card__text">
          <h2 className="movies-card__title">Film</h2>
          <button
            type="button"
            className={
              "movies-card__like movies-card__like_type_notliked hover"
            }
            aria-label="лайк"
          ></button>
          <p className="movies-card__description">{`${Math.floor(120 / 60)}ч ${
            20 % 60
          }м`}</p>
        </div>
      </div>
    </div>
  );
}

export default MoviesCard;
