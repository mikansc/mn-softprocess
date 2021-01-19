import { useState } from "react";
import { useHistory } from "react-router-dom";
import Modal from "../components/Modal";
import Searchbar from "../components/Searchbar";
import ProcessNewModal from "../ProcessNewModal";
import "./Home.styles.css";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const headerNovoButtonHandler = () => {
    setIsModalOpen(true);
  };

  const handleSearch = () => {
    history.push(`/process?q=${searchTerm}`);
  };

  return (
    <>
      <div class="home-container">
        <div className="home-content">
          <h1 className="home-content__title global-headline textcolor-primary">
            Busca de processos
          </h1>
          <div className="search-group">
            <Searchbar
              term={searchTerm}
              onTextInput={setSearchTerm}
              onSearch={handleSearch}
            />
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
        <ProcessNewModal />
      </Modal>
    </>
  );
};

export default HomePage;
