import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Searchbar } from "../components/Searchbar";
import "./Home.styles.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const history = useHistory();

  const temp_changePage = () => {
    history.push("/process");
  };

  return (
    <div class="home-container">
      <div className="home-content">
        <h1 className="home-content__title global-headline textcolor-primary">
          Busca de processos
        </h1>
        <form>
          <div className="search-group">
            <Searchbar
              term={searchTerm}
              onTextInput={setSearchTerm}
              onButtonClick={temp_changePage}
            />
          </div>
        </form>
        <span>
          Você pode criar um novo processo <a href="!#">clicando aqui</a>
        </span>
      </div>
    </div>
  );
};

export default HomePage;
