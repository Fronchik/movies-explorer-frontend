import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const cardsPerPage = 5;


function MoviesCardList({ cards, error, isFavourites }) {
    const [displayedCards, setDisplayedCards] = React.useState(cardsPerPage);

    const handleMoreClick = () => {
        setDisplayedCards(displayedCards + cardsPerPage);
    }

    const displayCards = isFavourites ? cards : cards.slice(0, displayedCards);


    return (
        <section className="movies">
            <ul className="movies__cards">
                {error ?
                    <p className="movies__error">Во время запроса произошла ошибка.
                        Возможно проблема с соединением или сервер недоступен.
                        Подождите немного и попробуйте еще раз</p> :
                    cards.length === 0 ? <li className="movies__not-found">Ничего не найдено</li> :
                        displayCards.map(card => <MoviesCard key={card.id} {...card} isFavourites={isFavourites} />)
                }
            </ul>
            {!isFavourites && displayedCards < cards.length &&
                <div className="movies__more">
                    <button className="movies__button" onClick={handleMoreClick} aria-label="Кнопка Еще" type="button">Еще</button>
                </div>
            }
        </section>
    );
}

export default MoviesCardList;