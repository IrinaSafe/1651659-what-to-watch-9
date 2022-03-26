type GenreItemProps = {
  genre: string,
}

function GenreItem({genre}: GenreItemProps): JSX.Element {
  return (
    <li  className="catalog__genres-item catalog__genres-item--active">
      <a href="/test" className="catalog__genres-link">{genre}</a>
    </li>
  );
}

export default GenreItem;
