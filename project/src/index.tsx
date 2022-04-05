import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { films } from './mocks/films';
import { reviews } from './mocks/reviews';

const PromoFilm =
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    videoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink:
      'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description:
      'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&apos;s friend and protege.',
    rating: 240,
    scoresCount: 8.9,
    director: 'Wes Anderson',
    starring: ['Bill Murray', 'Edward Norton', 'Jude Law', 'Willem Dafoe'],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: true,
  };

const AdditionalClassForHeader = {
  class: 'user-page__head',
};

ReactDOM.render(
  <React.StrictMode>
    <App
      additionalClass={AdditionalClassForHeader.class}
      promoFilm={PromoFilm}
      films={films}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
