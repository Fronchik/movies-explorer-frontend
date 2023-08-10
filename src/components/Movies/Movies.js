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
        "liked": true,
    },
    {
        "id": 2,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
        "liked": false,
    },
    {
        "id": 3,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
        "liked": true,
    },
    {
        "id": 4,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
        "liked": false,
    },
    {
        "id": 5,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
        "liked": true,
    },
    {
        "id": 6,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
        "liked": true,
    },
    {
        "id": 7,
        "name": "33 слова о дизайне",
        "time": "1ч 42м",
        "image": film,
        "liked": true,
    },
]

function Movies() {
    return (
        <>
            <Header loggedIn={true} />
            <main>
                <SearchForm />
                {/* <Preloader /> */}
                <MoviesCardList cards={cardList} desplayMoreButton={true} isFavourites={false} />
            </main>
            <Footer />
        </>
    );
}

export default Movies;