import Input from "../components/Input";
import List from "../components/List";
import Button from "../components/Button";
import "./ProcessNewModal.styles.css";
import { useState } from "react";

export default function ProcessNewModal() {
  const [interessado, setInteressado] = useState("");
  const [interessados, setInteressados] = useState([]);

  const addInteressadoHandler = () => {
    if (interessado !== "") {
      setInteressados([...interessados, interessado]);
      setInteressado("");
    }
  };

  return (
    <div className="process-new-container">
      <h2 className="global-title">Cadastro de processo</h2>
      <div className="process-new-content">
        <div className="form-row">
          <div className="form-column">
            <Input
              type="text"
              label="Assunto"
              name="assunto"
              id="assunto"
              placeholder="Digite o assunto..."
              autofocus
            />
          </div>
        </div>
        <div className="form-row">
          <List canEdit title="Interessados" items={interessados} />
        </div>

        <form className="form-row" onSubmit={(e) => e.preventDefault()}>
          <div className="form-column">
            <Input
              type="text"
              label="Novo interessado"
              name="listaInteressados"
              id="listaInteressados"
              value={interessado}
              onChange={(e) => setInteressado(e.target.value)}
              placeholder="Digite o assunto..."
            />
          </div>
          <div className="form-column">
            <Button type="submit" onClick={addInteressadoHandler}>
              Adicionar
            </Button>
          </div>
        </form>

        <div className="form-row">
          <Input
            type="textarea"
            label="Novo interessado"
            name="listaInteressados"
            id="assunto"
            placeholder="Digite a descrição do processo..."
          />
        </div>
        <div className="form-footer">
          <Button filled>SALVAR</Button>
        </div>
      </div>
    </div>
  );
}
