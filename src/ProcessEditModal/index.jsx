import { useState, useEffect } from "react";
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

  const deleteInteressadoHandler = (name) => {
    const filtered = interessados.filter((person) => !person.includes(name));
    setInteressados(filtered);
  };

  const handleUpdateProcess = () => {
    console.log({ id: process.id, assunto, interessados, descricao });
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
            onChange={setAssunto}
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
          onChange={setDescricao}
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
