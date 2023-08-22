import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Hooks';
import './Register.css';
import headerLogo from '../../images/logo.svg';

function Register({ onRegister }) {
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    const { handleChange, errors, isValid } = useFormWithValidation();

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
    }

    return (
        <section className="popup">
            <div className="popup__content">
                <Link to="/" aria-label="Логотип">
                    <img src={headerLogo} alt="Логотип" className="popup__logo" />
                </Link>
                <h2 className="popup__title">Добро пожаловать!</h2>
                <form id="login-form" className="popup__form" name="login-form" onSubmit={handleSubmit} noValidate>
                    <div className="popup__info">
                        <div className="popup__list">
                            <label className="popup__label">Имя</label>
                            <input id="name" ref={nameRef} className="popup__input" name="name" type="text" onChange={handleChange} required pattern="^[a-zA-Zа-яА-Я\s\-]*$" />
                            {errors.name && <span className="popup__error">{errors.name}</span>}
                        </div>
                        <div className="popup__list">
                            <label className="popup__label">E-mail</label>
                            <input id="email" ref={emailRef} className="popup__input" name="login" type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" onChange={handleChange} required />
                            {errors.login && <span className="popup__error">{errors.login}</span>}
                        </div>
                        <div className="popup__list">
                            <label className="popup__label">Пароль</label>
                            <input id="password" ref={passwordRef} className="popup__input popup__input_password" name="password" type="password" onChange={handleChange} required minLength="5" maxLength="30" />
                            {errors.password && <span className="popup__error">{errors.password}</span>}
                        </div>
                    </div>
                    <div className="popup__button">
                        <button className={"popup__save" + (isValid ? " popup__save_active" : "")} aria-label="Кнопка входа" type="submit" disabled={!isValid}>Зарегистрироваться</button>
                        <div className="popup__span">
                            <span className="popup__text">Уже зарегистрированы?</span>
                            <Link to="/signin" aria-label="Кнопка входа">
                                <span className="popup__enter">Войти</span>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Register;