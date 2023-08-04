import headerLogo from '../../images/logo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <section className="popup">
            <div className="popup__content">
                <img src={headerLogo} alt="Логотип" className="popup__logo" />
                <h2 className="popup__title">Рады видеть!</h2>
                <form id="login-form" className="popup__form" name="login-form" onSubmit={handleSubmit}>
                    <div className="popup__info">
                        <label className="popup__label">E-mail</label>
                        <input id="email" ref={emailRef} className="popup__input" name="login" type="email" placeholder="Email" required value="pochta@yandex.ru" />
                        <label className="popup__label">Пароль</label>
                        <input id="password" ref={passwordRef} className="popup__input" name="password" type="password" required />
                    </div>
                    <div className="popup__button">
                        <button className="popup__save" aria-label="Кнопка входа" type="submit">Войти</button>
                        <Link to="/signup" className="popup__check" aria-label="Кнопка регистрации" type="submit">
                            <span className="popup__text">Уже зарегистрированы?</span>
                            <span className="popup__enter">Войти</span>
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;