import { useState } from "react";
import Modal from "../components/Modal";
import Searchbar from "../components/Searchbar";
import ProcessNewModal from "../ProcessNewModal";
import "./Home.styles.css";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const headerNovoButtonHandler = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-content__title global-headline textcolor-primary">
            Busca de processos
          </h1>
          <div className="search-group">
            <Searchbar />
          </div>
          <span>
            Você pode criar um novo processo
            <button
              type="button"
              className="new-process-link"
              onClick={headerNovoButtonHandler}
            >
              clicando aqui
            </button>
          </span>
        </div>
      </div>
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProcessNewModal close={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default HomePage;
