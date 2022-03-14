import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Main from './pages/main';
import MyList from './pages/my-list';
import Films from './pages/films';
import Player from './pages/player';
import SignIn from './pages/sign-in';
import AddReview from './pages/add-review';
import NotFound from './pages/404';
import PrivateRoute from './components/private-route/private-route';
import {AuthorizationStatus, AppRoute} from './constans';

type AppTypes = {
  filmName: string,
  filmGenre: string,
  filmYear: number,
  additionalClass: string,
}

function App({filmName, filmGenre, filmYear, additionalClass}: AppTypes): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main filmName={filmName} filmGenre={filmGenre} filmYear={filmYear} />}
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList additionalClass={additionalClass} />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Films}>
          <Route index element={<Films />} />
          <Route path={AppRoute.Id}>
            <Route index element={<Films />} />
            <Route path={AppRoute.AddReview} element={<AddReview />} />
          </Route>
        </Route>

        <Route path={AppRoute.Player}>
          <Route index element={<Player />} />
          <Route path={AppRoute.Id} element={<Player />} />
        </Route>

        <Route
          path={AppRoute.SignIn}
          element={<SignIn additionalClass={additionalClass} />}
        />

        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
