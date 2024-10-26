import React from "react";
import Container from "react-bootstrap/container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/esm/Image";

function Why() {
  return (
    <>
      <Container>
        <Row>
          <Col className="position-relative">
            <div>
              <Image src="https://cfosupport.in/assets/img/images/mask_img.png" />
            </div>
            <div className="position-absolute top-0">
            <Image src="https://cfosupport.in/assets/img/images/about_img01.jpg" />

            </div>
          </Col>
          <Col>
          <div>
<h1>cfo support</h1>

          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Why;
