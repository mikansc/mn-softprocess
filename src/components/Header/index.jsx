import React from "react";
import { Button } from "../Button";
import { Searchbar } from "../Searchbar";

const Header = () => {
  return (
    <div className="process-bar">
      <h1 className="global-title">
        Busca de <br /> processos
      </h1>
      <Searchbar />
      <Button type="button">NOVO</Button>
    </div>
  );
};

export default Header;
