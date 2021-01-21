import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.styles.css";
import { useQuery } from "../../hooks/useQuery";

const Searchbar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();
  const query = useQuery();
  const q = query.get("q");

  useEffect(() => {
    if (q) setTerm(q);
  }, [q]);

  const searchButtonHandler = (e) => {
    e.preventDefault();
    if (!term.trim()) {
      setTerm("");
    } else {
      history.push(`/process?q=${term}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={(e) => searchButtonHandler(e)}>
      <input
        className="search-bar__field"
        type="text"
        placeholder="Pesquise por uma informação do processo"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button
        type="button"
        className="search-bar__button"
        onClick={searchButtonHandler}
      >
        <SearchIcon style={{ color: "var(--color-black-38)" }} />
      </button>
    </form>
  );
};

export default Searchbar;
