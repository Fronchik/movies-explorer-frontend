import React from 'react';
import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import film from '../../images/pic__COLOR_pic.jpg';
import { moviesApi } from '../../utils/MoviesApi';

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
    const [cardList, setCardList] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [query, setQuery] = React.useState('');
    const [shortOnly, setShortOnly] = React.useState(false);

    const loadFromStorage = () => {
        const movies = localStorage.getItem("movies");
        if (movies) {
            const moviesData = JSON.parse(movies);
            setQuery(moviesData.query);
            setCardList(moviesData.cardList);
            setShortOnly(moviesData.shortOnly);
        }
    }

    const saveToStorage = () => {
        const moviesData = {
            query, cardList, shortOnly,
        }

        localStorage.setItem("movies",
            JSON.stringify(moviesData));
    }

    React.useEffect(() => {
        loadFromStorage();
    }, []);

    const handleSearchSubmit = () => {
        setLoading(true);
        moviesApi.movies()
            .then((result) => {
                const queryLowerCase = query.toLowerCase();

                // фильтруем фильмы по запросу
                setCardList(result.filter(movie => {
                    const condition = movie.nameRU.toLowerCase().includes(queryLowerCase) ||
                        movie.nameEN.toLowerCase().includes(queryLowerCase);

                    if (!shortOnly) {
                        return condition;
                    }

                    return condition && movie.duration <= 40
                }));
                setLoading(false);
                saveToStorage();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    console.log(shortOnly);
    console.log(query);
    console.log(cardList);

    return (
        <>
            <Header loggedIn={true} />
            <main>
                <SearchForm
                    query={query}
                    onQueryChange={setQuery}
                    onShortOnlyChange={setShortOnly}
                    shortOnly={shortOnly}
                    onSubmit={handleSearchSubmit} />
                {loading &&
                    <Preloader />
                }
                <MoviesCardList cards={cardList} desplayMoreButton={true} isFavourites={false} />
            </main>
            <Footer />
        </>
    );
}

export default Movies;