import { useEffect, useState } from "react";
import { useQuery } from "../hooks/useQuery";
import { toast } from "react-toastify";
import ProcessAPI from "../services/AxiosProcessService";
import DefaultPage from "../components/DefaultPage";
import DetailBox from "./DetailBox";
import Card from "./Card";
import "./ProcessList.styles.css";

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
        toast.error(error);
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
      <section className="process-content">
        <div className="process-content__left">
          {loading ? <p>Carregando...</p> : null}
          {processList.length > 0 ? (
            processList.map((process) => (
              <Card
                key={process.id}
                selected={hasSelected && process.id === processSelected.id}
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
      </section>
    </DefaultPage>
  );
};

export default ProcessList;
