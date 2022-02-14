type ButtonType = {
  name: string,
  width: number,
  height: number,
  link: string,
  modifier: string,
};

function Button({name, width, height, link, modifier}: ButtonType):JSX.Element {
  return (
    <button className={`btn btn--${modifier} film-card__button" type="button`}>
      <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
        <use xlinkHref={link}></use>
      </svg>
      <span>{name}</span>
    </button>
  );
}

export default Button;
