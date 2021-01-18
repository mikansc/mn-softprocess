import "./Button.styles.css";

export const Button = ({ children, ...props }) => {
  return (
    <button {...props} className="btn global-btn-label textcolor-black-38">
      {children}
    </button>
  );
};
