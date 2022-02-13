import Button from './button';

type ButtonTypes = {
  name: string,
  width: number,
  height: number,
  link: string,
  modifier: string,
}

function ButtonsBlock({name, width, height, link, modifier}: ButtonTypes): JSX.Element {
  return (
    <div className="film-card__buttons">
      <Button
        name={name}
        width={width}
        height={height}
        link={link}
        modifier={modifier}
      />
    </div>
  );
}

export default ButtonsBlock;
