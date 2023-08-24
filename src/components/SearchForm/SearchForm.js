import React from 'react';
import './SearchForm.css';
import find from '../../images/find.svg';

function SearchForm({ query, onQueryChange, shortOnly, onShortOnlyChange, onSubmit }) {

    const [error, setError] = React.useState(false);

    const handleShortChange = () => {
        onShortOnlyChange(!shortOnly);
    }

    const handleQueryChange = (e) => {
        const val = e.target.value;
        if (val) {
            setError(false);
        }
        onQueryChange(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query) {
            setError(true);
            return;
        }
        onSubmit();
    }

    return (
        <section id="movies" className="searchForm">
            <div className="searchForm__form">
                <form className="searchForm__container" onSubmit={handleSubmit} noValidate>
                    <input id="query" className="searchForm__input" name="query" type="text" onChange={handleQueryChange} value={query} placeholder="Фильм" required />
                    <button id="search-btn" className="searchForm__find" aria-label="Кнопка поиска" type="submit" disabled={error}>
                        <img src={find} alt="Логотип" />
                    </button>
                </form>
                {error && <span className="searchForm__error">Нужно ввести ключевое слово</span>}
            </div>
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