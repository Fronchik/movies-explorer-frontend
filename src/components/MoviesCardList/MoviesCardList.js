import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
    return (
        <section className="movies">
            <ul className="movies__cards">
                <MoviesCard />
            </ul>
            <div className="movies__more">
                <button className="movies__button" aria-label="Кнопка Еще" type="button">Еще</button>
            </div>
        </section>
    );
}

export default MoviesCardList;