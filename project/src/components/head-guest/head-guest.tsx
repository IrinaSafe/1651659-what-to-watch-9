function HeadGuest(): JSX.Element {
  return (
    <header className="page-header">
      <div className="logo">
        <a className="logo__link" href="/test">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="user-block">
        <a href="sign-in.html" className="user-block__link">Sign in</a>
      </div>
    </header>
  );
}

export default HeadGuest;
