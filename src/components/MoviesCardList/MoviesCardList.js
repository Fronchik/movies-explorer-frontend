import React from 'react';
import './MoviesCardList.css';

function MoviesCardList() {
    return (
        <section className="movies">
            <ul className="movies__cards">
                {/* {cards.map((card) => (
                    <Card key={card._id} card={card} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
                ))} */}
            </ul>
            <div className="movies__more">
                <button className="movies__button" aria-label="Кнопка Еще" type="button">Еще</button>
            </div>
        </section>
    );
}

export default MoviesCardList;