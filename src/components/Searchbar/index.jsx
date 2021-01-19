import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.styles.css";

const Searchbar = ({ term, onTextInput, onSearch }) => {
  const textInputHandler = (e) => {
    if (onTextInput) {
      onTextInput(e.target.value);
    }
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch();
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
      <button
        type="button"
        className="search-bar__button"
        onClick={buttonClickHandler}
      >
        <SearchIcon style={{ color: "var(--color-black-38)" }} />
      </button>
    </div>
  );
};

export default Searchbar;
