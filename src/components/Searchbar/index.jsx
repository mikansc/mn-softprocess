import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.styles.css";

export const Searchbar = ({ term, handleSearchTerm }) => {
  const textInputHandler = (e) => {
    if (handleSearchTerm) {
      handleSearchTerm(e.target.value);
    }
  };

  return (
    <div className="search-bar">
      <input
        className="search-bar__field"
        type="text"
        placeholder="Pesquise por uma informação do processo"
        value={term}
        onInput={textInputHandler}
      />
      <button type="button" className="search-bar__button">
        <SearchIcon style={{ color: "var(--color-black-38)" }} />
      </button>
    </div>
  );
};
