import SvgSprite from '../components/common/svgSprite';
import HeadGuest from '../components/common/head-guest';
import { Link, useParams } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../constans';
import FormReview from '../components/form-review/form-review';
import { FilmsTypes } from '../types/films';

type AddReviewProps = {
  authorizationStatus: AuthorizationStatus,
  films: FilmsTypes[],
};

function AddReview({authorizationStatus, films}: AddReviewProps): JSX.Element {
  const pathParameters = useParams();
  const filmId = Number(pathParameters.id);
  const currentFilm = films.find((item) => item.id === filmId) || films[0];

  return (
    <body>
      <SvgSprite />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img
              src={currentFilm.backgroundImage}
              alt={currentFilm.name}
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeadGuest authorizationStatus={authorizationStatus} >
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link
                    to={`${AppRoute.Films}/${currentFilm.id}`}
                    className="breadcrumbs__link"
                  >
                    {currentFilm.name}
                  </Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link
                    to={`${AppRoute.Films}/${currentFilm.id}/${AppRoute.AddReview}`}
                    className="breadcrumbs__link"
                  >
                    Add review
                  </Link>
                </li>
              </ul>
            </nav>
          </HeadGuest>

          <div className="film-card__poster film-card__poster--small">
            <img
              src={currentFilm.posterImage}
              alt={currentFilm.name}
              width="218"
              height="327"
            />
          </div>
        </div>

        <FormReview />
      </section>
    </body>

  );
}

export default AddReview;
