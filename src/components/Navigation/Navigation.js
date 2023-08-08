import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import close from '../../images/close.svg';
import profile from '../../images/profile.svg';

function Navigation({ onClose }) {
    return (
        <section className="navigation">
            <div className="navigation__content">
                <button aria-label="Закрыть" onClick={onClose} className="navigation__btn-close">
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
                <Link to="/profile" aria-label="Кнопка аккаунта" className="navigation__profile">
                    <button className="header__profile header__profile-on" aria-label="Кнопка аккаунта" type="button">
                        <img src={profile} alt="Профиль" />
                        Аккаунт
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default Navigation;