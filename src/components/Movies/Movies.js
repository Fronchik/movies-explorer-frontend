import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from '../MoviesCard/MoviesCard';
import Footer from '../Footer/Footer';

function Movies() {
    return (
        <>
            <Header />
            <SearchForm />
            {/* что это такое прелоадер? */}
            {/* <Preloader /> */}
            <MoviesCardList />
            <MoviesCard />
            <Footer />
        </>
    );
}

export default Movies;