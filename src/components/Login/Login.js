import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Hooks';
import './Login.css';
import headerLogo from '../../images/logo.svg';

function Login({ onLogin }) {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const { handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <section className="popup">
            <div className="popup__content">
                <img src={headerLogo} alt="Логотип" className="popup__logo" />
                <h2 className="popup__title">Рады видеть!</h2>
                <form id="login-form" className="popup__form" name="login-form" onSubmit={handleSubmit} noValidate>
                    <div className="popup__info">
                        <div className="popup__list">
                            <label className="popup__label">E-mail</label>
                            <input id="email" ref={emailRef} className="popup__input" name="login" type="email" onChange={handleChange} required />
                            {errors.login && <span className="popup__error">{errors.login}</span>}
                        </div>
                        <div className="popup__list">
                            <label className="popup__label">Пароль</label>
                            <input id="password" ref={passwordRef} className="popup__input" name="password" type="password" onChange={handleChange} required />
                            {errors.password && <span className="popup__error">{errors.password}</span>}
                        </div>
                    </div>
                    <div className="popup__button">
                        <button className={"popup__save" + (isValid ? " popup__save_active" : "")} aria-label="Кнопка входа" type="submit" disabled={!isValid}>Войти</button>
                        <div className="popup__span">
                            <span className="popup__text">Еще не зарегистрированы?</span>
                            <Link to="/signup" aria-label="Кнопка регистрации">
                                <span className="popup__enter">Регистрация</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Login;