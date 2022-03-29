import { Link } from 'react-router-dom';
import { AppRoute } from '../../constans';
import { FilmsTypes } from '../../types/films';

type FilmCardProps = {
  film: FilmsTypes,
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={`${film.previewImage}`}
          alt={`${film.name}`}
          width="280"
          height="175"
        />
      </div>

      <h3 className="small-film-card__title">
        <Link
          to={`${AppRoute.Films}/${film.id}`}
          className="small-film-card__link"
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmCard;
