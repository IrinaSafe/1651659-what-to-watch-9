import { Link } from 'react-router-dom';
import {AppRoute} from '../../constans';

function SingOut(): JSX.Element {
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <Link to={AppRoute.MyList} className="user-block__avatar">
          <img
            src="img/avatar.jpg"
            alt="User avatar"
            width="63"
            height="63"
          />
        </Link>
      </li>
      <li className="user-block__item">
        <Link to={AppRoute.Root} className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

export default SingOut;
