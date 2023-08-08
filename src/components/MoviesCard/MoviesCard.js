import React from 'react';
import './MoviesCard.css';

function MoviesCard({ name, time, image, cardLike }) {

    return (
        <li className="card">
            <div className="card__content">
                <div className="card__description">
                    <h2 className="card__name">{name}</h2>
                    <p className="card__time">{time}</p>
                </div>
                {cardLike &&
                    <button className="card__like" aria-label="Лайк" type="button" />
                }
                <button className="card__delete" aria-label="Закрыть" type="button" />
            </div>
            <img src={image} alt={name} className="card__image" />
        </li>
    );
}

export default MoviesCard;