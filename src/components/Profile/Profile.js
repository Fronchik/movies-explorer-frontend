import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    const emailRef = React.useRef();

    return (
        <>
            <Header loggedIn={true} />
            <section className="profile">
                <div className="profile__content">
                    <h2 className="profile__title">Привет, Виталий!</h2>
                    <form id="login-form" className="profile__form" name="login-form">
                        <div className="profile__data">
                            <div className="profile__info">
                                <label className="profile__label">Имя</label>
                                <input id="name" className="profile__input" name="name" type="text" placeholder="Имя" required value="Виталий" />
                            </div>
                            <hr className="profile__line"></hr>
                            <div className="profile__info">
                                <label className="profile__label">E-mail</label>
                                <input id="email" ref={emailRef} className="profile__input" name="login" type="text" placeholder="Email" required value="pochta@yandex.ru" />
                            </div>
                        </div>
                        <div className="profile__button">
                            <button className="profile__save" aria-label="Кнопка редактировать" type="submit">Редактировать</button>
                            <Link to="/" className="profile__exit" aria-label="Кнопка выхода">Выйти из аккаунта</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Profile;