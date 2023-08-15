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
        return this._request(this.baseUrl + '/users/me', {
            method: 'PATCH',
            headers: {
                "Authorization": `Bearer ${token}`,
                ...this.headers
            },
            body: JSON.stringify({
                name, email
            })
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
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})