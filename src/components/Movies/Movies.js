import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
// import Preloader from '../Preloader/Preloader';
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
    },
    {
        "id": 4,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
    },
    {
        "id": 5,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
    },
    {
        "id": 6,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
    },
    {
        "id": 7,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
    },
]

function Movies() {
    return (
        <>
            <Header loggedIn={true} />
            <SearchForm />
            {/* <Preloader /> */}
            <MoviesCardList cards={cardList} desplayMoreButton={true} />
            <Footer />
        </>
    );
}

export default Movies;