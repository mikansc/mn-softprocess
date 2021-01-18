import { Button } from "../components/Button";
import { Searchbar } from "../components/Searchbar";
import ProcessCard from "./components/ProcessCard";
import "./Process.styles.css";

const ProcessListPage = () => {
  return (
    <div className="process-container">
      <div className="process-bar">
        <h1 className="global-title">
          Busca de <br /> processos
        </h1>
        <Searchbar />
        <Button type="button">NOVO</Button>
      </div>
      <div className="process-content">
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
      </div>
    </div>
  );
};

export default ProcessListPage;
