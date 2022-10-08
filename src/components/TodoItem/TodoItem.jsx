import "./style.scss";
import { useNavigate, useRouteError } from 'react-router-dom';
import { ROUTE } from "../../const";

//Functional Component
export const ToodoItem = (props) => {
  const navigate=useNavigate();
  const goToEditForm = ()=>{
    navigate(`${ROUTE.editForm}/${props.id}`);
  }
 
  return (
    <div className="todo-item"onClick={goToEditForm}>
      <p className="todo-item-title">Title:{props.title}</p>
      <p className="todo-item-creator">Creator: {props.creator}</p>
      <p className="todo-item-status">Status: {props.status}</p>
      <hr className="todo-item-divider" />
      <p className="todo-item-description">
        <b>Description:</b>
        {props.description}
      </p>
    </div>
  );
};
export default ToodoItem;