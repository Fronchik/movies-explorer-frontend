import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

const cardsPerPage = 5;

function MoviesCardList({ cards, error, onLike, onDislike, query, isFavourites }) {
    const [numberOfCardsToDisplay, setNumberOfCardsToDisplay] = React.useState(cardsPerPage);
    const handleMoreClick = () => {
        setNumberOfCardsToDisplay(numberOfCardsToDisplay + cardsPerPage);
    }
    const cardsToDisplay = isFavourites ? cards : cards.slice(0, numberOfCardsToDisplay);

    return (
        <section className="movies">
            <ul className="movies__cards">
                {error ?
                    <p className="movies__error">Во время запроса произошла ошибка.
                        Возможно проблема с соединением или сервер недоступен.
                        Подождите немного и попробуйте еще раз</p> :
                    cards.length === 0 && query ? <li className="movies__nothing">Ничего не найдено</li> :
                        cardsToDisplay.map(card =>
                            <MoviesCard key={card.movieId}
                                movie={card}
                                onLike={onLike}
                                onDislike={onDislike}
                                isFavourites={isFavourites} />
                        )
                }
            </ul>
            {!isFavourites && numberOfCardsToDisplay < cards.length &&
                <div className="movies__more">
                    <button className="movies__button" onClick={handleMoreClick} aria-label="Кнопка Еще" type="button">Еще</button>
                </div>
            }
        </section>
    );
}

export default MoviesCardList;
