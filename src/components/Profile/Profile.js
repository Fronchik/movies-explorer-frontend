import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile({ onLogin }) {
    const emailRef = React.useRef();

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     onLogin(emailRef.current.value);
    // }

    return (
        <>
            <Header loggedIn={true} />
            <section className="popup">
                <div className="popup-profile__content">
                    <h2 className="popup-profile__title">Привет, Виталий!</h2>
                    <form id="login-form" className="popup-profile__form" name="login-form">
                        <div className="popup-profile__data">
                            <div className="popup-profile__info">
                                <label className="popup-profile__label">Имя</label>
                                <input id="name" className="popup-profile__input" name="name" type="text" placeholder="Имя" required value="Виталий" />
                            </div>
                            <hr className="popup-profile__line"></hr>
                            <div className="popup-profile__info">
                                <label className="popup-profile__label">E-mail</label>
                                <input id="email" ref={emailRef} className="popup-profile__input" name="login" type="text" placeholder="Email" required value="pochta@yandex.ru" />
                            </div>
                        </div>
                        <div className="popup__button">
                            <button className="popup-profile__save" aria-label="Кнопка редактировать" type="submit">Редактировать</button>
                            <Link to="/" className="popup-profile__exit" aria-label="Кнопка выхода" type="submit">Выйти из аккаунта</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Profile;