import DeleteIcon from "@material-ui/icons/Delete";
import "./List.styles.css";

export default function List({ title, items, canEdit }) {
  return (
    <div className="detail-info">
      <h2 className="global-subtitle textcolor-black-54">{title}</h2>
      {items && items.length > 0 ? (
        <ul className="detail-list">
          {items.map((item, idx) => (
            <li key={`${item}-${idx}`}>
              {item}
              {canEdit && (
                <button className="delete-button">
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
