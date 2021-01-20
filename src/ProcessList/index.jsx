import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import ProcessAPI from "../services/AxiosProcessService";
import DefaultPage from "../components/DefaultPage";
import DetailBox from "./components/DetailBox";
import Card from "./components/Card";
import "./Process.styles.css";

const ProcessList = () => {
  const [processList, setProcessList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSelected, setHasSelected] = useState(false);
  const [processSelected, setProcessSelected] = useState(null);

  const query = useQuery();
  const term = query.get("q");

  useEffect(() => {
    setLoading(true);
    setHasSelected(false);
    setProcessSelected(null);
    ProcessAPI.fetchProcess(term)
      .then((res) => {
        setProcessList(res.data);
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setLoading(false));
  }, [term]);

  const setSelectedCard = (id) => {
    const selected = processList.find((process) => process.id === id);
    if (processSelected && selected.id === processSelected.id) {
      setProcessSelected(null);
      setHasSelected(false);
    } else {
      setProcessSelected(selected);
      setHasSelected(true);
    }
  };

  return (
    <DefaultPage>
      <div className="process-content">
        <div className={`process-content__${hasSelected ? "left" : "full"}`}>
          {loading ? <p>Carregando...</p> : null}
          {processList.length > 0 ? (
            processList.map((process) => (
              <Card
                key={process.id}
                process={process}
                isSmall={hasSelected}
                onClick={() => setSelectedCard(process.id)}
              />
            ))
          ) : (
            <p>Nenhum processo encontrado.</p>
          )}
        </div>
        {hasSelected && (
          <div className="process-content__right">
            <DetailBox selectedProcess={processSelected} />
          </div>
        )}
      </div>
    </DefaultPage>
  );
};

export default ProcessList;
