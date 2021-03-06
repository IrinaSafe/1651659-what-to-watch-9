import { useState } from 'react';
import { Link } from 'react-router-dom';
import CatalogFilms from '../catalog-films/catalog-films';
import { FilmsTypes } from '../../types/films';
import { DEFAULT_GENRE, MAIN_FILMS_COUNT } from '../../constans';

type GenresProps = {
  films: FilmsTypes[],
}

function Genres({films}: GenresProps): JSX.Element {
  const [activeGenre, setActiveGenre] = useState(DEFAULT_GENRE);
  const genres = films.map((item) => item.genre);
  genres.unshift(DEFAULT_GENRE);
  genres.splice(MAIN_FILMS_COUNT);

  const handleClick = (genre: string) => {
    setActiveGenre(genre);
  };

  return (
    <>
      <ul className="catalog__genres-list">
        {genres.map((genre) => (
          <li
            key={genre}
            className={`catalog__genres-item ${activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
            onClick={() => handleClick(genre)}
          >
            <Link to='#' className="catalog__genres-link">{genre}</Link>
          </li>
        ))}
      </ul>

      {activeGenre === 'All genres' && <CatalogFilms films={films} />}
      {activeGenre !== 'All genres' && <CatalogFilms films={films.filter((item) => item.genre === activeGenre)} />}

      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </>
  );
}

export default Genres;
