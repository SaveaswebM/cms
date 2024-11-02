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
            <Col
              lg={6}
              md={12}
              className="position-relative d-flex justify-content-center z-0"
            >
              <div className="mask-img"></div>
              <div className="shape">
                <Image
                  src="https://cfosupport.in/assets/img/images/about_shape01.png"
                  alt="background shape"
                />
              </div>
            </Col>
            <Col lg={6} md={12}>
              <div>
                <h1 className="text-uppercase">cfo support</h1>
                <h4 className="text-space">
                  Driving success virtually and seamlessly
                </h4>
                <ul className="pl-0">
                  <li className="custom-list ">
                    <Row>
                      <Col xl={2}>
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
                      <Col xl={2}>
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
                      <Col xl={2}>
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
                      <Col xl={2}>
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
