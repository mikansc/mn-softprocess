import Label from "../../components/Label";
import imagePlaceholder from "../../assets/images/placeholder.png";
import "./ProcessCard.styles.css";

const ProcessCard = ({ onClick }) => {
  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <div tabIndex="0" className="process-card" onClick={handleOnClick}>
      <div className="process-card__img">
        <img src={imagePlaceholder} alt="img" />
      </div>
      <div className="process-card__data">
        <Label text="Número">SOFT 0001/2018</Label>
        <Label text="Assunto">
          In vestibulum dis laroque Ac parturient dapibu
        </Label>
        <Label text="Interessado">Michael Nascimento</Label>
        <Label text="Descrição">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit deleniti doloribus eveniet ab totam, laborum eos
          distinctio sequi repellendus recusandae.
        </Label>
      </div>
    </div>
  );
};

export default ProcessCard;
