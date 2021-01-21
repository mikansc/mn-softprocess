import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";
import imagePlaceholder from "../assets/images/placeholder.png";

import "./DetailBox.styles.css";
import List from "../components/List";
import ProcessEditModal from "../ProcessEditModal";
import ProcessDeleteModal from "../ProcessDeleteModal";

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
      <aside className="detail-box-container">
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
          <List title="Interessados" items={selectedProcess.interessados} />
          <div className="detail-info">
            <h2 className="global-subtitle textcolor-black-54">Descrição</h2>
            {selectedProcess.descricao}
          </div>
        </div>
        <div className="detail-footer">
          <Button onClick={deleteButtonHandler}>Remover</Button>
          <Button primary onClick={editButtonHandler}>
            Editar
          </Button>
        </div>
      </aside>

      <Modal open={openDeleteModal} onClose={() => setOpenDeleteModal(false)}>
        <ProcessDeleteModal
          process={selectedProcess}
          onCancel={() => setOpenDeleteModal(false)}
        />
      </Modal>

      <Modal open={openEditModal} onClose={() => setOpenEditModal(false)}>
        <ProcessEditModal
          process={selectedProcess}
          onCancel={() => setOpenEditModal(false)}
        />
      </Modal>
    </>
  );
};

export default DetailBox;
