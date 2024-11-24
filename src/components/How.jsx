import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cards from "./Cards";
function How() {
  const [data, setData] = useState({});
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    async function getServices() {
      const response = await fetch("http://localhost:4000/get-services");
      if (response.ok) {
        const data = await response.json();
        const componentData = data.data;
        setData(componentData);
        setCardData(componentData.card);
      }
    }
    getServices();
  }, []);
  console.log(data);

  return (
    <>
      <div className="text-center container-y-space ">
        <div>
          <h1>{data.heading}</h1>
          <h4>{data.subHeading} </h4>
        </div>
        <div className="mt-5">
          <Row className="px-4">
            {cardData.map((item) => {
              return (
                <Col className="padding-card">
                  <Cards
                    title={item.cardHeading}
                    text={item.cardSubheading}
                    url={item.videoURL}
                  />
                </Col>
              );
            })}

            {/* <Col className="padding-card">
              <Cards
                title="card2"
                text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
              />
            </Col>
            <Col className="padding-card">
              <Cards
                title="card3"
                text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
              />
            </Col>
            <Col className="padding-card">
              <Cards
                title="card4"
                text="Some quick example text to build on the card title and make up the
            bulk of the card's content."
              />
            </Col> */}
          </Row>
        </div>
      </div>
    </>
  );
}

export default How;
