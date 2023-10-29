import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import './SavedMovies.css';

function SavedMovies() {

  return (
    <div className="movies">
      <SearchForm />
        <MoviesCardList/>
    
    </div>
  );
}

export default SavedMovies;