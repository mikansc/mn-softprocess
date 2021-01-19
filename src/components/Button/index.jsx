import "./Button.styles.css";

const Button = ({ children, primary = false, filled = false, ...props }) => {
  return (
    <button
      {...props}
      className={`btn global-btn-label textcolor-black-38 
        ${primary ? "primary" : ""}
        ${filled ? "filled" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
