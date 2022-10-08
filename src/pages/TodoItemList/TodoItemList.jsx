import "../TodoItemList/TodoItemList.scss";
import { ToodoItem } from "../../components/TodoItem/TodoItem";
import { usePagination, useTodoItemList } from "./hook";
import Pagination from "../../components/Pagination/Pagination";
import { ITEM_PER_PAGE } from "../../const";

const TodoItemList = (props) => {
  const { currentData } = useTodoItemList(props.status);
  const { jumpPage, dataPerPage, currentPage, maxPage } = usePagination(
    currentData,
    ITEM_PER_PAGE
  );
  return (
    <div className="todo-item-list-container">
      <div className="todo-item-list">
        {dataPerPage.map((item, index) => {
          return (
            <ToodoItem
              key={index}
              title={item.title}
              creator={item.creator}
              status={item.status}
              description={item.description}
              id={item.id}
            />
          );
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        jumpPage={jumpPage}
        maxPage={maxPage}
      />
    </div>
  );
};
export default TodoItemList;
