import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

function Error() {
    return (
        <section className="error">
            <div className="error__content">
                <div className="error__info">
                    <p className="error__title">404</p>
                    <p className="error__text">Страница не найдена</p>
                </div>
                <div className="error__link">
                    <Link to="/" className="error__back" aria-label="Кнопка назад" type="submit">Назад</Link>
                </div>
            </div>
        </section>
    )
}

export default Error;