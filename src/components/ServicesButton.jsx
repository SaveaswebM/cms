import React from "react";
import { Button } from "react-bootstrap";

function ServicesButton({ setSelectId, id, text }) {
  async function handleServices() {
    setSelectId(id);
  }
  return (
    <>
      <div className="services-button-div">
        <Button className="services-btn" onClick={handleServices}>
          {" "}
          {text}
        </Button>
      </div>
    </>
  );
}

export default ServicesButton;
