import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div
        className="backgroundColor"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#3e4073",
          position: "sticky",
          top: "0",
        }}
      >
        <div>
          <img width={100} src={logo} alt="logo"></img>
        </div>
        <div>
          <ul className="d-flex justify-content-between">
            <li className="nav-text"><Link to="/">Home</Link></li>
            <li className="nav-text"> <Link to="/about">About</Link> </li>
            <li className="nav-text"> <Link to="/contact">contact</Link> </li>
          </ul>
        </div>
      </div>
    </>
  );
}
