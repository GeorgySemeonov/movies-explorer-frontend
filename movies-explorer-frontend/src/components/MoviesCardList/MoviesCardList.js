import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <>
      <section className="movies__cards-section">
        <>
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </>
      </section>{" "}
      <button className="movies__more-button hover" >
        Еще
      </button>
    </>
  );
}

export default MoviesCardList;
