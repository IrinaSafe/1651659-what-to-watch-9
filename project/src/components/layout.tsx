import {Fragment} from 'react';
import HeadGuest from '../components/common/head-guest';
import {Outlet} from 'react-router-dom';

type LayoutTypes = {
  children?: JSX.Element,
  additionalClass?: string;
}

function Layout({children, additionalClass}: LayoutTypes): JSX.Element {
  return (
    <Fragment>
      <HeadGuest additionalClass = {additionalClass}>
        {children}
      </HeadGuest>

      <main>
        <Outlet />
      </main>
    </Fragment>);
}

export default Layout;
