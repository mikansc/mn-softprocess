import { useState } from "react";
import Input from "../components/Input";
import List from "../components/List";
import Button from "../components/Button";
import ProcessAPI from "../services/AxiosProcessService";
import "./ProcessNewModal.styles.css";
import { useHistory } from "react-router-dom";

export default function ProcessNewModal() {
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

  const deleteInteressadoHandler = (name) => {
    const filtered = interessados.filter((person) => !person.includes(name));
    setInteressados(filtered);
  };

  const history = useHistory();

  const saveNewProcessHandler = () => {
    const newProcess = {
      assunto,
      interessados,
      descricao,
    };
    ProcessAPI.createProcess(newProcess);
    history.push("/");
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
              value={assunto}
              onChange={(e) => setAssunto(e.target.value)}
              placeholder="Digite o assunto..."
              autofocus
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
            <Button type="submit" onClick={addInteressadoHandler}>
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
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite a descrição do processo..."
          />
        </div>
        <div className="form-footer">
          <Button filled onClick={saveNewProcessHandler}>
            SALVAR
          </Button>
        </div>
      </div>
    </div>
  );
}
