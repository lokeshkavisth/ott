import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

export default function Navbar(props) {
  const menuToggle = () => {
    $(".link-container").slideToggle("slow");
  };
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">{props.logo}</Link>
      </div>
      <div className="navLinks">
        <div className="menu" onClick={menuToggle}></div>

        <ul className="link-container">
          <li>
            <Link to="/">{props.home}</Link>
          </li>
          <li>
            <Link to="/about">{props.about}</Link>
          </li>
          <li>
            <a href="#userguide">{props.userguide}</a>
          </li>
          <li>
            <a href="#contact">{props.contact}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
