import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

import "./Movies.css";

function Movies() {
  return (
<main>
    <section className="movies">
      {/* <Header /> */}
      <SearchForm />
      <MoviesCardList />
      {/* <Footer /> */}
    </section>
    </main>
  );
}

export default Movies;
