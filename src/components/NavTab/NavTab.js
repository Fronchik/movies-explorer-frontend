import React from 'react';
import './NavTab.css';

function NavTab() {
    return (
        <section className="navTab">
            <h1 className="navTab__title">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="navTab__buttons">
                <a href="#project" className="navTab__button" aria-label="Кнопка о проекте">О проекте</a>
                <a href="#techs" className="navTab__button" aria-label="Кнопка технологии">Технологии</a>
                <a href="#student" className="navTab__button" aria-label="Кнопка студент">Студент</a>
            </div>
        </section>
    );
}

export default NavTab;