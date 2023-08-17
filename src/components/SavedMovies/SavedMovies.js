import React from 'react';
import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { mainApi } from "../../utils/MainApi";
import { moviesFilter } from "../../utils/movies";
import Preloader from "../Preloader/Preloader";

function SavedMovies() {

    const [savedMovies, setSavedMovies] = React.useState([]);
    const [cardList, setCardList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [shortOnly, setShortOnly] = React.useState(false);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = () => {
        setLoading(true)
        mainApi.moviesList().then((result) => {
            setSavedMovies(result);
            setCardList(result);
            setLoading(false);
        }).catch((err) => {
            setError(true);
            console.log(err);
        })
    }

    const handleSearchSubmit = (q, short) => {
        const filteredMovies = moviesFilter(savedMovies, q, short);
        setCardList(filteredMovies);
    }

    const handleMovieDislike = (id) => {
        mainApi.movieRemove(id).then((result) => {
            // обновляем список cохраненных фильмов
            const updatedSavedMovies = savedMovies.filter((card) => {
                if (card._id !== id) {
                    return card;
                }
                return null;
            });
            setSavedMovies(updatedSavedMovies);
            // обновляем список отображаемых фильмов
            const updatedCardList = cardList.filter((card) => {
                if (card._id !== id) {
                    return card;
                }
                return null;
            });
            setCardList(updatedCardList);
        }).catch((err) => {
            setError(true);
            console.log(err);
        })
    }

    return (
        <>
            <Header loggedIn={true} />
            <main>
                <SearchForm
                    query={query}
                    onQueryChange={setQuery}
                    onShortOnlyChange={() => {
                        handleSearchSubmit(query, !shortOnly)
                        setShortOnly(!shortOnly);
                    }}
                    shortOnly={shortOnly}
                    onSubmit={() => handleSearchSubmit(query, shortOnly)}
                />
                {loading ?
                    <Preloader /> : <MoviesCardList cards={cardList} error={error} onDislike={handleMovieDislike} isFavourites={true} />
                }
            </main>
            <Footer />
        </>
    );
}

export default SavedMovies;
