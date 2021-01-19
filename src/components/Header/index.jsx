import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProcessNewModal from "../../ProcessNewModal";
import Button from "../Button";
import Modal from "../Modal";
import Searchbar from "../Searchbar";
import "./Header.styles.css";

const Header = ({ onClickSearchButton }) => {
  const [isOpen, setIsOpen] = useState(true);

  const headerNovoButtonHandler = () => {
    setIsOpen(true);
  };

  const headerSearchHandler = () => {
    if (onClickSearchButton) {
      onClickSearchButton();
    }
  };

  return (
    <>
      <div className="process-bar">
        <Link className="header-link" to="/">
          <h1 className="global-title">
            Busca de <br /> processos
          </h1>
        </Link>
        <Searchbar onSearch={headerSearchHandler} />
        <Button onClick={headerNovoButtonHandler} type="button">
          NOVO
        </Button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ProcessNewModal />
      </Modal>
    </>
  );
};

export default Header;
