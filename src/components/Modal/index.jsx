import ReactDOM from "react-dom";

import CloseIcon from "@material-ui/icons/Close";

const MODAL_STYLES = {
  zIndex: 10,
  width: "100%",
  minHeight: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,0.6)",
  overflow: "auto",
};

const CONTENT_STYLES = {
  zIndex: 20,
  width: "100%",
  maxWidth: "840px",
  backgroundColor: "#FFF",
  padding: "1em",
  boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.3)",
};

const CLOSE_BUTTON_STYLES = {
  zIndex: 25,
  float: "right",
  maxWidth: "840px",
  backgroundColor: "transparent",
  padding: "0.25em",
  cursor: "pointer",
  border: "none",
};

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  const closeButtonHandler = () => {
    onClose();
  };

  return ReactDOM.createPortal(
    <div style={MODAL_STYLES}>
      <div style={CONTENT_STYLES}>
        <button style={CLOSE_BUTTON_STYLES} onClick={closeButtonHandler}>
          <CloseIcon />
        </button>
        <div>{children}</div>
      </div>
    </div>,
    document.getElementById("portal")
  );
}
