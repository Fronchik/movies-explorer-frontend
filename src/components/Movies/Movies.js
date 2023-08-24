import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';
import { beatfilmToMovie, moviesFilter } from "../../utils/movies";
import { mainApi } from "../../utils/MainApi";

function Movies() {
    const [cardList, setCardList] = React.useState([]);
    const [savedMovies, setSavedMovies] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [shortOnly, setShortOnly] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [moviesFromServer, setMoviesFromServer] = React.useState([]);


    React.useEffect(() => {
        loadFromStorage();
    }, [savedMovies]);

    const loadSavedMovies = () => {
        mainApi.moviesList().then((result) => {
            setSavedMovies(result);
        }).catch((err) => {
            setError(true);
            console.log(err);
        })
    }

    const moviesUpdateWithID = (movies) => {
        if (savedMovies.length === 0) {
            loadSavedMovies();
        }
        return movies.map((movie) => {
            const savedMovie = savedMovies.find((savedMovie) => savedMovie.movieId === movie.movieId);
            // клонируем объект, чтобы не менять исходный
            movie = Object.assign({}, movie);
            if (savedMovie) {
                movie._id = savedMovie._id;
            }
            return movie;
        })
    }

    const loadFromStorage = () => {
        const movies = localStorage.getItem("movies");
        if (movies) {
            const moviesData = JSON.parse(movies);
            setQuery(moviesData.query);
            setCardList(moviesUpdateWithID(moviesData.cardList));
            setShortOnly(moviesData.shortOnly);
        }
    }

    const loadFromServer = (q, short) => {
        moviesApi.movies()
            .then((result) => {
                const formattedMovies = result.map((bfMovie) => beatfilmToMovie(bfMovie));
                setMoviesFromServer(formattedMovies);
                filterAndSaveMovies(formattedMovies, q, short);
                setLoading(false);
            })
            .catch((err) => {
                setError(true);
                console.log(err);
            });
    }

    const saveToStorage = (newQuery, newCardList, newShortOnly) => {
        const moviesData = {
            query: newQuery,
            cardList: newCardList,
            shortOnly: newShortOnly,
        }
        localStorage.setItem("movies",
            JSON.stringify(moviesData));
    }

    const handleSearchSubmit = (q, short) => {
        setLoading(true);
        // если фильмы еще не загружены, загружаем их
        if (moviesFromServer.length === 0) {
            loadFromServer(q, short);
            return;
        }
        filterAndSaveMovies(moviesFromServer, q, short);
        setLoading(false);
    }

    const filterAndSaveMovies = (movies, q, short) => {
        const filteredMovies = moviesFilter(movies, q, short);
        saveToStorage(q, filteredMovies, short);
        setCardList(moviesUpdateWithID(filteredMovies));
    }


    const handleMovieLike = (movie) => {
        mainApi.movieAdd(movie).then((result) => {
            // обновляем список фильмов
            const updatedCardList = cardList.map((card) => {
                if (card.movieId === movie.movieId) {
                    return result;
                }
                return card;
            });
            setCardList(updatedCardList);
            // обновляем список сохраненных фильмов
            setSavedMovies([...savedMovies, result]);
        }).catch((err) => {
            setError(true);
            console.log(err);
        })
    }

    const handleMovieDislike = (id) => {
        mainApi.movieRemove(id).then((result) => {
            // обновляем список фильмов
            const updatedCardList = cardList.map((card) => {
                if (card._id === id) {
                    delete card._id;
                }
                return card;
            });
            setCardList(updatedCardList);
            // обновляем список сохраненных фильмов
            const updatedSavedMovies = savedMovies.filter((card) => {
                if (card._id !== id) {
                    return card;
                }
                return null;
            })
            setSavedMovies(updatedSavedMovies);
        }).catch((err) => {
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
                        handleSearchSubmit(query, !shortOnly);
                        setShortOnly(!shortOnly);
                    }}
                    shortOnly={shortOnly}
                    onSubmit={() => handleSearchSubmit(query, shortOnly)} />
                {loading ?
                    <Preloader /> : <MoviesCardList
                        cards={cardList}
                        error={error}
                        onLike={handleMovieLike}
                        onDislike={handleMovieDislike}
                        query={query}
                        isFavourites={false} />
                }
            </main>
            <Footer />
        </>
    );
}

export default Movies;
