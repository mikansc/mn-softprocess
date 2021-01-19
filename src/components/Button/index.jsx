import "./Button.styles.css";

export const Button = ({ children, primary = false, ...props }) => {
  return (
    <button
      {...props}
      className={`btn global-btn-label textcolor-black-38 ${
        primary ? "primary" : ""
      }`}
    >
      {children}
    </button>
  );
};
