import Logo from './logo';

type HeadGuestTypes = {
  children?: JSX.Element;
  additionalClass?: string;
}

function HeadGuest({ children, additionalClass }: HeadGuestTypes): JSX.Element {
  return (
    <header className={`page-header ${additionalClass}`}>
      <Logo />
      {children}
    </header>
  );
}

export default HeadGuest;
