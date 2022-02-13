import Logo from './logo';

function HeadGuest({children}: {children: JSX.Element}): JSX.Element {
  return (
    <header className="page-header">
      <Logo />
      {children}
    </header>
  );
}

export default HeadGuest;
