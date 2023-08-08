import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import headerLogo from '../../images/logo.svg';
import profile from '../../images/profile.svg';
import navigationIcon from '../../images/navigationIcon.svg'

function Header({ email, loggedIn, onSignOut }) {
    const [isMenuOpened, setMenuOpened] = React.useState(false);

    return (
        <>
            <header className="header">
                <Link to="/" aria-label="Логотип" type="submit">
                    <img src={headerLogo} alt="Логотип" className="header__logo" />
                </Link>
                {loggedIn &&
                    <div className="header__movies">
                        <Link to="/movies" aria-label="Ссылка на фильмы" className="header__link-movies">
                            Фильмы
                        </Link>
                        <Link to="/saved-movies" aria-label="Ссылка на сохранённые фильмы" className="header__link-saved-movies">
                            Сохранённые фильмы
                        </Link>
                    </div>
                }
                <div className="header__buttons">
                    {!loggedIn ?
                        <>
                            <Link to="/signup" aria-label="Кнопка регистрации">
                                <button className="header__button" aria-label="Кнопка регистрации" type="button">
                                    Регистрация
                                </button>
                            </Link>
                            <Link to="/signin" aria-label="Кнопка войти">
                                <button className="header__button-green" aria-label="Кнопка войти" type="button">
                                    Войти
                                </button>
                            </Link>
                        </>
                        :
                        <Link to="/profile" aria-label="Кнопка аккаунта">
                            <button className="header__profile" aria-label="Кнопка аккаунта" type="button">
                                <img src={profile} alt="Профиль" />
                                Аккаунт
                            </button>
                        </Link>
                    }
                </div>
                {loggedIn &&
                    <button aria-label="Кнопка меню" onClick={() => setMenuOpened(true)} className="header__navigation-close">
                        <img src={navigationIcon} alt="навигация" className="header__navigation" />
                    </button>
                }
            </header>
            {isMenuOpened &&
                <Navigation onClose={() => setMenuOpened(false)} />
            }
        </>
    );
}

export default Header;