import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <>
      <header>
        <ul className="navUl">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user/add">Users</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
