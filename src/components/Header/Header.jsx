import ".././Header/Header.scss";
// import { FORM_PAGE } from "../../const/index";
// import { LIST_PAGE } from "../../const/index";
// import { getNextPage } from "../utils/index";
import { ROUTE } from "../../const/index.js";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  const { onOpenFormPage, page } = props;
  const onAddButtonClick = () => {
    navigate(ROUTE.addNew);
    // const nextPage = getNextPage(page);
    // onOpenFormPage(nextPage);
  };
  return (
    <div className="header">
      <div className="header-left">
        <button onClick={onAddButtonClick} className="header-title">
          Create New Task
        </button>
      </div>
      <div className="header-text">
        <input type="text" placeholder="Type something to search" />
        <button className="btn-search">Search</button>
      </div>
    </div>
  );
}

export default Header;
