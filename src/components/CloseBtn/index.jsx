import CloseIcon from "@material-ui/icons/Close";
import "./CloseBtn.styles.css";

const CLOSE_BUTTON_STYLES = {
  zIndex: 25,
  float: "right",
  maxWidth: "840px",
  backgroundColor: "transparent",
  padding: "0.25em",
  cursor: "pointer",
  border: "none",
};

export default function CloseBtn({ onClose }) {
  return (
    <button className="close-btn" onClick={onClose}>
      <CloseIcon />
    </button>
  );
}
