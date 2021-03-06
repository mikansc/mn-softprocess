import { useState } from "react";
import { toast } from "react-toastify";
import ProcessAPI from "../services/AxiosProcessService";
import Input from "../components/Input";
import {
  ModalContainer,
  Content,
} from "../components/Modal/ModalContainer/ModalContainer";
import List from "../components/List";
import Button from "../components/Button";

export default function ProcessNewModal({ close = null }) {
  const [interessado, setInteressado] = useState("");
  const [interessados, setInteressados] = useState([]);
  const [assunto, setAssunto] = useState("");
  const [descricao, setDescricao] = useState("");

  const addInteressadoHandler = () => {
    if (interessado !== "") {
      setInteressados([...interessados, interessado]);
      setInteressado("");
    }
  };

  const deleteInteressadoHandler = (filterIdx) => {
    const filtered = interessados.filter((_, index) => index !== filterIdx);
    setInteressados(filtered);
  };

  const saveNewProcessHandler = () => {
    const newProcess = {
      assunto,
      interessados,
      descricao,
    };
    ProcessAPI.createProcess(newProcess)
      .then(() => {
        return toast.info("Processo criado com sucesso!");
      })
      .catch((error) => {
        return toast.error(error);
      })
      .finally(() => {
        close();
      });
  };

  return (
    <ModalContainer title="Cadastro de processo">
      <Content.Row>
        <Content.Column>
          <Input
            type="text"
            label="Assunto"
            name="assunto"
            id="assunto"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            placeholder="Digite o assunto..."
            autofocus
          />
        </Content.Column>
      </Content.Row>
      <Content.Row>
        <Content.Column>
          <List
            canEdit
            title="Interessados"
            items={interessados}
            onDelete={deleteInteressadoHandler}
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
          <Button type="submit" onClick={addInteressadoHandler}>
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
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Digite a descrição do processo..."
        />
      </Content.Row>
      <Content.Footer>
        <Button filled onClick={saveNewProcessHandler}>
          SALVAR
        </Button>
      </Content.Footer>
    </ModalContainer>
  );
}
