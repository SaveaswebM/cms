import React from "react";
import Container from "react-bootstrap/esm/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";
function How() {
  return (
    <>
      <Container className="text-center container-y-space ">
        <div>
          <h1>HOW DO WE SUPPORT</h1>
          <h4>
            Discover how our support can drive your business towards success
          </h4>
        </div>
        <div className="mt-5">
          <Row>
            <Col>
              <Cards title="card1" />
            </Col>
            <Col>
              <Cards title="card2" />
            </Col>
            <Col>
              <Cards title="card3" />
            </Col>
            <Col>
              <Cards title="card4" />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default How;
