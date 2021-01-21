import { useHistory } from "react-router-dom";
import ProcessAPI from "../services/AxiosProcessService";
import Button from "../components/Button";
import {
  Content,
  ModalContainer,
} from "../components/Modal/ModalContainer/ModalContainer";

export default function ProcessDeleteModal({ process, onCancel }) {
  const history = useHistory();

  const deleteHandler = () => {
    ProcessAPI.deleteProcess(process.id);
    history.push("/");
  };

  return (
    <ModalContainer title={`Remover processo ${process.numero}`}>
      <p>Tem certeza que deseja remover o processo {process.numero}?</p>
      <Content.Footer>
        <Button primary onClick={deleteHandler}>
          Confirmar
        </Button>
        <Button filled onClick={onCancel}>
          Cancelar
        </Button>
      </Content.Footer>
    </ModalContainer>
  );
}
