import React from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';

function SearchForm({ shortOnly, query, onQueryChange, onShortOnlyChange, onSubmit }) {

    const handleShortChange = () => {
        onShortOnlyChange(!shortOnly);
        onSubmit();
    }

    const handleQueryChange = (e) => {
        onQueryChange(e.target.value);
    }

    return (
        <section id="movies" className="searchForm" >
            <form className="searchForm__container" onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
                <input id="user-input" className="searchForm__input" name="user-input" type="text" onChange={handleQueryChange} value={query} placeholder="Фильм" required />
                <button id="search-btn" className="searchForm__find" aria-label="Кнопка поиска" type="submit">
                    <img src={find} alt="Логотип" />
                </button>
            </form>
            <div className="searchForm__filter">
                <label className="searchForm__filter-title">Короткометражки</label>
                <div className={"switch" + (shortOnly ? " on" : "")} onClick={handleShortChange}>
                    <div className="switch-toggle"></div>
                </div>
            </div>
        </section>
    );
}

export default SearchForm;