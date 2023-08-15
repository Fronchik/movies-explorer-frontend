import React from 'react';
import './MoviesCard.css';

function MoviesCard({ nameRU, duration, image, liked, isFavourites }) {

    return (
        <li className="card">
            <div className="card__content">
                <div className="card__description">
                    <h2 className="card__name">{nameRU}</h2>
                    <p className="card__time">{duration}</p>
                </div>
                {isFavourites ?
                    <button className="card__delete" aria-label="Закрыть" type="button" /> :
                    <button className={"card__like" + (liked ? " card__like_active" : "")} aria-label="Лайк" type="button" />
                }
            </div>
            <img src={'https://api.nomoreparties.co' + image.url} alt={nameRU} className="card__image" />
        </li>
    );
}

export default MoviesCard;