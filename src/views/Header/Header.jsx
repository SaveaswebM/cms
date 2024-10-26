import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default function Header() {
  return (
    <>
      <div
        className="backgroundColor  z-10"
        style={{
          backgroundColor: "#3e4073",
          position: "sticky",
          top: "0"
        }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img width={100} src={logo} alt="logo"></img>
            </div>
            <div>
              <ul className="d-flex justify-content-between">
                <li className="nav-text">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-text">
                  {" "}
                  <Link to="/about">About</Link>{" "}
                </li>
                <li className="nav-text">
                  {" "}
                  <Link to="/contact">contact</Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
