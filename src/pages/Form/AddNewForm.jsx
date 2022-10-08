import ".././Form/AddNewForm.scss";
import { useContext, useState } from "react";
import { localStorageKey, TASK_STATUS } from "../../const";
import { localStorageUtil } from "../../components/utils";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { TodoListContext } from "../../context/TodoListContext";

function AddNewForm(props) {
  const { addItem } = useContext(TodoListContext);
  const { set, get } = localStorageUtil(localStorageKey.todoItems, []);
  const [title, setTitle] = useState();
  const [creator, setCreator] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();

  const navigate = useNavigate();

  //e: Synthetic Event
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      creator,
      status,
      description,
      id: uuidv4(),
    };

    addItem(newTask);
    navigate(-1);
  };
  return (
    <div className="formClassContainer">
      <h1>ADD NEW FORM</h1>
      <div className="form">
        <label className="inputText">
          Title{" "}
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Type title"
          />
        </label>
        <label className="inputText">
          Creator{" "}
          <input
            onChange={(e) => {
              setCreator(e.target.value);
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
          Description{" "}
          <input
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
            placeholder="Description"
          />
        </label>
      </div>
      <div
        onChange={(e) => {
          setStatus(e.target.value);
        }}
      >
        <input type="radio" value={TASK_STATUS.new} name="status" /> NEW
        <input type="radio" value={TASK_STATUS.doing} name="status" /> DOING
        <input type="radio" value={TASK_STATUS.done} name="status" /> DONE
      </div>
      <div></div>
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
    </div>
  );
}

// export default AddNewForm;

export default AddNewForm;
