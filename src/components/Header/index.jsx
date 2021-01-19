import React, { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import Searchbar from "../Searchbar";

const Header = ({ onClickSearchButton }) => {
  const [isOpen, setIsOpen] = useState(false);

  const buttonClickHandler = () => {
    setIsOpen(true);
  };

  const searchHandler = () => {
    if (onClickSearchButton) {
      console.log("Do the search");
    }
  };

  return (
    <>
      <div className="process-bar">
        <h1 className="global-title">
          Busca de <br /> processos
        </h1>
        <Searchbar onSearch={searchHandler} />
        <Button onClick={buttonClickHandler} type="button">
          NOVO
        </Button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <p>Aqui vai a página para novo processo</p>
      </Modal>
    </>
  );
};

export default Header;
