import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Main from './pages/main';
import MyList from './pages/my-list';
import Films from './pages/films';
import Player from './pages/player';
import SignIn from './pages/sign-in';
import AddReview from './pages/add-review';
import NotFound from './pages/404';
import PrivateRoute from './components/private-route/private-route';
import { AuthorizationStatus, AppRoute } from './constans';
import { FilmsTypes } from './types/films';

type AppTypes = {
  additionalClass: string,
  films: FilmsTypes[],
  promoFilm: FilmsTypes,
  genres: string[],
}

function App({additionalClass, films, genres, promoFilm}: AppTypes): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={(
            <Main
              authorizationStatus={AuthorizationStatus.NoAuth}
              films={films}
              genres={genres}
              promoFilm={promoFilm}
            />
          )}
        />

        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.NoAuth}
            >
              <MyList
                additionalClass={additionalClass}
                authorizationStatus={AuthorizationStatus.NoAuth}
                films={films}
              />
            </PrivateRoute>
          }
        />

        <Route path={AppRoute.Films}>
          <Route
            index element={
              <Films
                authorizationStatus={AuthorizationStatus.NoAuth}
                films={films}
              />
            }
          />
          <Route path={AppRoute.Id}>
            <Route
              index element={
                <Films
                  authorizationStatus={AuthorizationStatus.NoAuth}
                  films={films}
                />
              }
            />
            <Route
              path={AppRoute.AddReview}
              element={
                <AddReview
                  authorizationStatus={AuthorizationStatus.NoAuth}
                  films={films}
                />
              }
            />
          </Route>
        </Route>

        <Route path={AppRoute.Player}>
          <Route index element={<Player />} />
          <Route path={AppRoute.Id} element={<Player />} />
        </Route>

        <Route
          path={AppRoute.SignIn}
          element={<SignIn additionalClass={additionalClass} authorizationStatus={AuthorizationStatus.NoAuth} />}
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
