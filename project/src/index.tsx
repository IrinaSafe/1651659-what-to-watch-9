import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const FilmsData = {
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmYear: 2014,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmName = {FilmsData.filmName}
      filmGenre = {FilmsData.filmGenre}
      filmYear = {FilmsData.filmYear}
    />
  </React.StrictMode>,
  document.getElementById('root'));
