import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { films } from './mocks/films';

const FilmsData = {
  filmName: 'The Grand Budapest Hotel',
  filmGenre: 'Drama',
  filmYear: 2014,
};

const Genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];

const AdditionalClassForHeader = {
  class: 'user-page__head',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      filmName={FilmsData.filmName}
      filmGenre={FilmsData.filmGenre}
      filmYear={FilmsData.filmYear}
      additionalClass={AdditionalClassForHeader.class}
      films={films}
      genres={Genres}
    />
  </React.StrictMode>,
  document.getElementById('root'));
