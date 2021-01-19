import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import ProcessSmCard from "../ProcessDetailsPage/components/ProcessSmCard";
import ProcessDetail from "./components/ProcessDetail";

import "./ProcessDetails.styles.css";

const ProcessDetailsPage = () => {
  const history = useHistory();

  const temp_changePage = () => {
    history.push("/process");
  };

  return (
    <div className="details-container">
      <Header />
      <div className="details-content">
        <div className="details-content__left">
          <ProcessSmCard onClick={temp_changePage} />
        </div>
        <div className="details-content__right">
          <ProcessDetail />
        </div>
      </div>
    </div>
  );
};

export default ProcessDetailsPage;
