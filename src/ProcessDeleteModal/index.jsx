import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import ProcessAPI from "../services/AxiosProcessService";

export default function ProcessDeleteModal({ process, onCancel }) {
  const history = useHistory();

  const deleteHandler = () => {
    ProcessAPI.deleteProcess(process.id);
    history.push("/");
  };

  return (
    <div>
      <h1 className="global-title">
        Remover processo <strong>{process.numero}</strong>
      </h1>
      <p>Tem certeza que deseja remover o processo n. {process.numero}?</p>
      <div className="delete-modal-footer">
        <Button primary onClick={deleteHandler}>
          Confirmar
        </Button>
        <Button filled onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
