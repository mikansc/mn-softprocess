import imagePlaceholder from "../../assets/images/placeholder.png";
import "./ProcessCard.styles.css";

const ProcessCard = ({ onClick }) => {
  const handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className="process-card" onClick={handleOnClick}>
      <div className="process-card__img">
        <img src={imagePlaceholder} alt="img" />
      </div>
      <div className="process-card__data">
        <div className="process-card__info">
          <div className="global-subtitle textcolor-black-54">Número</div>
          <span>SOFT 0001/2018</span>
        </div>
        <div className="process-card__info">
          <div className="global-subtitle textcolor-black-54">Assunto</div>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="process-card__info">
          <div className="global-subtitle textcolor-black-54">Interessado</div>
          <span>SOFT 0001/2018</span>
        </div>
        <div className="process-card__info">
          <div className="global-subtitle textcolor-black-54">Descrição</div>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit deleniti doloribus eveniet ab totam, laborum eos
            distinctio sequi repellendus recusandae. Ipsam suscipit eaque natus
            hic adipisci ipsa odio iusto sint corporis labore, harum ex omnis
            illum, deserunt perferendis, soluta nobis? Quibusdam debitis animi
            voluptatem ut obcaecati temporibus voluptatum velit aliquam.
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
