import SvgSprite from '../components/common/svgSprite';
import HeadGuest from '../components/common/head-guest';
import { Link } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../constans';
import FormReview from '../components/form-review/form-review';

type AddReviewProps = {
  authorizationStatus: AuthorizationStatus,
};

function AddReview({authorizationStatus}: AddReviewProps): JSX.Element {
  return (
    <body>
      <SvgSprite />

      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <HeadGuest authorizationStatus={authorizationStatus} >
            <nav className="breadcrumbs">
              <ul className="breadcrumbs__list">
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.Films}/${AppRoute.Id}`} className="breadcrumbs__link">The Grand Budapest Hotel</Link>
                </li>
                <li className="breadcrumbs__item">
                  <Link to={`${AppRoute.Films}/${AppRoute.Id}/${AppRoute.AddReview}`} className="breadcrumbs__link">Add review</Link>
                </li>
              </ul>
            </nav>
          </HeadGuest>

          <div className="film-card__poster film-card__poster--small">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>
        </div>

        <FormReview />
      </section>
    </body>

  );
}

export default AddReview;
