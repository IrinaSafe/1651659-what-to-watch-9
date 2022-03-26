import {Fragment} from 'react';
import HeadGuest from '../components/common/head-guest';
import {Outlet} from 'react-router-dom';
import {AuthorizationStatus} from '../constans';

type LayoutTypes = {
  children?: JSX.Element,
  additionalClass?: string,
  authorizationStatus: AuthorizationStatus;
}

function Layout({children, additionalClass, authorizationStatus}: LayoutTypes): JSX.Element {
  return (
    <Fragment>
      <HeadGuest additionalClass = {additionalClass} authorizationStatus={authorizationStatus}>
        {children}
      </HeadGuest>

      <main>
        <Outlet />
      </main>
    </Fragment>);
}

export default Layout;
