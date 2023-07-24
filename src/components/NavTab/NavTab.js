import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <section className="navTab">
            <h1 className="navTab__title">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="navTab__buttons">
                <button className="navTab__button" aria-label="Кнопка о проекте" type="button">О проекте</button>
                <button className="navTab__button" aria-label="Кнопка технологии" type="button">Технологии</button>
                <button className="navTab__button" aria-label="Кнопка студент" type="button">Студент</button>
            </div>
        </section>
    );
}

export default NavTab;