import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import film from '../../images/pic__COLOR_pic.jpg';

const cardList = [
    {
        "id": 1,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
    },
    {
        "id": 2,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
    },
    {
        "id": 3,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
    }
]

function SavedMovies() {
    return (
        <>
            <Header loggedIn={true} />
            <main>
                <SearchForm />
                <MoviesCardList cards={cardList} isFavourites={true} />
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;