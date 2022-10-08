import { Route, Routes } from "react-router";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import { localStorageKey, ROUTE, TASK_STATUS } from "./const";
import AddNewForm from "./pages/Form/AddNewForm";
import TodoItemList from "./pages/TodoItemList/TodoItemList";
import EditForm from "./pages/edit-form/EditForm";
import { TodoListContext } from "./context/TodoListContext";
import { useState } from "react";
import { useEffect } from "react";
// import { localStorageUtil } from "./components/utils";
import clientServer from "./server/clientServer";

//This is a components
function App() {
  // const { get, set } = localStorageUtil(localStorageKey.todoItems, []);
  const [todoList, setTodoList] = useState([]);

  //componentdidmount
  useEffect(() => {
    fetchTodoItem();
    // const listFromLocalStorage = JSON.parse(get());
    // setTodoList(listFromLocalStorage);
  }, []);

  const fetchTodoItem = () => {
    clientServer
      .get("todoItems")
      .then((res) => {
        setTodoList((res.data ?? []).reverse());
      })
      .catch((e) => {
        console.log("error", e);
      });
  };

  const handleAddItem = (newTask) => {
    clientServer
      .post("todoItems", newTask)
      .then((res) => {
        console.log(res);
        fetchTodoItem();
      })
      .catch((err) => {
        console.log(err);
      });

    // const oldList = JSON.parse(get());
    // const newList = [newTask, ...oldList];
    // setTodoList(newList);
    // set(newList);
  };
  const handleUpdateItem = (updateTask) => {
    clientServer
      .patch(`todoItems/${updateTask.id}`, updateTask)
      .then((res) => {
        console.log(res);
        fetchTodoItem();
      })
      .catch((err) => {
        console.log(err);
      });
    // const list = JSON.parse(get());
    // // console.log(todoItem.id);
    // const newList = list.map((item) => {
    //   if (item.id === todoItem.id) return todoItem;
    //   return item;
    // })
    // setTodoList(newList);
    // set([...newList]);
  };

  const handleDeleteItem = (todoItem) => {
    // console.log(id);
    clientServer
      .delete(`todoItems/${todoItem.id}`)
      .then((res) => {
        console.log(res);
        fetchTodoItem();
      })
      .catch((err) => {
        console.log("error: ", err);
      });

    // const list = JSON.parse(get());
    // const currentItemIndex = list.findIndex((item) => item.id === todoItem.id);
    // list.splice(currentItemIndex, 1);
    // set(list);
  };

  return (
    <TodoListContext.Provider
      value={{
        data: todoList,
        addItem: (newTask) => handleAddItem(newTask),
        updateItem: (todoItem) => handleUpdateItem(todoItem),
        deleteItem: (todoItem) => handleDeleteItem(todoItem),
      }}
    >
      <div className="App">
        <Routes>
          <Route
            path={ROUTE.all}
            element={<MainLayout content={<TodoItemList />} />}
          />
          <Route
            path={ROUTE.new}
            element={
              <MainLayout content={<TodoItemList status={TASK_STATUS.new} />} />
            }
          />
          <Route
            path={ROUTE.doing}
            element={
              <MainLayout
                content={<TodoItemList status={TASK_STATUS.doing} />}
              />
            }
          />
          <Route
            path={ROUTE.done}
            element={
              <MainLayout
                content={<TodoItemList status={TASK_STATUS.done} />}
              />
            }
          />
          <Route
            path={ROUTE.addNew}
            element={<MainLayout content={<AddNewForm />} />}
          />
          <Route
            path={`${ROUTE.editForm}/:id`}
            element={<MainLayout content={<EditForm />} />}
          />
        </Routes>
        {/* <MainLayout /> */}
        {/* <ToodoItem /> */}
        {/* <TodoItemList /> */}
      </div>
    </TodoListContext.Provider>
  );
}

export default App;
