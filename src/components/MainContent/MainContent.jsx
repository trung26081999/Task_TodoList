import ".././MainContent/MainContent.scss";
import Pagination from ".././Pagination/Pagination";
import { useState } from "react";
import { LIST_PAGE } from "../../const/index";
import TodoItemList from "../../pages/TodoItemList/TodoItemList";
import AddNewForm from "../../pages/Form/AddNewForm";

function MainContent(props) {
  const [todoListData, setTodoListData] = useState([]);
  const { page } = props;
  const handleFormSubmit = (newTask) => {
    // console.log("MainContent",newTask);
    setTodoListData([newTask, ...todoListData]);
  };
  return (
    <div className="main-content">
      {/* Conditiononal renderring - render có điều kiện*/}
      {page === LIST_PAGE ? (
        <TodoItemList data={todoListData} />
      ) : (
        <AddNewForm handleFormSubmit={handleFormSubmit} />
      )}
      <Pagination />
    </div>
  );
}

export default MainContent;
