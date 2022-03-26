import Logo from './logo';
import SignInBlock from './signIn';
import SingOut from './signOut';
import {AuthorizationStatus} from '../../constans';

type HeadGuestTypes = {
  children?: JSX.Element;
  additionalClass?: string;
  authorizationStatus: AuthorizationStatus;
}

function HeadGuest({ children, additionalClass, authorizationStatus }: HeadGuestTypes): JSX.Element {
  const element = authorizationStatus === AuthorizationStatus.Auth
    ? <SingOut />
    : <SignInBlock />;

  return (
    <header className={`page-header ${additionalClass}`}>
      <Logo />
      {children}

      {element}
    </header>
  );
}

export default HeadGuest;
