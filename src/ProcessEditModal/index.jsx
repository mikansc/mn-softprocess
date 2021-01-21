import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import ProcessAPI from "../services/AxiosProcessService";
import Input from "../components/Input";
import List from "../components/List";
import Button from "../components/Button";
import {
  Content,
  ModalContainer,
} from "../components/Modal/ModalContainer/ModalContainer";

export default function ProcessEditModal({ process, onCancel = null }) {
  const [interessado, setInteressado] = useState("");
  const [assunto, setAssunto] = useState("");
  const [interessados, setInteressados] = useState([]);
  const [descricao, setDescricao] = useState("");
  const history = useHistory();

  const {
    assunto: pAssunto,
    descricao: pDescricao,
    interessados: pInteressados,
  } = process;

  useEffect(() => {
    setAssunto(pAssunto);
    setInteressados(pInteressados);
    setDescricao(pDescricao);
  }, [pAssunto, pDescricao, pInteressados]);

  const handleAddInteressado = () => {
    if (interessado !== "") {
      setInteressados([...interessados, interessado]);
      setInteressado("");
    }
  };

  const handleDeleteInteressado = (name) => {
    const filtered = interessados.filter((person) => !person.includes(name));
    setInteressados(filtered);
  };

  const handleUpdateProcess = () => {
    const updatedProcess = { assunto, interessados, descricao };
    ProcessAPI.updateProcess(process.id, updatedProcess)
      .then(() => {
        return toast.info("Processo atualizado com sucesso!");
      })
      .catch((error) => {
        return toast.error(error);
      })
      .finally(() => {
        history.push("/");
      });
  };

  return (
    <ModalContainer title={`Editar processo ${process.numero}`}>
      <Content.Row>
        <Content.Column>
          <Input
            type="text"
            label="Assunto"
            name="assunto"
            id="assunto"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
          />
        </Content.Column>
      </Content.Row>
      <Content.Row>
        <Content.Column>
          <List
            canEdit
            title="Interessados"
            items={interessados}
            onDelete={handleDeleteInteressado}
          />
        </Content.Column>
      </Content.Row>
      <Content.Form>
        <Content.Column>
          <Input
            type="text"
            label="Novo interessado"
            name="interessado"
            id="interessado"
            value={interessado}
            onChange={(e) => setInteressado(e.target.value)}
            placeholder="Digite o nome do interessado..."
          />
        </Content.Column>
        <Content.Column>
          <Button type="submit" onClick={handleAddInteressado}>
            Adicionar
          </Button>
        </Content.Column>
      </Content.Form>
      <Content.Row>
        <Input
          type="textarea"
          label="Descrição"
          name="descricao"
          id="descricao"
          placeholder="Digite a descrição do processo..."
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </Content.Row>
      <Content.Footer>
        <Button filled onClick={handleUpdateProcess}>
          SALVAR
        </Button>
        <Button onClick={onCancel}>Cancelar</Button>
      </Content.Footer>
    </ModalContainer>
  );
}
