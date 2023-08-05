import headerLogo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

function Register() {
    return (
        <section className="popup">
            <div className="popup__content">
                <img src={headerLogo} alt="Логотип" className="popup__logo" />
                <h2 className="popup__title">Добро пожаловать!</h2>
                <form id="login-form" className="popup__form" name="login-form">
                    <div className="popup__info">
                        <label className="popup__label">Имя</label>
                        <input id="name" className="popup__input" name="name" type="text" placeholder="Имя" required value="Виталий" />
                        <label className="popup__label">E-mail</label>
                        <input id="email" className="popup__input" name="login" type="text" placeholder="Email" required value="pochta@yandex.ru" />
                        <label className="popup__label">Пароль</label>
                        <input id="password" className="popup__input_password" name="password" type="password" required />
                    </div>
                    <div className="popup__button">
                        <button className="popup__save" aria-label="Кнопка входа" type="submit">Зарегистрироваться</button>
                        <Link to="/signin" className="popup__check" aria-label="Кнопка входа" type="submit">
                            <span className="popup__text">Уже зарегистрированы?</span>
                            <span className="popup__enter">Войти</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;