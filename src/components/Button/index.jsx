import "./Button.styles.css";

const Button = (props) => {
  const { children, primary = false, filled = false, onClick, ...rest } = props;

  const onClickHandler = () => {
    if (onClick) onClick();
  };

  return (
    <button
      className={`btn global-btn-label textcolor-black-38 
    ${primary ? "primary" : ""}
    ${filled ? "filled" : ""}
    `}
      onClick={onClickHandler}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
