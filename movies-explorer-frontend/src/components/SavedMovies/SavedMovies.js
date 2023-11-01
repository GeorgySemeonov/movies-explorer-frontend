import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

function SavedMovies() {

  return (
    <main>
    <section className="movies">
      <SearchForm />
        <MoviesCardList/>
    
    </section>
    </main>
  );
}

export default SavedMovies;