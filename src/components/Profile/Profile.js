import React from 'react';
import { Link } from 'react-router-dom';
import { useFormWithValidation } from '../../utils/Hooks';
import './Profile.css';
import Header from '../Header/Header';
import { CurrentUserContext } from '../../context/CurrentUserContext';

function Profile({ onProfileUpdate, onSignOut }) {

    const currentUser = React.useContext(CurrentUserContext);

    const { handleChange, errors, values, init, isValid } = useFormWithValidation();

    React.useEffect(() => {
        init({
            name: currentUser.name,
            email: currentUser.email,
        })
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onProfileUpdate(values.name, values.email);
    }
    return (
        <>
            <Header loggedIn={true} />
            <section className="profile">
                <div className="profile__content">
                    <h2 className="profile__title">Привет, {currentUser.name}!</h2>
                    <form id="login-form" className="profile__form" name="login-form" onSubmit={handleSubmit} noValidate>
                        <div className="profile__data">
                            <div className="profile__info">
                                <label className="profile__label">Имя</label>
                                <input id="name" value={values.name} className="profile__input" name="name" type="text" onChange={handleChange} required pattern="^[a-zA-Zа-яА-Я\s\-]*$" />
                            </div>
                            <hr className="profile__line"></hr>
                            <div className="profile__info">
                                <label className="profile__label">E-mail</label>
                                <input id="email" value={values.email} className="profile__input" name="email" type="email" onChange={handleChange} required />
                            </div>
                        </div>
                        {!isValid &&
                            <div className="profile_error">{Object.values(errors).map(err => <p className="profile_text">{err}</p>)}
                            </div>
                        }
                        <div className="profile__button">
                            <button className={"profile_save" + (isValid ? " profile_save_active" : "")} aria-label="Кнопка редактировать" type="submit" disabled={!isValid}>Редактировать</button>
                            <Link to="/" className="profile__exit" aria-label="Кнопка выхода" onClick={onSignOut}>Выйти из аккаунта</Link>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Profile;