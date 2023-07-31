import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile({ onLogin }) {
    const emailRef = React.useRef();
    const passwordRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onLogin(emailRef.current.value, passwordRef.current.value);
    }

    return (
        <>
            <Header />
            <section className="popup">
                <div className="popup__content">
                    <h2 className="popup__title">Привет, Виталий!</h2>
                    <form id="login-form" className="popup__form" name="login-form" onSubmit={handleSubmit}>
                        <input id="email" ref={emailRef} className="popup__input" name="login" type="email" placeholder="Email" required></input>
                        <input id="password" ref={passwordRef} className="popup__input" name="password" type="password" placeholder="Пароль" required></input>
                        <div className="popup__button">
                            <button className="popup__save" aria-label="Кнопка редактировать" type="submit">Редактировать</button>
                            <Link to="/sign-up" className="popup__check" aria-label="Кнопка регистрации" type="submit">Выйти из аккаунта</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Profile;