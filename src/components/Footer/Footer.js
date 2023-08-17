import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <nav className="footer__items">
                <p className="footer__copyright">&copy; 2023</p>
                <ul className="footer__links">
                    <li>
                        <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noopener noreferrer">Яндекс.Практикум</a>
                    </li>
                    <li>
                        <a href="https://github.com/Fronchik/" className="footer__link" target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;
