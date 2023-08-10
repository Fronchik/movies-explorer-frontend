import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ cards, desplayMoreButton, isFavourites }) {
    return (
        <section className="movies">
            <ul className="movies__cards">
                {cards.map(card => <MoviesCard key={card.id} {...card} isFavourites={isFavourites} />)}
            </ul>
            {desplayMoreButton &&
                <div className="movies__more">
                    <button className="movies__button" aria-label="Кнопка Еще" type="button">Еще</button>
                </div>
            }
        </section>
    );
}

export default MoviesCardList;