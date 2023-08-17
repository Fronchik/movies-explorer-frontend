import React from 'react';
import './MoviesCard.css';

function MoviesCard({ movie, onLike, onDislike, isFavourites }) {

    const durationFormatted = (duration) => {
        const hours = Math.floor(duration / 60);
        const minutes = duration % 60;
        return `${hours > 0 ? hours + 'ч' : ''} ${minutes}м`;
    }

    const liked = movie._id !== undefined;

    return (
        <li className="card">
            <div className="card__content">
                <div className="card__description">
                    <h2 className="card__name">{movie.nameRU}</h2>
                    <p className="card__time">{durationFormatted(movie.duration)}</p>
                </div>
                {isFavourites ?
                    <button className="card__delete" aria-label="Закрыть" type="button"
                        onClick={() => { onDislike(movie._id) }} /> :
                    <button className={"card__like" + (liked ? " card__like_active" : "")}
                        aria-label="Лайк" type="button"
                        onClick={() => { liked ? onDislike(movie._id) : onLike(movie) }} />
                }
            </div>
            <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer" className="card__link" >
                <img src={movie.image} alt={movie.nameRU} className="card__image" />
            </a>
        </li>
    );
}

export default MoviesCard;
