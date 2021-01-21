import "./ModalContainer.styles.css";

export const ModalContainer = ({ children, title }) => {
  return (
    <div className="modal-container">
      <h2 className="global-title">{title}</h2>
      <div className="modal-content">{children}</div>
    </div>
  );
};

const Form = ({ children }) => {
  return (
    <form className="form-row" onSubmit={(e) => e.preventDefault()}>
      {children}
    </form>
  );
};

const Row = ({ children }) => {
  return <div className="form-row">{children}</div>;
};

const Column = ({ children }) => {
  return <div className="form-column">{children}</div>;
};

const Footer = ({ children }) => {
  return <div className="form-footer">{children}</div>;
};

export const Content = {
  Form,
  Row,
  Column,
  Footer,
};
