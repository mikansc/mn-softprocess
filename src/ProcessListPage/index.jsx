import { useHistory } from "react-router-dom";
import { Button } from "../components/Button";
import Header from "../components/Header";
import { Searchbar } from "../components/Searchbar";
import ProcessCard from "./components/ProcessCard";
import "./Process.styles.css";

const ProcessListPage = () => {
  const history = useHistory();

  const temp_changePage = () => {
    history.push("/process/1");
  };
  return (
    <div className="process-container">
      <Header />
      <div className="process-content">
        <ProcessCard onClick={temp_changePage} />
        <ProcessCard onClick={temp_changePage} />
        <ProcessCard onClick={temp_changePage} />
        <ProcessCard onClick={temp_changePage} />
        <ProcessCard onClick={temp_changePage} />
        <ProcessCard onClick={temp_changePage} />
      </div>
    </div>
  );
};

export default ProcessListPage;
