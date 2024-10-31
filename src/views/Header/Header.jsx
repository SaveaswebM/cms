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
          backgroundColor: "#586f7c",
          position: "sticky",
          top: "0",
        }}
      >
        <Container>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img width={100} src={logo} alt="logo"></img>
            </div>
            <div>
              <ul className="d-flex justify-content-between">
                <li className="custom-list ">
                  <Link to="/" className="nav-text ">
                    Home
                  </Link>
                </li>
                <li className=" custom-list ">
                  {" "}
                  <Link to="/about" className="nav-text ">
                    About
                  </Link>{" "}
                </li>
                <li className=" custom-list ">
                  {" "}
                  <Link to="/contact" className="nav-text ">
                    contact
                  </Link>{" "}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
