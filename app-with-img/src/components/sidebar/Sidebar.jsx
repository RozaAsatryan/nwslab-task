import "./Sidebar.css";
import { useEffect, useState } from "react";
import { getCategories } from "../actions/getCategories";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [categories, setCategories] = useState([]);

  const getAllCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleClick = (e) => {
    e.target.classList.add("active");
    e.target.classList.remove("active");
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div className="sidebar-menu-wrapper">
      <ul className="sidebar-menu">
        {categories.map((elem) => (
          <NavLink
            key={elem.id}
            to={`/${elem.id}`}
            className="sidebar-menu-item"
            onClick={handleClick}
          >
            <li>{elem.name}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
