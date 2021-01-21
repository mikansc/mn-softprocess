import Label from "../components/Label";
import imagePlaceholder from "../assets/images/placeholder.png";
import "./Card.styles.css";

const Card = (props) => {
  const { onClick, isSmall, process } = props;

  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <article tabIndex="0" className="card" onClick={handleOnClick}>
      {!isSmall && (
        <div className="card__img">
          <img src={imagePlaceholder} alt="img" />
        </div>
      )}
      <div className={`card__${isSmall ? "small" : "full"}`}>
        <Label smallLabel={isSmall} text="Número">
          {process.numero}
        </Label>
        <Label smallLabel={isSmall} text="Assunto">
          {process.assunto}
        </Label>
        <Label smallLabel={isSmall} text="Interessado">
          {process.interessados[0]}
        </Label>
        {!isSmall && <Label text="Descrição">{process.descricao}</Label>}
      </div>
    </article>
  );
};

export default Card;
