import "./Input.styles.css";

export default function Input(props) {
  const {
    type,
    id,
    name,
    placeholder,
    label,
    value,
    onInput,
    onChange,
    autofocus,
    readonly,
    children,
    ...rest
  } = props;

  return (
    <div className="input-group">
      <label className="global-subtitle textcolor-black-54" htmlFor={id}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          rows="4"
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          autoFocus={autofocus}
          readOnly={readonly}
          {...rest}
          value={value}
        />
      ) : (
        <input
          id={id}
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoFocus={autofocus}
          readOnly={readonly}
          {...rest}
        />
      )}
      {children}
    </div>
  );
}
