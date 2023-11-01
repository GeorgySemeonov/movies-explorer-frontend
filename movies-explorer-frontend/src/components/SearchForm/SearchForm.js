import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";
import '../../vendor/hover.css';

function SearchForm() {
  return (
    <div className="search-container">
      <form className="search-form">
        <input
          type="text"
          name="search-query"
          className="search-form__input"
          placeholder="Фильм"
          required
        />
        <button
          type="submit"
          className="search-form__button hover"
          aria-label="Поиск"
        >
          Найти
        </button>
        <FilterCheckbox />
      </form>
    </div>
  );
}

export default SearchForm;
