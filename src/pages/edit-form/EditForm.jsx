import "./EditForm.scss";
// import ".././TodoItemList/TodoItemList"
import { useContext, useEffect, useState } from "react";
import { localStorageKey, TASK_STATUS } from "../../const";
import { localStorageUtil } from "../../components/utils";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { TodoListContext } from "../../context/TodoListContext";
// import { v4 as uuidv4 } from "uuid";
import clientServer from '../../server/clientServer';

function EditForm(props) {

  // const {data}=useContext(TodoListContext)

  const { set, get } = localStorageUtil(localStorageKey.todoItems, []);

  const { id } = useParams();

  const navigate = useNavigate();

  const { updateItem } = useContext(TodoListContext);

  const { deleteItem } = useContext(TodoListContext);

  //dinh nghia kieu du lieu
  const [todoItem, setTodoItem] = useState({
    id: "",
    title: "",
    creator: "",
    status: "",
    description: "",
  });

  const [defaultTodoList, setdefaultTodoList] = useState({
    id: "",
    title: "",
    creator: "",
    status: "",
    description: "",
  });
  useEffect(() => {
    clientServer.get(`todoItems/${id}`).then((res)=>{
      setTodoItem(res.data);
      setdefaultTodoList(res.data);
    }).catch((err)=>{console.log(err);})
    // const item = data.find((item) => item.id === id);
    // setTodoItem(item);
    // setdefaultTodoList(item);
  }, [id]);
  //e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(todoItem);
    // const list = JSON.parse(get());
    // const newList = list.map((item) => {
    //   if (item.id === todoItem.id) return todoItem;
    //   return item;
    // });
    // set([...newList]);
    // const newList = {
    //   title,
    //   creator,
    //   status,
    //   description,
    //   id: uuidv4(),
    // };
    updateItem(todoItem);
    // Chuyen ve trang truoc do
    navigate(-1);
  };
  // const handleDelete = (e) => {
  //   e.preventDefault();
  //   const list = JSON.parse(get());
  //   // tim vi tri
  //   const currentIndexItem = list.findIndex((item) => item.id === todoItem.id);
  //   // console.log(currentIndexItem);

  //   //xoa khoi mang
  //   list.splice(currentIndexItem, 1);
  //   set(list);
  //   navigate(-1);
  // };
  const handleDelete2 = (e) => {
    e.preventDefault();
    deleteItem(todoItem);
    navigate(-1);
  };
  const handleReset = (e) => {
    e.preventDefault();
    setTodoItem(defaultTodoList);
  };

  return (
    <div className="EditForm">
      <h1>EDIT FORM</h1>
      <div className="form">
        <label className="inputText">
          Title
          <input
            value={todoItem.title}
            onClick={(e) => {}}
            onChange={(e) => {
              setTodoItem({ ...todoItem, title: e.target.value });
            }}
            type="text"
            placeholder="Type title"
          />
        </label>
        <label className="inputText">
          Creator
          <input
            value={todoItem.creator}
            onClick={(e) => {}}
            onChange={(e) => {
              setTodoItem({ ...todoItem, creator: e.target.value });
            }}
            type="text"
            placeholder="Name of creator"
          />
        </label>
        {/* <label className="inputText">
          Status{" "}
          <input
            onChange={(e) => {
              setStatus(e.target.value);
            }}
            type="text"
            placeholder="Status"
          />
        </label> */}
        <label className="inputText">
          Description
          <input
            value={todoItem.description}
            onClick={(e) => {}}
            onChange={(e) => {
              setTodoItem({ ...todoItem, description: e.target.value });
            }}
            type="text"
            placeholder="Description"
          />
        </label>
      </div>
      <div
        defaultValue={todoItem.status}
        onChange={(e) => {
          setTodoItem({ ...todoItem, status: e.target.value });
        }}
      >
        <input
          type="radio"
          checked={todoItem.status === TASK_STATUS.new}
          value={TASK_STATUS.new}
          name="status"
        />
        {""} NEW
        <input
          type="radio"
          checked={todoItem.status === TASK_STATUS.doing}
          value={TASK_STATUS.doing}
          name="status"
        />
        {""} DOING
        <input
          type="radio"
          checked={todoItem.status === TASK_STATUS.done}
          value={TASK_STATUS.done}
          name="status"
        />
        {""} DONE
      </div>
      <div className="button">
      {/* <div>
        <input type="radio">
          <option value={TASK_STATUS.new}>{TASK_STATUS.new}</option>
          <option value={TASK_STATUS.doing}>{TASK_STATUS.doing}</option>
          <option value={TASK_STATUS.done}>{TASK_STATUS.done}</option>
        </input>
      </div> */}
      <button onClick={handleSubmit} type="submit" className="btn">
        SUBMIT
      </button>
      <button onClick={handleDelete2} type="submit" className="btn">
        DELETE
      </button>
      <button onClick={handleReset} type="submit" className="btn">
        RESET
      </button>
      </div>
    </div>
  );
}
export default EditForm;
