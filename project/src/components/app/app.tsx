import Main from '../main/main';

type AppTypes = {
  filmName: string,
  filmGenre: string,
  filmYear: number,
}

function App({filmName, filmGenre, filmYear}: AppTypes): JSX.Element {
  return (
    <Main
      filmName = {filmName}
      filmGenre = {filmGenre}
      filmYear = {filmYear}
    />
  );
}

export default App;
