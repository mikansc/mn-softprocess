import Button from "../components/Button";
import React from "react";

export default function ProcessDeleteModal({ process, onCancel }) {
  return (
    <div>
      <h1 className="global-title">
        Remover processo <strong>{process.numero}</strong>
      </h1>
      <p>Tem certeza que deseja remover o processo n. {process.numero}?</p>
      <div className="form-footer">
        <Button primary>Confirmar</Button>
        <Button filled onClick={onCancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
