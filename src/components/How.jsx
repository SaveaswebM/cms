import React from "react";
import Container from "react-bootstrap/esm/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";
function How() {
  return (
    <>
      <div className="text-center container-y-space ">
        <div>
          <h1>HOW DO WE SUPPORT</h1>
          <h4>
            Discover how our support can drive your business towards success
          </h4>
        </div>
        <div className="mt-5">
          <Row className="px-4">
            <Col className="padding-card">
              <Cards title="card1" text="Some quick example text to build on the card title and make up the
            bulk of the card's content." />
            </Col>
            <Col className="padding-card">
              <Cards title="card2" text="Some quick example text to build on the card title and make up the
            bulk of the card's content." />
            </Col>
            <Col className="padding-card">
              <Cards title="card3" text="Some quick example text to build on the card title and make up the
            bulk of the card's content." />
            </Col>
            <Col className="padding-card">
              <Cards title="card4" text="Some quick example text to build on the card title and make up the
            bulk of the card's content." />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default How;
