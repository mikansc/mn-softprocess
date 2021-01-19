import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Card from "./components/Card";
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
        <Card onClick={temp_changePage} />
        <Card onClick={temp_changePage} />
        <Card onClick={temp_changePage} />
        <Card onClick={temp_changePage} />
        <Card onClick={temp_changePage} />
        <Card onClick={temp_changePage} />
      </div>
    </div>
  );
};

export default ProcessListPage;
