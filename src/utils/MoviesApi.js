class MoviesApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    movies = () => {
        return this._request(this.baseUrl + '/beatfilm-movies', {
            method: 'GET',
            headers: this.headers,
        })
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        // если ошибка, отклоняем промис
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    // метод запроса с проверкой ответа
    _request(url, options) {
        return fetch(url, options).then(this._checkResponse);
    }
}

export const moviesApi = new MoviesApi({
    baseUrl: 'https://api.nomoreparties.co',
    headers: {
        'Content-Type': 'application/json'
    }
})