// Функция фильтрации фильмов по запросу и короткометражкам
export const moviesFilter = (movies, query, shortOnly) => {
    const queryLowerCase = query.toLowerCase();
    return movies.filter(movie => {
        const condition =
            movie.nameRU.toLowerCase().includes(queryLowerCase) ||
            movie.nameEN.toLowerCase().includes(queryLowerCase);
        if (!shortOnly) {
            return condition;
        }
        return condition && movie.duration <= 40
    });
}

// Функция преобразования фильма из Beatfilm в наш формат
export const beatfilmToMovie = (beatfilmMovie) => {
    return {
        movieId: beatfilmMovie.id,
        nameRU: beatfilmMovie.nameRU,
        nameEN: beatfilmMovie.nameEN,
        description: beatfilmMovie.description,
        duration: beatfilmMovie.duration,
        country: beatfilmMovie.country,
        director: beatfilmMovie.director,
        year: beatfilmMovie.year,
        image: "https://api.nomoreparties.co" + beatfilmMovie.image.url,
        thumbnail: "https://api.nomoreparties.co" + beatfilmMovie.image.formats.thumbnail.url,
        trailerLink: beatfilmMovie.trailerLink,
    }
}