import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/photo.jpg';

function AboutMe() {
    return (
        <section id="student" className="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <div className="aboutMe__container">
                <div className="aboutMe__info">
                    <h3 className="aboutMe__info-name">Анна</h3>
                    <p className="aboutMe__info-prof">Фронтенд-разработчик</p>
                    <p className="aboutMe__info-text">Я родилась и живу в Москве. Получила высшее образование в Российском экономическом университете имени Г.В. Плеханова.
                        Люблю фотографировать. С 2022 года я изучаю веб-программирование. Мне нравится создавать красивые и функциональные веб-сайты.</p>
                    <p className="aboutMe__info-web">Github</p>
                </div>
                <img src={aboutMePhoto} alt="Фото студента" className="aboutMe__info-photo" />
            </div>
        </section>
    );
}

export default AboutMe;