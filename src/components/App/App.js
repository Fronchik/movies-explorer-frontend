import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import { Routes, Route } from 'react-router-dom';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route></Route>
      </Routes>
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;