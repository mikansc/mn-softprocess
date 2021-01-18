import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.styles.css";

export const Searchbar = ({ term, onTextInput, onButtonClick }) => {
  const textInputHandler = (e) => {
    if (onTextInput) {
      onTextInput(e.target.value);
    }
  };

  const buttonClickHandler = (e) => {
    e.preventDefault();
    if (onButtonClick) {
      onButtonClick();
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
