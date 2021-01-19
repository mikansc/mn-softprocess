import "./Label.styles.css";

const Label = ({ text, children, smallCard = false, selected = false }) => {
  return (
    <div className={`process-card__info ${smallCard ? "shrink" : ""}`}>
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
