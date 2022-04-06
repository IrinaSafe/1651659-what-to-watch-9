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
import { ReviewTypes } from './types/reviews';

type AppTypes = {
  additionalClass: string,
  films: FilmsTypes[],
  promoFilm: FilmsTypes,
  reviews: ReviewTypes[],
}

function App({additionalClass, films, promoFilm, reviews}: AppTypes): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={(
            <Main
              authorizationStatus={AuthorizationStatus.NoAuth}
              films={films}
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
                reviews={reviews}
              />
            }
          />
          <Route path={AppRoute.Id}>
            <Route
              index element={
                <Films
                  authorizationStatus={AuthorizationStatus.NoAuth}
                  films={films}
                  reviews={reviews}
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
