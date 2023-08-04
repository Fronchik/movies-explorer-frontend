import headerLogo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ email, loggedIn, onSignOut }) {
    return (
        <header className="header">
            <Link to="/" aria-label="Логотип" type="submit">
                <img src={headerLogo} alt="Логотип" className="header__logo" />
            </Link>
            <div className="header__buttons">
                <Link to="/signup" aria-label="Кнопка регистрации" type="submit">
                    <button className="header__button" aria-label="Кнопка регистрации" type="button">Регистрация</button>
                </Link>
                <Link to="/signin" aria-label="Кнопка войти" type="submit">
                    <button className="header__button-green" aria-label="Кнопка войти" type="button">Войти</button>
                </Link>
            </div>
        </header>
    );
}

export default Header;