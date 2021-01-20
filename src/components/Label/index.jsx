import "./Label.styles.css";

const Label = ({ text, children, smallLabel = false, selected = false }) => {
  return (
    <div className={`label__info ${smallLabel ? "shrink" : ""}`}>
      <h3
        style={selected ? { color: "var(--color-primary)" } : null}
        className="global-subtitle textcolor-black-54"
      >
        {text}
      </h3>
      <span style={selected ? { color: "var(--color-primary)" } : null}>
        {children}
      </span>
    </div>
  );
};

export default Label;
