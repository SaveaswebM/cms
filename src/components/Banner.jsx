import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function Banner() {
  return (
    <Carousel className="mt-5">
      <Carousel.Item>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <h1>Your search for a CFO ends here</h1>
              </div>
            </Col>
            <Col>
              <ExampleCarouselImage text="First slide" />
            </Col>
          </Row>
        </Container>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <h1>Your search for a CFO ends here</h1>
              </div>
            </Col>
            <Col>
              <ExampleCarouselImage text="First slide" />
            </Col>
          </Row>
        </Container>{" "}
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Container>
          <Row>
            <Col className="d-flex justify-content-center align-items-center">
              <div>
                <h1>Your search for a CFO ends here</h1>
              </div>
            </Col>
            <Col>
              <ExampleCarouselImage text="First slide" />
            </Col>
          </Row>
        </Container>{" "}
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
