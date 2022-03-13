import { Link } from 'react-router-dom';
import {AppRoute} from '../constans';

function NotFound(): JSX.Element {
  return (
    <>
      <p>Страница не найдена</p>
      <Link to={AppRoute.Root}>Вернуться на главную страницу</Link>
    </>
  );
}

export default  NotFound;
