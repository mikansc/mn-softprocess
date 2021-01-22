import DeleteIcon from "@material-ui/icons/Delete";
import "./List.styles.css";

export default function List({ title, items, canEdit, onDelete }) {
  return (
    <div className="list-container">
      <h2 className="global-subtitle textcolor-black-54">{title}</h2>
      {items && items.length > 0 ? (
        <ul className="list-items">
          {items.map((name, idx) => (
            <li key={`${name}-${idx}`}>
              {name}
              {canEdit && (
                <button className="delete-button" onClick={() => onDelete(idx)}>
                  <DeleteIcon
                    style={{ fontSize: 16, color: "var(--color-black-54)" }}
                  />
                </button>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <span>Nenhum nome na lista.</span>
      )}
    </div>
  );
}
