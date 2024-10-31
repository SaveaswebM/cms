import React from "react";
import Container from "react-bootstrap/container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/esm/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function Why() {
  return (
    <>
      <div className="why-bg-color container-top-space">
        <Container>
          <Row>
            <Col className="position-relative">
              <div className="mask-img"></div>
            </Col>
            <Col>
              <div>
                <h1>cfo support</h1>
                <h6 className="text-space">
                  Driving success virtually and seamlessly
                </h6>
                <ul>
                  <li className="custom-list ">
                    <Row>
                      <Col xl={3}>
                        {" "}
                        <div>
                          <FontAwesomeIcon
                            className="icon-wrapper"
                            icon={faEnvelope}
                            size="2xl"
                            style={{ color: "#74C0FC" }}
                          />
                        </div>
                      </Col>
                      <Col xl={9}>
                        {" "}
                        <div>
                          <h6>PROFESSIONAL ADVICE</h6>
                          <p>
                            Expert CFO guidance, without the high cost.
                            Partnering for business success
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="custom-list ">
                    <Row>
                      <Col xl={3}>
                        {" "}
                        <div>
                          <FontAwesomeIcon
                            className="icon-wrapper"
                            icon={faEnvelope}
                            size="2xl"
                            style={{ color: "#74C0FC" }}
                          />
                        </div>
                      </Col>
                      <Col xl={9}>
                        {" "}
                        <div>
                          <h6>PROFESSIONAL ADVICE</h6>
                          <p>
                            Expert CFO guidance, without the high cost.
                            Partnering for business success
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="custom-list ">
                    <Row>
                      <Col xl={3}>
                        {" "}
                        <div>
                          <FontAwesomeIcon
                            className="icon-wrapper"
                            icon={faEnvelope}
                            size="2xl"
                            style={{ color: "#74C0FC" }}
                          />
                        </div>
                      </Col>
                      <Col xl={9}>
                        {" "}
                        <div>
                          <h6>PROFESSIONAL ADVICE</h6>
                          <p>
                            Expert CFO guidance, without the high cost.
                            Partnering for business success
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </li>
                  <li className="custom-list ">
                    <Row>
                      <Col xl={3}>
                        {" "}
                        <div>
                          <FontAwesomeIcon
                            className="icon-wrapper"
                            icon={faEnvelope}
                            size="2xl"
                            style={{ color: "#74C0FC" }}
                          />
                        </div>
                      </Col>
                      <Col xl={9}>
                        {" "}
                        <div>
                          <h6>PROFESSIONAL ADVICE</h6>
                          <p>
                            Expert CFO guidance, without the high cost.
                            Partnering for business success
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Why;
