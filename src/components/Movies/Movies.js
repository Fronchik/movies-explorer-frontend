import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { moviesApi } from '../../utils/MoviesApi';

function Movies() {
    const [cardList, setCardList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [shortOnly, setShortOnly] = React.useState(false);
    const [error, setError] = React.useState(false);

    const loadFromStorage = () => {
        const movies = localStorage.getItem("movies");
        if (movies) {
            const moviesData = JSON.parse(movies);
            setQuery(moviesData.query);
            setCardList(moviesData.cardList);
            setShortOnly(moviesData.shortOnly);
        }
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

    React.useEffect(() => {
        loadFromStorage();
    }, []);

    const handleSearchSubmit = (q, short) => {
        setLoading(true);
        moviesApi.movies()
            .then((result) => {
                const queryLowerCase = q.toLowerCase();
                // фильтруем фильмы по запросу
                result = result.filter(movie => {
                    const condition =
                        movie.nameRU.toLowerCase().includes(queryLowerCase) ||
                        movie.nameEN.toLowerCase().includes(queryLowerCase);
                    if (!short) {
                        return condition;
                    }
                    return condition && movie.duration <= 40
                });
                setLoading(false);
                setCardList(result);
                saveToStorage(q, result, short);
            })
            .catch((err) => {
                setLoading(false);
                setError(true);
                console.log(err);
            });
    }

    return (
        <>
            <Header loggedIn={true} />
            <main>
                <SearchForm
                    query={query}
                    onQueryChange={setQuery}
                    onShortOnlyChange={() => { setShortOnly(!shortOnly); handleSearchSubmit(query, !shortOnly) }}
                    shortOnly={shortOnly}
                    onSubmit={() => handleSearchSubmit(query, shortOnly)} />
                {loading ?
                    <Preloader /> : <MoviesCardList cards={cardList} error={error} isFavourites={false} />
                }
            </main>
            <Footer />
        </>
    );
}

export default Movies;