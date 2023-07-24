import headerLogo from '../../images/logo.svg';
import React from 'react';
import './Header.css';
// import { Link, Routes, Route } from 'react-router-dom';

function Header({ email, loggedIn, onSignOut }) {
    return (
        <header className="header">
            <img src={headerLogo} alt="Логотип" className="header__logo" />
            <div className="header__buttons">
                <button className="header__button" aria-label="Кнопка регистрации" type="button">Регистрация</button>
                <button className="header__button-green" aria-label="Кнопка войти" type="button">Войти</button>
            </div>
        </header>
    );
}

export default Header;