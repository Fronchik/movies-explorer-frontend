import React from 'react';
import './App.css';
import Header from '../Header/Header';
import NavTab from '../NavTab/NavTab';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';

function App() {
  return (
    <div className="page">
      <Header />
      <NavTab />
      <AboutProject />
      <Techs />
    </div>
  );
}

export default App;