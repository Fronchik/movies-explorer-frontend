import portfolioImg from '../../images/strelka.svg';
import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <div className="portfolio__info">
                <p className="portfolio__name">Статичный сайт</p>
                <img src={portfolioImg} alt="Стрелка" className="portfolio__img" />
            </div>
            <div className="portfolio__info">
                <p className="portfolio__name">Адаптивный сайт</p>
                <img src={portfolioImg} alt="Стрелка" className="portfolio__img" />
            </div>
            <div className="portfolio__info">
                <p className="portfolio__name">Одностраничное приложение</p>
                <img src={portfolioImg} alt="Стрелка" className="portfolio__img" />
            </div>
        </section>
    );
}

export default Portfolio;