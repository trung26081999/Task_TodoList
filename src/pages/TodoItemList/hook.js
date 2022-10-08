//custom hook
import { useContext, useState } from "react";
import { TodoListContext } from "../../context/TodoListContext";
import { useEffect } from "react";
export const useTodoItemList = (status) => {
  const { data } = useContext(TodoListContext);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    //cho truong hop all
    if (!status) {
      setCurrentData(data);
      return;
    }
    //filter status cua moi trang
    const filterList = data.filter((item) => item?.status === status);
    setCurrentData(filterList);
  }, [data, status]);
  // console.log(data);

  return {
    currentData,
  };
};

export const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  const jumpPage = (nextPage) => {
    if (nextPage === currentPage) return;
    setCurrentPage(nextPage);
  };
  const currentData = () => {
    const startIndex = (currentPage - 1) *itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataPerPage = data.slice(startIndex, endIndex);
    return dataPerPage;
  };
  return {
    jumpPage,
    dataPerPage: currentData(),
    currentPage,
    maxPage,
  };
};
