import React from 'react';
import './Techs.css';

function Techs() {
    return (
        <section id="techs" className="techs">
            <h2 className="techs__title">Технологии.</h2>
            <h3 className="techs__subtitle">7 технологий</h3>
            <p className="techs__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
            <ul className="techs__info">
                <li className="techs__info-item">HTML</li>
                <li className="techs__info-item">CSS</li>
                <li className="techs__info-item">JS</li>
                <li className="techs__info-item">React</li>
                <li className="techs__info-item">Git</li>
                <li className="techs__info-item">Express.js</li>
                <li className="techs__info-item">mongoDB</li>
            </ul>
        </section>
    );
}

export default Techs;