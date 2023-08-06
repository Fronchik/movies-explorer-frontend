import React from 'react';
import { Link } from 'react-router-dom';
import close from '../../images/close.svg';
import './Navigation.css';

function Navigation() {
    return (
        <section className="navigation">
            <button className="navigation__button" aria-label="Кнопка закрыть" type="button">
                <img src={close} alt="Закрыть" className="navigation__close" />
            </button>
            <div className="navigation__links">
                <Link to="/" aria-label="Ссылка на фильмы" className="navigation__link">
                    Главная
                </Link>
                <Link to="/movies" aria-label="Ссылка на фильмы" className="navigation__link">
                    Фильмы
                </Link>
                <Link to="/saved-movies" aria-label="Ссылка на фильмы" className="navigation__link">
                    Сохранённые фильмы
                </Link>
            </div>
        </section>
    );
}

export default Navigation;