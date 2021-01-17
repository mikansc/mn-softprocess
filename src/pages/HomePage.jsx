import { useState } from "react";
import { Searchbar } from "../components/Searchbar";
import "./HomePage.styles.css";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div class="home-container">
      <div className="home-content">
        <h1 className="home-content__title global-headline textcolor-primary">
          Busca de processos
        </h1>
        <form>
          <div className="search-group">
            <Searchbar term={searchTerm} handleSearchTerm={setSearchTerm} />
          </div>
        </form>
        <span>
          Você pode criar um novo processo <a href="!#">clicando aqui</a>
        </span>
      </div>
    </div>
  );
};
