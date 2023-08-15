import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
// import { moviesApi } from '../../utils/MoviesApi';
import './App.css';

import ProtectedRoute from '../ProtectedRoute';
// import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Error from '../Error/Error';

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [tokenChecked, setTokenChecked] = React.useState(false);
  const navigate = useNavigate();

  // проверка валидности токена
  function checkToken(token) {
    mainApi.checkToken(token)
      .then((result) => {
        setLoggedIn(true);
        setTokenChecked(true);
        // setMyEmail(result.email);
      })
      .catch((err) => {
        console.log(err);
        setLoggedIn(false);
        setTokenChecked(true);
      });
  }

  // аутентификация пользователя при загрузке или обновлении страницы
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false);
      setTokenChecked(true);
      return
    }
    checkToken(token);
  }, [])

  // регистрация пользователя
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password)
      .then(() => {
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogin(email, password) {
    mainApi.login(email, password)
      .then((result) => {
        localStorage.setItem("token", result.token);
        setLoggedIn(true);
        setCurrentUser(result.data);
        // setMyEmail(email);
        setTokenChecked(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function onProfileUpdate(name, email) {
    const token = localStorage.getItem("token");
    mainApi.profileUpdate(name, email, token)
      .then((result) => {
        setCurrentUser(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // выйти из аккаунта
  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setTokenChecked(false);
    navigate('/');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn || !tokenChecked}
            />}
          />
          <Route path="/saved-movies" element={
            <ProtectedRoute
              element={SavedMovies}
              loggedIn={loggedIn}
            />}
          />
          <Route path="/profile" element={
            <ProtectedRoute
              element={Profile}
              loggedIn={loggedIn}
              onProfileUpdate={onProfileUpdate}
              onSignOut={handleSignOut}
            />}
          />
          <Route path="/error" element={<Error />} />
          <Route path="/signup" element={<Register onRegister={handleRegister} />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;