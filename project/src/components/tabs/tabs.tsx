import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NamesTabs } from '../../constans';
import Overview from './overview';
import Details from './details';
import { FilmsTypes } from '../../types/films';
import { ReviewTypes } from '../../types/reviews';
import Reviews from './reviews';

type TabsProps = {
  currentFilm: FilmsTypes,
  filmLevel: string,
  reviews: ReviewTypes[],
}

function Tabs({currentFilm, filmLevel, reviews}: TabsProps): JSX.Element {
  const [isActiveTab, setActiveTab] = useState<string>(NamesTabs.Overview);

  const handleClick = (name: string) => {
    setActiveTab(name);
  };

  return (
    <>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {Object.keys(NamesTabs).map((tab) => (
            <li
              key={tab}
              className={`film-nav__item ${isActiveTab === tab ? 'film-nav__item--active' : ''}`}
              onClick={() => handleClick(tab)}
            >
              <Link to='#' className="film-nav__link">{tab}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {isActiveTab === NamesTabs.Details && <Details currentFilm={currentFilm} />}
      {isActiveTab === NamesTabs.Overview && <Overview currentFilm={currentFilm} filmLevel={filmLevel} />}
      {isActiveTab === NamesTabs.Reviews && <Reviews reviews={reviews}/>}
    </>
  );
}

export default Tabs;
