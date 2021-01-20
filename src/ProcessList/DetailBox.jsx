import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import imagePlaceholder from "../assets/images/placeholder.png";

import "./DetailBox.styles.css";
import List from "../components/List";
import ProcessEditModal from "../ProcessEditModal";

const DetailBox = ({ selectedProcess }) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  if (!selectedProcess) return null;

  const editButtonHandler = () => {
    setOpenEditModal(true);
  };

  const deleteButtonHandler = () => {
    setOpenDeleteModal(true);
  };

  return (
    <>
      <div className="detail-box-container">
        <div className="detail-header">
          <div className="detail-img">
            <img src={imagePlaceholder} alt={""} />
          </div>
          <div className="detail-data">
            <div className="detail-info">
              <h2 className="global-subtitle textcolor-black-54">Processo</h2>
              <span className="global-headline textcolor-black-87">
                {selectedProcess.numero}
              </span>
            </div>
            <div className="detail-info">
              <h2 className="global-subtitle textcolor-black-54">Data</h2>
              <span className="global-headline textcolor-black-87">
                {selectedProcess.entrada}
              </span>
            </div>
            <div className="detail-info">
              <h2 className="global-subtitle textcolor-black-54">Processo</h2>
              <span className="global-headline textcolor-black-87">
                {selectedProcess.assunto}
              </span>
            </div>
          </div>
        </div>
        <div className="detail-content">
          <List title="Interessados" items={[]} />
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
              eaque, possimus nesciunt molestiae praesentium sed provident
              tempore sunt dicta perspiciatis labore ab temporibus? Incidunt
              soluta repellendus explicabo. Nesciunt, fuga eaque!
            </p>
          </div>
        </div>
        <div className="detail-footer">
          <Button onClick={deleteButtonHandler}>Remover</Button>
          <Button primary onClick={editButtonHandler}>
            Editar
          </Button>
        </div>
      </div>
      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <h1 className="global-title">
          Remover processo <strong>000000</strong>
        </h1>
        <p>
          Tem certeza que deseja remover o processo n. <strong>000000</strong> ?
        </p>
        <Button>Confirmar</Button>{" "}
        <Button filled onClick={() => setOpenDeleteModal(false)}>
          Cancelar
        </Button>
      </Modal>
      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <ProcessEditModal />
      </Modal>
    </>
  );
};

export default DetailBox;
