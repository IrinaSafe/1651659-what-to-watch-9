import HeadGuest from '../components/common/head-guest';
import SignOut from '../components/common/signOut';
import Footer from '../components/common/footer';
import CatalogFilms from '../components/catalog-films/catalog-films';
import { AuthorizationStatus } from '../constans';
import { FilmsTypes } from '../types/films';

type MyListTypes = {
  additionalClass: string,
  authorizationStatus: AuthorizationStatus,
  films: FilmsTypes[],
}

function MyList({additionalClass, authorizationStatus, films}: MyListTypes): JSX.Element {
  return (
    <div className="user-page">
      <HeadGuest additionalClass = {additionalClass} authorizationStatus={authorizationStatus}>
        <>
          <h1 className="page-title user-page__title">My list</h1>
          <SignOut />
        </>
      </HeadGuest>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <CatalogFilms films={films} />
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
