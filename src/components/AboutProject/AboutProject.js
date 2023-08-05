import React from 'react';
import './AboutProject.css';

function AboutProject() {
    return (
        <section id="project" className="aboutProject">
            <h2 className="aboutProject__title">О проекте</h2>
            <ul className="aboutProject__info">
                <li className="aboutProject__info-item">
                    <h3 className="aboutProject__info-title">
                        Дипломный проект включал 5 этапов
                    </h3>
                    <p className="aboutProject__info-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </li>
                <li className="aboutProject__info-item">
                    <h3 className="aboutProject__info-title">
                        На выполнение диплома ушло 5 недель
                    </h3>
                    <p className="aboutProject__info-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <div className="aboutProject__date">
                <div className="aboutProject__week">
                    <p className="aboutProject__week-title">1 неделя</p>
                    <p className="aboutProject__week-subtitle">Back-end</p>
                </div>
                <div className="aboutProject__month">
                    <p className="aboutProject__month-title">4 недели</p>
                    <p className="aboutProject__month-subtitle">Front-end</p>
                </div>
            </div>
        </section>
    );
}

export default AboutProject;