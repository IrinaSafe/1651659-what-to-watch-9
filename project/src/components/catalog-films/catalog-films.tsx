import { FilmsTypes } from '../../types/films';
import FilmCard from '../common/filmCard';

type CatalogFilmsTypes = {
  films: FilmsTypes[],
};

function CatalogFilms({films}: CatalogFilmsTypes): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.map((film) => <FilmCard film={film} key={film.id} />)}
    </div>
  );
}

export default CatalogFilms;
