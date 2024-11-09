import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServicesButton from "./ServicesButton";
import ServicesCard from "./ServicesCard";

function Services() {
  const [selectId, setSelectId] = useState(null);
  return (
    <>
      <Container className="container-y-space ">
        <div className="text-center">
          <h1>SERVICES OFFERED</h1>
          <h4>Discover Our Services</h4>
        </div>

        <div>
          <Row>
            <Col lg={6}>
              <div>
                {" "}
                <ServicesButton
                  id={1}
                  text="FINANCIAL PLANNING & MANAGEMENT"
                  setSelectId={setSelectId}
                />
              </div>
              <div>
                {" "}
                <ServicesButton
                  id={2}
                  text="STRATEGIC PLANNING"
                  setSelectId={setSelectId}
                />
              </div>{" "}
              <div>
                {" "}
                <ServicesButton
                  id={3}
                  text="STANDARD OPERATING PROCEDURES"
                  setSelectId={setSelectId}
                />
              </div>{" "}
              <div>
                {" "}
                <ServicesButton
                  id={4}
                  text="WORKING CAPITAL MANAGEMENT"
                  setSelectId={setSelectId}
                />
              </div>
              <div>
                {" "}
                <ServicesButton
                  id={5}
                  text="PEOPLE"
                  setSelectId={setSelectId}
                />
              </div>
            </Col>
            <Col lg={6}>
              <ServicesCard id={selectId} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Services;
