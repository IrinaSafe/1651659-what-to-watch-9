import { Link } from 'react-router-dom';
import { AppRoute, VIDEO_SIZES, VIDEO_TIMER } from '../../constans';
import { FilmsTypes } from '../../types/films';
import { useState } from 'react';
import VideoPlayer from  './videoPlayer';

type FilmCardProps = {
  film: FilmsTypes,
};

function FilmCard({film}: FilmCardProps): JSX.Element {
  const [activeElem, setActive] = useState<undefined | number>(undefined);

  let videoTimer: null | ReturnType<typeof setTimeout> = null;

  const handleMouseEnter = () => {
    videoTimer = setTimeout(() => {
      setActive(film.id);
    }, VIDEO_TIMER);
  };

  const handleMouseLeave = () => {
    setActive(undefined);

    if (videoTimer) {
      clearTimeout(videoTimer);
    }
  };

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-film-card__image">
        <VideoPlayer
          posterImage={film.posterImage}
          width={VIDEO_SIZES.width}
          height={VIDEO_SIZES.height}
          previewVideoLink={film.previewVideoLink}
          isActive={activeElem === film.id}
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
