import film from '../../images/pic__COLOR_pic.jpg';
import React from 'react';
import './MoviesCard.css';

function MoviesCard() {

    return (
        <>
            {/* <template id="card-template">
                <li className="card">
                    <div className="card__description">
                        <h2 className="card__name">33 слова о дизайне</h2>
                        <p className="card__time">1ч 42м</p>
                        <button className="card__like" aria-label="Лайк" type="button" />
                    </div>
                    <img src={film} alt="фильм" className="card__image" />
                </li>
            </template> */}
            <li className="card">
                <div className="card__description">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 42м</p>
                    <button className="card__like" aria-label="Лайк" type="button" />
                </div>
                <img src={film} alt="фильм" className="card__image" />
            </li>
            <li className="card">
                <div className="card__description">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 42м</p>
                    <button className="card__like" aria-label="Лайк" type="button" />
                </div>
                <img src={film} alt="фильм" className="card__image" />
            </li>
            <li className="card">
                <div className="card__description">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 42м</p>
                    <button className="card__like" aria-label="Лайк" type="button" />
                </div>
                <img src={film} alt="фильм" className="card__image" />
            </li>
            <li className="card">
                <div className="card__description">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 42м</p>
                    <button className="card__like" aria-label="Лайк" type="button" />
                </div>
                <img src={film} alt="фильм" className="card__image" />
            </li>
            <li className="card">
                <div className="card__description">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 42м</p>
                    <button className="card__like" aria-label="Лайк" type="button" />
                </div>
                <img src={film} alt="фильм" className="card__image" />
            </li>
            <li className="card">
                <div className="card__description">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 42м</p>
                    <button className="card__like" aria-label="Лайк" type="button" />
                </div>
                <img src={film} alt="фильм" className="card__image" />
            </li>
            <li className="card">
                <div className="card__description">
                    <h2 className="card__name">33 слова о дизайне</h2>
                    <p className="card__time">1ч 42м</p>
                    <button className="card__like" aria-label="Лайк" type="button" />
                </div>
                <img src={film} alt="фильм" className="card__image" />
            </li>
        </>
    );
}

export default MoviesCard;