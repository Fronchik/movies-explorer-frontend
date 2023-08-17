import portfolioImg from '../../images/strelka.svg';
import React from 'react';
import './Portfolio.css';

function Portfolio() {
    return (
        <section className="portfolio">
            <h4 className="portfolio__title">Портфолио</h4>
            <a href="https://github.com/Fronchik/how-to-learn" target="_blank" rel="noopener noreferrer">
                <div className="portfolio__info">
                    <p className="portfolio__name">Статичный сайт</p>
                    <img src={portfolioImg} alt="Стрелка" className="portfolio__img" />
                </div>
            </a>
            <a href="https://github.com/Fronchik/russian-travel" target="_blank" rel="noopener noreferrer">
                <div className="portfolio__info">
                    <p className="portfolio__name">Адаптивный сайт</p>
                    <img src={portfolioImg} alt="Стрелка" className="portfolio__img" />
                </div>
            </a>
            <a href="https://github.com/Fronchik/react-mesto-api-full-gha" target="_blank" rel="noopener noreferrer">
                <div className="portfolio__info">
                    <p className="portfolio__name">Одностраничное приложение</p>
                    <img src={portfolioImg} alt="Стрелка" className="portfolio__img" />
                </div>
            </a>
        </section>
    );
}

export default Portfolio;
