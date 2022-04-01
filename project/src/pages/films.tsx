import SvgSprite from '../components/common/svgSprite';
import HeadGuest from '../components/common/head-guest';
import Footer from '../components/common/footer';
import CatalogFilms from '../components/catalog-films/catalog-films';
import { AuthorizationStatus, AppRoute, FilmLevel } from '../constans';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FilmsTypes } from '../types/films';

type FilmProps = {
  authorizationStatus: AuthorizationStatus,
  films: FilmsTypes[],
};

function Film({authorizationStatus, films}: FilmProps): JSX.Element {
  const pathParameters = useParams();
  const filmId = Number(pathParameters.id);
  const currentFilm = films.find((item) => item.id === filmId) || films[0];

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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="/test" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/test" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="/test" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              {/* Меняющаяся часть */}
              <div className="film-rating">
                <div className="film-rating__score">{currentFilm.scoresCount}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">{filmLevel}</span>
                  <span className="film-rating__count">{`${currentFilm.rating} ratings`}</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{currentFilm.description}</p>

                <p className="film-card__director">
                  <strong>{`Director: ${currentFilm.director}`}</strong>
                </p>

                <p className="film-card__starring">
                  <strong>{`Starring: ${currentFilm.starring.join(', ')}`}</strong>
                </p>
              </div>
              {/* Конец меняющейся части */}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <CatalogFilms films={films} />
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
