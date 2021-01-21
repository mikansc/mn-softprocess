import { useState, useEffect } from "react";
import Input from "../components/Input";
import List from "../components/List";
import Button from "../components/Button";
// import "./ProcessEditModal.styles.css";

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
    <div className="process-new-container">
      <h2 className="global-title">
        Editar processo <strong>{process.numero}</strong>
      </h2>
      <div className="process-new-content">
        <div className="form-row">
          <div className="form-column">
            <Input
              type="text"
              label="Assunto"
              name="assunto"
              id="assunto"
              value={assunto}
              onChange={setAssunto}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-column">
            <List
              canEdit
              title="Interessados"
              items={interessados}
              onDelete={deleteInteressadoHandler}
            />
          </div>
        </div>

        <form className="form-row" onSubmit={(e) => e.preventDefault()}>
          <div className="form-column">
            <Input
              type="text"
              label="Novo interessado"
              name="interessado"
              id="interessado"
              value={interessado}
              onChange={(e) => setInteressado(e.target.value)}
              placeholder="Digite o nome do interessado..."
            />
          </div>
          <div className="form-column">
            <Button type="submit" onClick={handleAddInteressado}>
              Adicionar
            </Button>
          </div>
        </form>

        <div className="form-row">
          <Input
            type="textarea"
            label="Descrição"
            name="descricao"
            id="descricao"
            placeholder="Digite a descrição do processo..."
            value={descricao}
            onChange={setDescricao}
          />
        </div>
        <div className="form-footer">
          <Button filled onClick={handleUpdateProcess}>
            SALVAR
          </Button>
          <Button onClick={onCancel}>Cancelar</Button>
        </div>
      </div>
    </div>
  );
}
