import imagePlaceholder from "../../assets/images/placeholder.png";
import "./ProcessCard.styles.css";

const ProcessCard = () => {
  return (
    <div className="process-card">
      <div className="process-card__img">
        <img src={imagePlaceholder} alt="img" />
      </div>
      <div className="process-card__info">
        <div className="global-subtitle textcolor-black-54">Número</div>
        <span>SOFT 0001/2018</span>
      </div>
      <div className="process-card__info textcolor-black-54">
        <div className="global-subtitle">Assunto</div>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
      </div>
      <div className="process-card__info textcolor-black-54">
        <div className="global-subtitle">Interessado</div>
        <span>SOFT 0001/2018</span>
      </div>
      <div className="process-card__info textcolor-black-54">
        <div className="global-subtitle">Descrição</div>
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
  );
};

export default ProcessCard;
