class MainApi {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    login(email, password) {
        return this._request(this.baseUrl + '/signin', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                email, password
            })
        })
    }

    register(name, email, password) {
        return this._request(this.baseUrl + '/signup', {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name, email, password
            })
        })
    }

    profileUpdate(name, email, token) {
        return this._authRequest(this.baseUrl + '/users/me', 'PATCH', {
            name, email
        })
    }

    checkToken(token) {
        return this._request(this.baseUrl + '/users/me', {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`,
                ...this.headers
            }
        })
    }

    movieAdd(movie) {
        return this._authRequest(this.baseUrl + '/movies', 'POST', movie)
    }

    movieRemove(movieId) {
        return this._authRequest(this.baseUrl + '/movies/' + movieId, 'DELETE')
    }

    moviesList(token) {
        return this._authRequest(this.baseUrl + '/movies', 'GET')
    }

    _authRequest(url, method, body) {
        const token = localStorage.getItem("token");
        return this._request(url, {
            method, headers: {
                "Authorization": `Bearer ${token}`, ...this.headers
            },
            body: JSON.stringify(body)
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

export const mainApi = new MainApi({
    baseUrl: process.env.REACT_APP_API_URL || 'https://api.movies.fronchik.com',
    headers: {
      'Content-Type': 'application/json'
    }
})
