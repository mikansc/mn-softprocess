import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import SmallCard from "../ProcessDetailsPage/components/SmallCard";
import DetailBox from "./components/DetailBox";

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
          <SmallCard onClick={temp_changePage} />
        </div>
        <div className="details-content__right">
          <DetailBox />
        </div>
      </div>
    </div>
  );
};

export default ProcessDetailsPage;
