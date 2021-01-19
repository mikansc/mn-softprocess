import { Button } from "../../components/Button";
import imagePlaceholder from "../../assets/images/placeholder.png";

import "./ProcessDetail.styles.css";

const ProcessDetail = () => {
  return (
    <div className="detail-box-container">
      <div className="detail-header">
        <div className="detail-img">
          <img src={imagePlaceholder} alt="detail " />
        </div>
        <div className="detail-data">
          <div className="detail-info">
            <h2 className="global-subtitle textcolor-black-54">Processo</h2>
            <span className="global-headline textcolor-black-87">
              SOFT 0001/2018
            </span>
          </div>
          <div className="detail-info">
            <h2 className="global-subtitle textcolor-black-54">Data</h2>
            <span className="global-headline textcolor-black-87">
              07/08/2018
            </span>
          </div>
          <div className="detail-info">
            <h2 className="global-subtitle textcolor-black-54">Processo</h2>
            <span className="global-headline textcolor-black-87">
              In vestibulum dis laroque Ac parturient dapibu
            </span>
          </div>
        </div>
      </div>
      <div className="detail-content">
        <div className="detail-info">
          <h2 className="global-subtitle textcolor-black-54">Interessados</h2>
          <ul className="detail-list">
            <li>Danilo Barbosa</li>
            <li>Julia Barros</li>
            <li>Nicolas Araujo</li>
            <li>Antonio Ribeiro</li>
            <li>Manuela Oliveira</li>
            <li>Melissa Ribeiro</li>
          </ul>
        </div>
        <div className="detail-info">
          <h2 className="global-subtitle textcolor-black-54">Descrição</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At quod
            explicabo culpa fugiat delectus provident officiis cum eaque.
            Laboriosam pariatur asperiores facere? Commodi ipsa ab rerum
            delectus provident minima deleniti voluptas quisquam reprehenderit
            debitis dicta, praesentium, laborum, tempora odio accusantium?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus
            eaque, possimus nesciunt molestiae praesentium sed provident tempore
            sunt dicta perspiciatis labore ab temporibus? Incidunt soluta
            repellendus explicabo. Nesciunt, fuga eaque!
          </p>
        </div>
      </div>
      <div className="detail-footer">
        <Button>Remover</Button>
        <Button primary>Editar</Button>
      </div>
    </div>
  );
};

export default ProcessDetail;
