import find from '../../images/find.svg';
import React from 'react';
import './SearchForm.css';

function SearchForm() {

    return (
        <section id="movies" className="searchForm">
            <div className="searchForm__container">
                <input id="user-input" className="searchForm__input" name="user-input" type="text" placeholder="Фильм" />
                <button id="search-btn" className="searchForm__find" aria-label="Кнопка поиска" type="submit">
                    <img src={find} alt="Логотип" />
                </button>
            </div>
            <div className="searchForm__filter">
                <label className="searchForm__filter-title">Короткометражки</label>
                <div className="switch  on">
                    <div className="switch-toggle"></div>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;