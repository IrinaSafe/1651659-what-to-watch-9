import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const FilmsData = {
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmYear: 2014,
};

const AdditionalClassForHeader = {
  class: 'user-page__head',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmName = {FilmsData.filmName}
      filmGenre = {FilmsData.filmGenre}
      filmYear = {FilmsData.filmYear}
      additionalClass = {AdditionalClassForHeader.class}
    />
  </React.StrictMode>,
  document.getElementById('root'));
