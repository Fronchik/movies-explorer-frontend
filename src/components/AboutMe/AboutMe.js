import React from 'react';
import './AboutMe.css';
import aboutMePhoto from '../../images/photo.jpg';

function AboutMe() {
    return (
        <section id="student" className="aboutMe">
            <h2 className="aboutMe__title">Студент</h2>
            <div className="aboutMe__container">
                <div className="aboutMe__info">
                    <h3 className="aboutMe__info-name">Виталий</h3>
                    <p className="aboutMe__info-prof">Фронтенд-разработчик, 30 лет</p>
                    <p className="aboutMe__info-text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                        и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <p className="aboutMe__info-web">Github</p>
                </div>
                <img src={aboutMePhoto} alt="Фото студента" className="aboutMe__info-photo" />
            </div>
        </section>
    );
}

export default AboutMe;