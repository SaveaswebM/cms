import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <h1>
          <Link to="/about">about</Link>
        </h1>
        <h1>
          <Link to="/contact">contact</Link>
        </h1>
      </div>
    </>
  );
}
