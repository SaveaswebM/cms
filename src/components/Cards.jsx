import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Cards(props) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <video
          autoPlay
          src="https://cdnl.iconscout.com/lottie/premium/thumb/business-training-7245756-5901367.mp4"
          loop
          muted
          type="video/mp4"
          width={"100%"}
          height={"100%"}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
