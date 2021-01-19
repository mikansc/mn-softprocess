import Label from "../../components/Label";
import "./SmallCard.styles.css";

const SmallCard = ({ onClick, selected = false }) => {
  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <div
      tabIndex="0"
      className={`process-card-sm ${selected ? "selected" : ""}`}
      onClick={handleOnClick}
    >
      <div className="process-card-sm__data">
        <Label text="Número" smallCard selected={selected}>
          SOFT 0001/2018
        </Label>
        <Label text="Assunto" smallCard selected={selected}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </Label>
        <Label text="Interessado" smallCard selected={selected}>
          Michael Nascimento
        </Label>
      </div>
    </div>
  );
};

export default SmallCard;
