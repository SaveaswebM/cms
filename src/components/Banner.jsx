import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "./ExampleCarouselImage";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Image } from "react-bootstrap";

function Banner() {
  const [banner, setBanner] = useState([]);
  useEffect(() => {
    async function getBanner() {
      try {
        const response = await fetch("http://localhost:4000/get-banner");
        if (response) {
          const data = await response.json();
          // console.log("banner data", data.data);
          setBanner(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }

    getBanner();
  }, []);
  return (
    <Carousel className="mt-5 mb-5">
      {banner.map((item) => {
        return (
          <Carousel.Item>
            <Container>
              <Row>
                <Col className="d-flex justify-content-center align-items-center">
                  <div>
                    <h1>{item.heading}</h1>
                  </div>
                </Col>
                <Col>
                  <Image src={item.image} alt="banner image" />
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
        );
      })}
      {/* <Carousel.Item>
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
   
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Banner;
