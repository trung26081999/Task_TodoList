import { SIDEBAR_ITEMS } from "../../const";
import { Link } from "react-router-dom";
import "./SideBar.scss";

function SideBar() {
  return (
    <div className="side-bar">
      {SIDEBAR_ITEMS.map((item,index)=><Link key={index} to={item.link}><div className="side-bar-item">{item.label}</div></Link>)}
    </div>
  );
}

export default SideBar;
