import SvgSprite from '../components/common/svgSprite';
import HeadGuest from '../components/common/head-guest';
import Footer from '../components/common/footer';
import CatalogFilms from '../components/catalog-films/catalog-films';
import { AuthorizationStatus, AppRoute, FilmLevel, MORE_FILMS_COUNT } from '../constans';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FilmsTypes } from '../types/films';
import Tabs from '../components/tabs/tabs';
import { ReviewTypes } from '../types/reviews';

type FilmProps = {
  authorizationStatus: AuthorizationStatus,
  films: FilmsTypes[],
  reviews: ReviewTypes[],
};

function Film({authorizationStatus, films, reviews}: FilmProps): JSX.Element {
  const pathParameters = useParams();
  const filmId = Number(pathParameters.id);
  const currentFilm = films.find((item) => item.id === filmId) || films[0];
  const filteredGenreArray = films.filter((item) => item.genre === currentFilm.genre && item.id !== currentFilm.id).splice(0, MORE_FILMS_COUNT);

  const [filmLevel, setFilmLevel] = useState('');

  useEffect(() => {
    if (currentFilm.scoresCount >= FilmLevel.Bad.score && currentFilm.scoresCount < FilmLevel.Normal.score) {
      setFilmLevel(FilmLevel.Bad.name);
    } else if (currentFilm.scoresCount >= FilmLevel.Normal.score && currentFilm.scoresCount < FilmLevel.Good.score) {
      setFilmLevel(FilmLevel.Normal.name);
    } else if (currentFilm.scoresCount >= FilmLevel.Good.score && currentFilm.scoresCount < FilmLevel.VeryGood.score) {
      setFilmLevel(FilmLevel.Good.name);
    } else if (currentFilm.scoresCount >= FilmLevel.VeryGood.score && currentFilm.scoresCount < FilmLevel.Awesome.score) {
      setFilmLevel(FilmLevel.VeryGood.name);
    } else if (currentFilm.scoresCount === FilmLevel.Awesome.score) {
      setFilmLevel(FilmLevel.Awesome.name);
    } else {
      setFilmLevel('Unknown');
    }
  }, [currentFilm.scoresCount]);

  return (
    <>
      <SvgSprite />

      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={currentFilm.backgroundImage} alt={currentFilm.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeadGuest authorizationStatus={authorizationStatus} />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>

                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>

                <Link
                  to={AppRoute.AddReview}
                  className="btn film-card__button"
                >
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={currentFilm.posterImage}
                alt={currentFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <Tabs currentFilm={currentFilm} filmLevel={filmLevel} reviews={reviews} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CatalogFilms films={filteredGenreArray} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
