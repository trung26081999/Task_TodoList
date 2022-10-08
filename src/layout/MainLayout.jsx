import Header from "../components/Header/Header";
import MainContent from "../components/MainContent/MainContent";
import SideBar from "../components/SideBar/SideBar";
import "./MainLayout.scss";
import { useState } from "react";
import { FORM_PAGE, LIST_PAGE } from "../const/index";

function MainLayout(props) {
  const { content } = props;
  const [currentPage, setCurrentPage] = useState(LIST_PAGE);
  // const handleChangeRenderMode=(mode=MODE.ADD_NEW_FORM)=>{
  //   setRenderMode(mode);
  // }

  return (
    <div className="main-layout">
      {/* Callback */}
      <Header page={currentPage} onOpenFormPage={setCurrentPage} />
      <div className="content-layout">
        <SideBar />
        {content}
        {/* <MainContent page={currentPage} /> */}
      </div>
    </div>
  );
}

export default MainLayout;
